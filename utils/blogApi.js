// Server-only client for the AiEngage Blog API (read-only, headless).
// Keys/URLs stay in env vars so the API key never reaches the browser bundle.
// Docs: Blog-API-Guide.pdf — base https://help.aiengagecrm.com/api/public/blogs.

const BASE = process.env.BLOG_API_BASE || 'https://help.aiengagecrm.com/api/public/blogs';
const ORG = process.env.BLOG_API_ORG || 'main';
const KEY = process.env.BLOG_API_KEY;

// The category (and its child categories) that hold the "What's New" changelog content — those
// posts are surfaced exclusively via /whats-new (see utils/whatsNewApi.js), never on the blog.
// Matches the category's `slug` in the CMS; update here if that slug is ever renamed.
export const WHATS_NEW_ROOT_SLUG = 'whats-new';

// The list endpoint caps pageSize server-side at 50 regardless of what's requested, so pulling
// every post (needed to filter a whole category subtree in/out — the API has no single param for
// that) means looping pages rather than asking for one big batch.
const API_PAGE_SIZE = 50;
const MAX_FETCH_PAGES = 20; // safety net against a runaway loop, not a realistic post count

const EMPTY_LIST = { data: [], categories: [], total: 0, page: 1, pageSize: 10, uncategorizedCount: 0 };

function buildUrl(path, params = {}) {
  const url = new URL(path ? `${BASE}/${path}` : BASE);
  url.searchParams.set('org', ORG);
  if (KEY) url.searchParams.set('key', KEY);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  });
  return url.toString();
}

/** A category's `parent` field references its parent's `slug` (not an id). Walks that chain to
 * collect `rootSlug` plus every descendant, so "is this post in category X or under it" is a
 * single Set lookup. */
export function collectSubtreeSlugs(categories, rootSlug) {
  const slugs = new Set([rootSlug]);
  let grew = true;
  while (grew) {
    grew = false;
    for (const c of categories) {
      if (c.parent && slugs.has(c.parent) && !slugs.has(c.slug)) {
        slugs.add(c.slug);
        grew = true;
      }
    }
  }
  return slugs;
}

function inSubtree(post, subtreeSlugs) {
  return Boolean(post.category && subtreeSlugs.has(post.category.slug));
}

/** Loops the list endpoint until every post matching `tag`/`sort` has been fetched (bounded by
 * MAX_FETCH_PAGES). Both getBlogList (exclude the What's New subtree) and getWhatsNewList
 * (include only it) need the full set before they can paginate themselves — there's no API param
 * for "category X or any of its children", so filtering has to happen here. */
async function fetchAllRaw({ tag, sort } = {}) {
  let all = [];
  let categories = [];
  let uncategorizedCount = 0;
  for (let page = 1; page <= MAX_FETCH_PAGES; page++) {
    let body;
    try {
      const res = await fetch(buildUrl(null, { page, pageSize: API_PAGE_SIZE, tag, sort }), { cache: 'no-store' });
      if (!res.ok) break;
      body = await res.json();
    } catch {
      break;
    }
    categories = body.categories || categories;
    uncategorizedCount = body.uncategorizedCount || uncategorizedCount;
    all = all.concat(body.data || []);
    if (!body.data || body.data.length < API_PAGE_SIZE || all.length >= (body.total || 0)) break;
  }
  return { data: all, categories, uncategorizedCount };
}

async function fetchPostRaw(slug) {
  try {
    const res = await fetch(buildUrl(encodeURIComponent(slug)), { cache: 'no-store' });
    if (res.status === 404) {
      const body = await res.json().catch(() => ({}));
      return { notFound: true, redirectTo: body.redirectTo || null };
    }
    if (!res.ok) return { notFound: true, redirectTo: null };
    const { data } = await res.json();
    return { data };
  } catch {
    return { notFound: true, redirectTo: null };
  }
}

/** Full post list + category tree (via fetchAllRaw) plus the derived "which posts/categories are
 * under the What's New subtree" sets — the single source both getBlogList (exclude) and
 * getBlogPost (sanitize prev/next/related so they never link into What's New) build on. */
async function getCatalog() {
  const { data: all, categories, uncategorizedCount } = await fetchAllRaw({ sort: 'recent' });
  const whatsNewCategorySlugs = collectSubtreeSlugs(categories, WHATS_NEW_ROOT_SLUG);
  const whatsNewPostSlugs = new Set(all.filter((p) => inSubtree(p, whatsNewCategorySlugs)).map((p) => p.slug));
  return { all, categories, uncategorizedCount, whatsNewCategorySlugs, whatsNewPostSlugs };
}

/** Blog list + category tree, with the "What's New on AiEngage" category and every child category
 * excluded — those posts (and their categories/tags) only ever surface via /whats-new. */
export async function getBlogList({ page = 1, pageSize = 10, category, tag, sort } = {}) {
  try {
    const { all, categories, uncategorizedCount, whatsNewCategorySlugs } = await getCatalog();
    let filtered = all.filter((post) => !inSubtree(post, whatsNewCategorySlugs));
    if (category) filtered = filtered.filter((post) => post.category?.slug === category);
    if (tag) filtered = filtered.filter((post) => post.tags?.includes(tag));

    const start = (page - 1) * pageSize;
    return {
      data: filtered.slice(start, start + pageSize),
      categories: categories.filter((c) => !whatsNewCategorySlugs.has(c.slug)),
      uncategorizedCount,
      total: filtered.length,
      page,
      pageSize,
    };
  } catch {
    return { ...EMPTY_LIST, page, pageSize };
  }
}

/** A single published blog by slug, with content/toc/seo/related/prev-next/etc. Returns
 * `{ notFound: true, redirectTo }` on 404, or if the post itself is a What's New entry (those
 * pages live at /whats-new/<slug>, not /blog/<slug>) — and strips previousBlog/nextBlog/
 * relatedBlogs down to non-What's-New posts, since the API computes those globally and would
 * otherwise link a blog reader straight into the changelog. */
export async function getBlogPost(slug) {
  const result = await fetchPostRaw(slug);
  if (result.notFound) return result;

  const { whatsNewCategorySlugs, whatsNewPostSlugs } = await getCatalog();
  if (inSubtree(result.data, whatsNewCategorySlugs)) return { notFound: true, redirectTo: null };

  const data = { ...result.data };
  if (data.previousBlog && whatsNewPostSlugs.has(data.previousBlog.slug)) data.previousBlog = null;
  if (data.nextBlog && whatsNewPostSlugs.has(data.nextBlog.slug)) data.nextBlog = null;
  if (Array.isArray(data.relatedBlogs)) data.relatedBlogs = data.relatedBlogs.filter((b) => !whatsNewPostSlugs.has(b.slug));
  return { data };
}

/** Most-viewed published blogs, for a "Popular posts" rail — excludes What's New posts. The
 * `popular` endpoint has no pagination to filter-then-slice against, so over-fetch and trim to
 * `limit` after excluding, rather than risk returning fewer than asked for. */
export async function getPopularBlogs(limit = 3) {
  try {
    const res = await fetch(buildUrl('popular', { limit: Math.max(limit * 4, 12) }), { cache: 'no-store' });
    if (!res.ok) return [];
    const body = await res.json();
    const { whatsNewCategorySlugs } = await getCatalog();
    return (body.data || []).filter((post) => !inSubtree(post, whatsNewCategorySlugs)).slice(0, limit);
  } catch {
    return [];
  }
}

/** Frequency-ranked tag cloud, since the API has no endpoint that enumerates every tag —
 * derived from the tags actually present on a recent batch of posts. getBlogList already
 * excludes What's New posts, so their tags never enter the count. */
export async function getTagCloud(limit = 10, sampleSize = 30) {
  const { data } = await getBlogList({ pageSize: sampleSize, sort: 'recent' });
  const counts = new Map();
  (data || []).forEach((post) => {
    (post.tags || []).forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1));
  });
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
}

// Exposed for utils/whatsNewApi.js, which needs the same fetch/auth machinery but flips the
// subtree filter to include-only instead of exclude.
export { fetchAllRaw, fetchPostRaw, inSubtree };

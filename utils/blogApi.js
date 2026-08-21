// Server-only client for the AiEngage Blog API (read-only, headless).
// Keys/URLs stay in env vars so the API key never reaches the browser bundle.
// Docs: Blog-API-Guide.pdf — base https://help.aiengagecrm.com/api/public/blogs.

const BASE = process.env.BLOG_API_BASE || 'https://help.aiengagecrm.com/api/public/blogs';
const ORG = process.env.BLOG_API_ORG || 'main';
const KEY = process.env.BLOG_API_KEY;

const EMPTY_LIST = { data: [], categories: [], total: 0, page: 1, pageSize: 10 };

function buildUrl(path, params = {}) {
  const url = new URL(path ? `${BASE}/${path}` : BASE);
  url.searchParams.set('org', ORG);
  if (KEY) url.searchParams.set('key', KEY);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  });
  return url.toString();
}

/** Blog list + the workspace's full category tree. Powers /blog, /blog/search and any
 * "recent posts" / "by category" / "by tag" rail. */
export async function getBlogList({ page = 1, pageSize = 10, category, tag, sort } = {}) {
  try {
    const res = await fetch(buildUrl(null, { page, pageSize, category, tag, sort }), { cache: 'no-store' });
    if (!res.ok) return { ...EMPTY_LIST, page, pageSize };
    return await res.json();
  } catch {
    return { ...EMPTY_LIST, page, pageSize };
  }
}

/** A single published blog by slug, with content/toc/seo/related/prev-next/etc.
 * Returns `{ notFound: true, redirectTo }` on 404 so the page can redirect() or notFound(). */
export async function getBlogPost(slug) {
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

/** Most-viewed published blogs, for a "Popular posts" rail. */
export async function getPopularBlogs(limit = 3) {
  try {
    const res = await fetch(buildUrl('popular', { limit }), { cache: 'no-store' });
    if (!res.ok) return [];
    const body = await res.json();
    return body.data || [];
  } catch {
    return [];
  }
}

/** Frequency-ranked tag cloud, since the API has no endpoint that enumerates every tag —
 * derived from the tags actually present on a recent batch of posts. */
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

// Server-only client for the "What's New on AiEngage" changelog — same Blog API as
// utils/blogApi.js, scoped to the WHATS_NEW_ROOT_NAME category and its children instead of
// excluding them. Posts under that subtree never appear on the blog; every other category never
// appears here.

import { fetchAllRaw, fetchPostRaw, collectSubtreeSlugs, inSubtree, findWhatsNewRoot } from './blogApi';

const EMPTY_LIST = { data: [], total: 0, page: 1, pageSize: 10, modules: [], years: [] };

// The API has no field distinguishing a "new feature" post from an "enhancement" — editors encode
// it as a CMS tag instead (e.g. "Enhancement" / "New Feature"), matched case-insensitively here.
// Anything without an explicit "enhancement" tag defaults to new-feature-update, same as the
// original hand-authored data's default.
const ENHANCEMENT_TAG_PATTERN = /enhancement/i;

function deriveTypeTag(post) {
  const tags = post.tags || [];
  return tags.some((t) => ENHANCEMENT_TAG_PATTERN.test(t)) ? 'enhancement' : 'new-feature-update';
}

/** Maps a raw API post onto the field names the What's New components already expect (same
 * shape the old hand-authored data/whatsNew.js entries had), so WhatsNewCard/WhatsNewListing
 * need no changes — only WhatsNewDetail's body rendering does (content is HTML now, not blocks). */
function mapEntry(post) {
  return {
    slug: post.slug,
    title: post.title,
    date: post.publishedAt ? post.publishedAt.slice(0, 10) : '',
    typeTag: deriveTypeTag(post),
    moduleTags: post.category?.name ? [post.category.name] : [],
    moduleSlug: post.category?.slug || null,
    image: post.imageUrl || post.thumbnailUrl || null,
    teaser: post.excerpt || '',
    content: post.content || '',
  };
}

async function getCatalog() {
  const { data: all, categories } = await fetchAllRaw({ sort: 'recent' });
  const subtreeSlugs = collectSubtreeSlugs(categories);
  const entries = all.filter((post) => inSubtree(post, subtreeSlugs));
  const root = findWhatsNewRoot(categories);
  const modules = root ? categories.filter((c) => c.parent === root.slug) : [];
  return { entries, modules };
}

/** Distinct years across every What's New post (not just the current filter), newest first —
 * powers the sidebar's Years list, same behaviour as the original getWhatsNewYears(). */
function yearsOf(entries) {
  const years = new Set(entries.filter((p) => p.publishedAt).map((p) => p.publishedAt.slice(0, 4)));
  return [...years].sort().reverse();
}

/** Filtered + paginated What's New list, plus the sidebar's Modules (What's New's child
 * categories) and Years (all-time, filter-independent) facets. `module` is a child category slug,
 * `type` is 'new-feature-update' | 'enhancement' | 'all'/falsy, `year` is a 4-digit string. */
export async function getWhatsNewList({ page = 1, pageSize = 10, module: moduleSlug, type, year } = {}) {
  try {
    const { entries, modules } = await getCatalog();
    const years = yearsOf(entries);

    let filtered = entries;
    if (moduleSlug) filtered = filtered.filter((post) => post.category?.slug === moduleSlug);
    if (year) filtered = filtered.filter((post) => post.publishedAt?.slice(0, 4) === year);
    if (type && type !== 'all') filtered = filtered.filter((post) => deriveTypeTag(post) === type);

    const start = (page - 1) * pageSize;
    return {
      data: filtered.slice(start, start + pageSize).map(mapEntry),
      total: filtered.length,
      page,
      pageSize,
      modules,
      years,
    };
  } catch {
    return { ...EMPTY_LIST, page, pageSize };
  }
}

/** Single What's New post by slug — 404s (with the API's redirectTo, if any) both when the slug
 * doesn't exist and when it exists but isn't under the What's New category subtree, since that
 * post's real page is /blog/<slug>, not here. */
export async function getWhatsNewPost(slug) {
  const result = await fetchPostRaw(slug);
  if (result.notFound) return result;

  const { categories } = await fetchAllRaw({ sort: 'recent' });
  const subtreeSlugs = collectSubtreeSlugs(categories);
  if (!inSubtree(result.data, subtreeSlugs)) return { notFound: true, redirectTo: null };

  return { data: mapEntry(result.data) };
}

/** Modules (What's New's child categories) + Years — powers the sidebar wherever the full
 * listing/pagination isn't already being fetched (e.g. the detail page). */
export async function getWhatsNewFacets() {
  const { entries, modules } = await getCatalog();
  return { modules, years: yearsOf(entries) };
}

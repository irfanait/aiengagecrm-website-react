// Shared constants + URL builders for the /blog section. Query-string state (category, tag,
// page, q) lives entirely in the URL, same pattern as /whats-new.

export const BLOG_PAGE_SIZE = 9;
export const BLOG_SEARCH_PAGE_SIZE = 30; // fetched once, then filtered/sliced server-side for search
export const BLOG_TAG_CLOUD_LIMIT = 10;

export const BLOG_HERO = {
  title: 'The AiEngage Blog',
  description: 'Insights, guides and product news on WhatsApp CRM, AI automation, lead capture and customer engagement.',
};

/** /blog?category=<slug>&page=<n> */
export function buildBlogUrl({ category, page } = {}) {
  const params = new URLSearchParams();
  if (category) params.set('category', category);
  if (page && page > 1) params.set('page', String(page));
  const qs = params.toString();
  return qs ? `/blog?${qs}` : '/blog';
}

/** /blog/search?q=<text>&tag=<tag>&page=<n> */
export function buildBlogSearchUrl({ q, tag, page } = {}) {
  const params = new URLSearchParams();
  if (q) params.set('q', q);
  if (tag) params.set('tag', tag);
  if (page && page > 1) params.set('page', String(page));
  const qs = params.toString();
  return qs ? `/blog/search?${qs}` : '/blog/search';
}

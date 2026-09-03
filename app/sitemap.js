import { seoData } from '../data/seoData';
import { SITE_URL } from '../utils/constants';
import { fetchAllRaw, collectSubtreeSlugs, inSubtree } from '../utils/blogApi';

// Every static page (data/seoData.js) plus every published blog and What's New post (fetched
// live from the headless Blog API — same source app/blog/[slug] and app/whats-new/[slug] render
// from, so a URL only ever appears here once it actually resolves). Noindexed static pages (e.g.
// pricing-old) are left out: Google's own guidance is that a sitemap shouldn't list URLs that ask
// not to be indexed. Regenerated on request rather than cached, so newly published posts and newly
// added pages show up without a redeploy.
export const revalidate = 3600;

export default async function sitemap() {
  const staticEntries = Object.values(seoData)
    .filter((entry) => !entry.noindex)
    .map((entry) => ({
      url: `${SITE_URL}${entry.path === '/' ? '' : entry.path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: entry.path === '/' ? 1 : 0.8,
    }));

  let postEntries = [];
  try {
    const { data: posts, categories } = await fetchAllRaw({ sort: 'recent' });
    const whatsNewSlugs = collectSubtreeSlugs(categories);
    postEntries = posts
      .filter((post) => post.slug)
      .map((post) => {
        const isWhatsNew = inSubtree(post, whatsNewSlugs);
        const modified = post.updatedAt || post.publishedAt;
        return {
          url: `${SITE_URL}/${isWhatsNew ? 'whats-new' : 'blog'}/${post.slug}`,
          lastModified: modified ? new Date(modified) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        };
      });
  } catch {
    // Blog API unreachable at build/request time — ship the static pages rather than fail the
    // whole sitemap; the next revalidation picks the posts back up.
    postEntries = [];
  }

  return [...staticEntries, ...postEntries];
}

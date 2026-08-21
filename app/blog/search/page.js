import Link from 'next/link';
import BlogHero from '../../../components/organisms/BlogHero/BlogHero';
import BlogResultsGrid from '../../../components/organisms/BlogResultsGrid/BlogResultsGrid';
import BlogCategoryChips from '../../../components/molecules/BlogCategoryChips/BlogCategoryChips';
import BlogPagination from '../../../components/molecules/BlogPagination/BlogPagination';
import BlogSidebar from '../../../components/organisms/BlogSidebar/BlogSidebar';
import BlogEmptyState from '../../../components/organisms/BlogEmptyState/BlogEmptyState';
import CTASection from '../../../components/organisms/CTASection/CTASection';
import JsonLd from '../../../components/common/JsonLd/JsonLd';
import Icon from '../../../components/atoms/Icon/Icon';
import { buildMetadata, breadcrumbSchema } from '../../../utils/seo';
import { seoData } from '../../../data/seoData';
import { getBlogList, getTagCloud } from '../../../utils/blogApi';
import { BLOG_PAGE_SIZE, BLOG_SEARCH_PAGE_SIZE, buildBlogSearchUrl } from '../../../data/blog';
import styles from './page.module.css';

export const metadata = buildMetadata(seoData.blogSearch);

/** Free-text search over a fetched batch — the public API has no `q=` param, so title/excerpt/
 * tag substring matching happens here on the server (the fetch + API key stay server-side). */
function matchesQuery(post, q) {
  const needle = q.toLowerCase();
  return (
    post.title?.toLowerCase().includes(needle) ||
    post.excerpt?.toLowerCase().includes(needle) ||
    post.tags?.some((t) => t.toLowerCase().includes(needle))
  );
}

export default async function BlogSearchPage({ searchParams }) {
  const params = await searchParams;
  const q = typeof params.q === 'string' ? params.q.trim() : '';
  const tag = typeof params.tag === 'string' ? params.tag : '';
  const page = typeof params.page === 'string' ? Math.max(1, parseInt(params.page, 10) || 1) : 1;
  const isFiltered = Boolean(q || tag);

  let posts = [];
  let categories = [];
  let uncategorizedCount = 0;
  let totalPages = 1;

  if (q) {
    // No server-side free-text search — fetch a batch (tag-filtered too, if both given) and match client-side.
    const batch = await getBlogList({ pageSize: BLOG_SEARCH_PAGE_SIZE, sort: 'recent', tag: tag || undefined });
    categories = batch.categories || [];
    uncategorizedCount = batch.uncategorizedCount || 0;
    const filtered = batch.data.filter((post) => matchesQuery(post, q));
    totalPages = Math.max(1, Math.ceil(filtered.length / BLOG_PAGE_SIZE));
    posts = filtered.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE);
  } else if (tag) {
    const result = await getBlogList({ page, pageSize: BLOG_PAGE_SIZE, tag });
    categories = result.categories || [];
    uncategorizedCount = result.uncategorizedCount || 0;
    posts = result.data;
    totalPages = Math.max(1, Math.ceil((result.total || 0) / (result.pageSize || BLOG_PAGE_SIZE)));
  } else {
    const result = await getBlogList({ page, pageSize: BLOG_PAGE_SIZE, sort: 'recent' });
    categories = result.categories || [];
    uncategorizedCount = result.uncategorizedCount || 0;
    posts = result.data;
    totalPages = Math.max(1, Math.ceil((result.total || 0) / (result.pageSize || BLOG_PAGE_SIZE)));
  }

  const [recentResult, tagCloud] = await Promise.all([getBlogList({ pageSize: 5, sort: 'recent' }), getTagCloud()]);

  const hrefFor = (p) => buildBlogSearchUrl({ q, tag, page: p });
  const resultLabel = q ? `"${q}"` : tag ? `tag "${tag}"` : null;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: 'Search', path: '/blog/search' },
        ])}
      />

      <BlogHero searchValue={q} />

      {isFiltered && posts.length === 0 ? (
        <BlogEmptyState query={q || tag} categories={categories} tags={tagCloud} />
      ) : (
        <BlogResultsGrid
          defaultOpen={false}
          toolbarLeft={<BlogCategoryChips categories={categories} />}
          aboveGrid={
            resultLabel && (
              <div className={styles.resultsHeader}>
                <p className={styles.resultsCount}>
                  {posts.length} result{posts.length === 1 ? '' : 's'} for {resultLabel}
                </p>
                <Link href="/blog" className={styles.clearLink}>
                  Clear search
                  <Icon name="close" size={14} />
                </Link>
              </div>
            )
          }
          posts={posts}
          pagination={<BlogPagination page={page} totalPages={totalPages} hrefFor={hrefFor} />}
          sidebar={
            <BlogSidebar recent={recentResult.data || []} categories={categories} tags={tagCloud} uncategorizedCount={uncategorizedCount} />
          }
        />
      )}

      <CTASection
        title="See AiEngage in action."
        description="Capture every lead on WhatsApp and automate your follow-ups — so no conversation ever goes cold."
        titleSize={40}
      />
    </>
  );
}

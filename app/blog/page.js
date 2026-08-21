import BlogHero from '../../components/organisms/BlogHero/BlogHero';
import BlogFeatured from '../../components/organisms/BlogFeatured/BlogFeatured';
import BlogResultsGrid from '../../components/organisms/BlogResultsGrid/BlogResultsGrid';
import BlogCategoryChips from '../../components/molecules/BlogCategoryChips/BlogCategoryChips';
import BlogPagination from '../../components/molecules/BlogPagination/BlogPagination';
import BlogSidebar from '../../components/organisms/BlogSidebar/BlogSidebar';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { getBlogList, getTagCloud } from '../../utils/blogApi';
import { BLOG_PAGE_SIZE, buildBlogUrl } from '../../data/blog';

export const metadata = buildMetadata(seoData.blog);

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const category = typeof params.category === 'string' ? params.category : null;
  const page = typeof params.page === 'string' ? Math.max(1, parseInt(params.page, 10) || 1) : 1;

  const [list, recentResult, tags] = await Promise.all([
    getBlogList({ page, pageSize: BLOG_PAGE_SIZE, category, sort: 'recent' }),
    getBlogList({ pageSize: 5, sort: 'recent' }),
    getTagCloud(),
  ]);

  // No admin "featured" flag exists in the CMS anymore — the hero slot always shows whichever
  // post is most recently published, i.e. the first item once the list is sorted by recency.
  const showFeatured = !category && page === 1 && list.data.length > 0;
  const featuredPost = showFeatured ? list.data[0] : null;
  const gridPosts = featuredPost ? list.data.slice(1) : list.data;

  const totalPages = Math.max(1, Math.ceil((list.total || 0) / (list.pageSize || BLOG_PAGE_SIZE)));

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])} />

      <BlogHero />
      {featuredPost && <BlogFeatured post={featuredPost} />}

      <BlogResultsGrid
        defaultOpen
        toolbarLeft={<BlogCategoryChips categories={list.categories || []} activeCategory={category} />}
        posts={gridPosts}
        pagination={
          <BlogPagination page={page} totalPages={totalPages} hrefFor={(p) => buildBlogUrl({ category, page: p })} />
        }
        sidebar={
          <BlogSidebar
            recent={recentResult.data || []}
            categories={list.categories || []}
            tags={tags}
            activeCategory={category}
            uncategorizedCount={list.uncategorizedCount}
          />
        }
      />

      <CTASection
        title="See AiEngage in action."
        description="Capture every lead on WhatsApp and automate your follow-ups — so no conversation ever goes cold."
        titleSize={40}
      />
    </>
  );
}

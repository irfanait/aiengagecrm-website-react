import { notFound, redirect } from 'next/navigation';
import BlogReadingProgress from '../../../components/atoms/BlogReadingProgress/BlogReadingProgress';
import BlogBreadcrumb from '../../../components/molecules/BlogBreadcrumb/BlogBreadcrumb';
import BlogPostHeader from '../../../components/organisms/BlogPostHeader/BlogPostHeader';
import BlogPostHeroImage from '../../../components/organisms/BlogPostHeroImage/BlogPostHeroImage';
import BlogPostBody from '../../../components/organisms/BlogPostBody/BlogPostBody';
import BlogPostBanner from '../../../components/organisms/BlogPostBanner/BlogPostBanner';
import BlogTagList from '../../../components/molecules/BlogTagList/BlogTagList';
import BlogAuthorCard from '../../../components/organisms/BlogAuthorCard/BlogAuthorCard';
import BlogPostDates from '../../../components/molecules/BlogPostDates/BlogPostDates';
import BlogKnowledgebaseLinks from '../../../components/organisms/BlogKnowledgebaseLinks/BlogKnowledgebaseLinks';
import BlogPostNav from '../../../components/organisms/BlogPostNav/BlogPostNav';
import BlogRelated from '../../../components/organisms/BlogRelated/BlogRelated';
import CTASection from '../../../components/organisms/CTASection/CTASection';
import JsonLd from '../../../components/common/JsonLd/JsonLd';
import { getBlogPost, getPopularBlogs } from '../../../utils/blogApi';
import { buildMetadata, breadcrumbSchema } from '../../../utils/seo';
import { getAuthor } from '../../../utils/blogFormat';
import { SITE_URL } from '../../../utils/constants';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const result = await getBlogPost(slug);
  if (result.notFound) return {};

  const post = result.data;
  return buildMetadata({
    path: `/blog/${post.slug}`,
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    keywords: post.tags,
    image: post.imageUrl || '/og/default.png',
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const result = await getBlogPost(slug);

  if (result.notFound) {
    if (result.redirectTo) redirect(result.redirectTo);
    notFound();
  }

  const post = result.data;
  const popular = await getPopularBlogs(3);
  const url = `${SITE_URL}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <BlogReadingProgress />
      <BlogBreadcrumb title={post.title} category={post.category} />

      <article data-blog-post>
        <BlogPostHeader post={post} url={url} />
        <BlogPostHeroImage src={post.imageUrl} alt={post.title} />
        <BlogPostBody toc={post.toc} contentHtml={post.content} />
        <BlogPostBanner banner={post.banner} />
        <BlogTagList tags={post.tags} />
        <BlogAuthorCard author={getAuthor(post)} />
        <BlogKnowledgebaseLinks links={post.knowledgebaseLinks} />
        <BlogPostDates publishedAt={post.publishedAt} updatedAt={post.updatedAt} />
      </article>

      <BlogPostNav previousBlog={post.previousBlog} nextBlog={post.nextBlog} />
      <BlogRelated related={post.relatedBlogs} popular={popular} />

      <CTASection
        title="Put your WhatsApp follow-ups on autopilot."
        description="Capture every lead on WhatsApp and automate your follow-ups — so no conversation ever goes cold."
        titleSize={38}
      />
    </>
  );
}

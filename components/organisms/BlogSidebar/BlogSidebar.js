import Link from 'next/link';
import BlogSearchBar from '../../molecules/BlogSearchBar/BlogSearchBar';
import BlogCardCompact from '../../molecules/BlogCardCompact/BlogCardCompact';
import BlogNewsletterForm from '../../molecules/BlogNewsletterForm/BlogNewsletterForm';
import { buildBlogUrl, buildBlogSearchUrl } from '../../../data/blog';
import styles from './BlogSidebar.module.css';

/** Recent posts / Categories / Popular tags / Newsletter rail shown on /blog and /blog/search.
 * All data (recent, categories, tags) comes from real API calls made by the page. */
export default function BlogSidebar({ recent, categories, tags, activeCategory, uncategorizedCount }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.card}>
        <BlogSearchBar compact />
      </div>

      {recent.length > 0 && (
        <div className={styles.card}>
          <h2 className={styles.heading}>Recent posts</h2>
          <div className={styles.recentList}>
            {recent.map((post) => (
              <BlogCardCompact key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}

      {(categories.length > 0 || uncategorizedCount > 0) && (
        <div className={styles.card}>
          <h2 className={styles.heading}>Categories</h2>
          <div className={styles.categoryList}>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={buildBlogUrl({ category: c.slug })}
                className={`${styles.categoryRow} ${activeCategory === c.slug ? styles.categoryRowActive : ''}`}
              >
                <span>
                  {c.emoji ? `${c.emoji} ` : ''}
                  {c.name}
                </span>
                {typeof c.postCount === 'number' && <span className={styles.countPill}>{c.postCount}</span>}
              </Link>
            ))}
            {uncategorizedCount > 0 && (
              <Link
                href={buildBlogUrl({ category: 'none' })}
                className={`${styles.categoryRow} ${activeCategory === 'none' ? styles.categoryRowActive : ''}`}
              >
                <span>Uncategorized</span>
                <span className={styles.countPill}>{uncategorizedCount}</span>
              </Link>
            )}
          </div>
        </div>
      )}

      {tags.length > 0 && (
        <div className={styles.card}>
          <h2 className={styles.heading}>Popular tags</h2>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Link key={tag} href={buildBlogSearchUrl({ tag })} className={styles.tag}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className={styles.newsletter}>
        <h2 className={styles.newsletterTitle}>Get AiEngage tips in your inbox</h2>
        <p className={styles.newsletterDesc}>Product news and practical playbooks, once a fortnight.</p>
        <BlogNewsletterForm />
      </div>
    </aside>
  );
}

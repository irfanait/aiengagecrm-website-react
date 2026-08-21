import Link from 'next/link';
import { formatBlogDate, getReadTime } from '../../../utils/blogFormat';
import styles from './BlogCardCompact.module.css';

/** Small thumbnail + title + meta row — used for "Recent posts", "Popular posts" and
 * "Related articles" rails on the blog list, search and post-detail pages. Related/popular
 * items from the API only carry {title, slug, excerpt, thumbnailUrl} — author/date/read-time
 * render only when the source list actually included them. */
export default function BlogCardCompact({ post }) {
  const thumb = post.thumbnailUrl || post.imageUrl;
  const date = formatBlogDate(post.publishedAt);
  const readTime = getReadTime(post);
  const views = typeof post.views === 'number' ? `${post.views.toLocaleString()} view${post.views === 1 ? '' : 's'}` : null;
  const authorName = typeof post.author === 'string' ? post.author : post.author?.name;
  const metaParts = [authorName, date, views].filter(Boolean);

  return (
    <Link href={`/blog/${post.slug}`} className={styles.row}>
      <span className={styles.thumb}>
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element -- external, admin-uploaded blog media
          <img src={thumb} alt="" className={styles.thumbImg} loading="lazy" />
        ) : null}
      </span>
      <span className={styles.body}>
        {readTime && <span className={styles.readTime}>{readTime} min read</span>}
        <span className={styles.title}>{post.title}</span>
        {metaParts.length > 0 && <span className={styles.meta}>{metaParts.join(' · ')}</span>}
      </span>
    </Link>
  );
}

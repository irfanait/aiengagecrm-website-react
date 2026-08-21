import Link from 'next/link';
import Avatar from '../../atoms/Avatar/Avatar';
import { formatBlogDate, getReadTime, getAuthor } from '../../../utils/blogFormat';
import styles from './BlogCard.module.css';

/** Standard blog post card used on /blog and /blog/search grids. */
export default function BlogCard({ post }) {
  const author = getAuthor(post);
  const thumb = post.thumbnailUrl || post.imageUrl;
  const readTime = getReadTime(post);

  return (
    <article className={styles.card}>
      <Link href={`/blog/${post.slug}`} className={styles.imageWrap}>
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element -- external, admin-uploaded blog media on an unknown/varying domain
          <img src={thumb} alt={post.title} className={styles.image} loading="lazy" />
        ) : (
          <span className={styles.imagePlaceholder} aria-hidden="true" />
        )}
      </Link>

      <div className={styles.body}>
        <div className={styles.metaRow}>
          {post.category?.name && <span className={styles.categoryPill}>{post.category.name}</span>}
          {readTime && <span className={styles.readTime}>{readTime} min read</span>}
        </div>

        <h3 className={styles.title}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}

        <div className={styles.footer}>
          <Avatar name={author.name} src={author.avatarUrl} size={32} />
          <span className={styles.author}>{author.name}</span>
          {post.publishedAt && (
            <>
              <span className={styles.dot}>·</span>
              <time className={styles.date} dateTime={post.publishedAt}>
                {formatBlogDate(post.publishedAt)}
              </time>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

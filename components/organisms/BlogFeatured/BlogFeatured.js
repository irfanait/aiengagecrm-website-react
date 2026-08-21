import Link from 'next/link';
import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import Avatar from '../../atoms/Avatar/Avatar';
import { formatBlogDate, getReadTime, getAuthor } from '../../../utils/blogFormat';
import styles from './BlogFeatured.module.css';

/** Hero card for the most recently published post, shown at the top of the unfiltered blog list
 * (no curated "featured" flag exists in the CMS — this is always just the latest post). */
export default function BlogFeatured({ post }) {
  const author = getAuthor(post);
  const image = post.imageUrl || post.thumbnailUrl;
  const readTime = getReadTime(post);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.eyebrow}>FEATURED ARTICLE</div>
        <article className={styles.card}>
          <Link href={`/blog/${post.slug}`} className={styles.imageWrap}>
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element -- external, admin-uploaded blog media
              <img src={image} alt={post.title} className={styles.image} />
            ) : (
              <span className={styles.imagePlaceholder} aria-hidden="true" />
            )}
          </Link>

          <div className={styles.body}>
            <div className={styles.metaRow}>
              {post.category?.name && <span className={styles.categoryPill}>{post.category.name}</span>}
              {readTime && <span className={styles.readTime}>{readTime} min read</span>}
            </div>
            <h2 className={styles.title}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}

            <div className={styles.footer}>
              <div className={styles.authorRow}>
                <Avatar name={author.name} src={author.avatarUrl} size={42} />
                <div>
                  <div className={styles.author}>{author.name}</div>
                  <time className={styles.date} dateTime={post.publishedAt}>
                    {formatBlogDate(post.publishedAt)}
                  </time>
                </div>
              </div>
              <Link href={`/blog/${post.slug}`} className={styles.readLink}>
                Read article
                <Icon name="arrow_forward" size={16} />
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}

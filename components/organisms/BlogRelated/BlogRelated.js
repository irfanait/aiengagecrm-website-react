import Container from '../../common/Container/Container';
import BlogCardCompact from '../../molecules/BlogCardCompact/BlogCardCompact';
import styles from './BlogRelated.module.css';

/** Two-column "Related articles" (admin-picked, `data.relatedBlogs`) + "Popular posts"
 * (from the /popular endpoint) rail shown below the article. Renders nothing if both are empty. */
export default function BlogRelated({ related, popular }) {
  if (!related?.length && !popular?.length) return null;

  return (
    <section className={styles.section}>
      <Container className={styles.row}>
        {related?.length > 0 && (
          <div className={styles.col}>
            <div className={styles.heading}>
              <span className={styles.bar} />
              Related articles
            </div>
            <div className={styles.list}>
              {related.map((post) => (
                <BlogCardCompact key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}

        {popular?.length > 0 && (
          <div className={styles.col}>
            <div className={styles.heading}>
              <span className={styles.bar} />
              Popular posts
            </div>
            <div className={styles.list}>
              {popular.map((post) => (
                <BlogCardCompact key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

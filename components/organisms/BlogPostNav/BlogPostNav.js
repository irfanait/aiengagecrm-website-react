import Link from 'next/link';
import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './BlogPostNav.module.css';

/** Previous/Next post navigation, from the API's `previousBlog`/`nextBlog` neighbours. */
export default function BlogPostNav({ previousBlog, nextBlog }) {
  if (!previousBlog && !nextBlog) return null;

  return (
    <section className={styles.section}>
      <Container className={styles.row}>
        {previousBlog ? (
          <Link href={`/blog/${previousBlog.slug}`} className={`${styles.card} ${styles.prev}`}>
            <span className={styles.label}>
              <Icon name="arrow_back" size={14} />
              Previous
            </span>
            <span className={styles.title}>{previousBlog.title}</span>
          </Link>
        ) : (
          <span />
        )}

        {nextBlog ? (
          <Link href={`/blog/${nextBlog.slug}`} className={`${styles.card} ${styles.next}`}>
            <span className={styles.label}>
              Next
              <Icon name="arrow_forward" size={14} />
            </span>
            <span className={styles.title}>{nextBlog.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </Container>
    </section>
  );
}

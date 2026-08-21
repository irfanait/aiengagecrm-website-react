import Link from 'next/link';
import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import { buildBlogUrl } from '../../../data/blog';
import styles from './BlogBreadcrumb.module.css';

/** Home / Blog / Category / Title trail + an "All articles" shortcut back to the list. */
export default function BlogBreadcrumb({ title, category }) {
  return (
    <div className={styles.wrap}>
      <Container className={styles.row}>
        <nav className={styles.trail} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.sep}>/</span>
          <Link href="/blog">Blog</Link>
          {category?.name && (
            <>
              <span className={styles.sep}>/</span>
              <Link href={buildBlogUrl({ category: category.slug })}>{category.name}</Link>
            </>
          )}
          <span className={styles.sep}>/</span>
          <span className={styles.current}>{title}</span>
        </nav>

        <Link href="/blog" className={styles.allLink}>
          <Icon name="arrow_back" size={15} />
          All articles
        </Link>
      </Container>
    </div>
  );
}

import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import styles from './BlogPagination.module.css';

/** Prev / numbered pages / Next. `hrefFor(page)` builds the URL for a given page number,
 * so this stays agnostic to which filters (category/tag/q) are active. */
export default function BlogPagination({ page, totalPages, hrefFor }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={styles.row} aria-label="Pagination">
      <Link href={hrefFor(page - 1)} aria-disabled={page <= 1} className={`${styles.step} ${page <= 1 ? styles.disabled : ''}`}>
        <Icon name="chevron_left" size={16} />
        Prev
      </Link>

      <div className={styles.numbers}>
        {pages.map((p) => (
          <Link key={p} href={hrefFor(p)} className={p === page ? styles.numberActive : styles.number}>
            {p}
          </Link>
        ))}
      </div>

      <Link
        href={hrefFor(page + 1)}
        aria-disabled={page >= totalPages}
        className={`${styles.step} ${page >= totalPages ? styles.disabled : ''}`}
      >
        Next
        <Icon name="chevron_right" size={16} />
      </Link>
    </nav>
  );
}

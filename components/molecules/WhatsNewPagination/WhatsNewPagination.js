import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import { buildWhatsNewFilterUrl } from '../../../data/whatsNew';
import styles from './WhatsNewPagination.module.css';

/** Prev/Next + numbered page links for the listing grid. Page state lives in the URL. */
export default function WhatsNewPagination({ page, totalPages, typeFilter, moduleFilter, yearFilter }) {
  if (totalPages <= 1) return null;

  const hrefFor = (p) => buildWhatsNewFilterUrl({ type: typeFilter, module: moduleFilter, year: yearFilter, page: p });
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={styles.row} aria-label="Pagination">
      <Link
        href={hrefFor(page - 1)}
        aria-disabled={page <= 1}
        className={`${styles.step} ${page <= 1 ? styles.stepDisabled : ''}`}
      >
        <Icon name="chevron_left" size={16} />
        Prev
      </Link>

      <div className={styles.numbers}>
        {pages.map((p) => (
          <Link key={p} href={hrefFor(p)} className={`${styles.number} ${p === page ? styles.numberActive : ''}`}>
            {p}
          </Link>
        ))}
      </div>

      <Link
        href={hrefFor(page + 1)}
        aria-disabled={page >= totalPages}
        className={`${styles.step} ${page >= totalPages ? styles.stepDisabled : ''}`}
      >
        Next
        <Icon name="chevron_right" size={16} />
      </Link>
    </nav>
  );
}

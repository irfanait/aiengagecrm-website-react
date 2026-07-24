import Link from 'next/link';
import { WN_TYPE_FILTERS, buildWhatsNewFilterUrl } from '../../../data/whatsNew';
import styles from './WhatsNewTypeTabs.module.css';

/**
 * Update-type pill row (All / New Features / Product Enhancements). Plain links to
 * /whats-new?type=... — filtering is driven by the URL, so this works identically whether it's
 * rendered on the listing page or a detail page (where it just navigates back to the list).
 */
export default function WhatsNewTypeTabs({ active, moduleFilter, yearFilter }) {
  return (
    <nav className={styles.row} aria-label="Filter updates by type">
      {WN_TYPE_FILTERS.map((f) => {
        const isActive = (active || 'all') === f.key;
        const href = buildWhatsNewFilterUrl({ type: f.key, module: moduleFilter, year: yearFilter });
        return (
          <Link key={f.key} href={href} className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}>
            {f.label}
          </Link>
        );
      })}
    </nav>
  );
}

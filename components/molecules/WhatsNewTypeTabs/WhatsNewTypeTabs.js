import Link from 'next/link';
import { WN_TYPE_FILTERS, buildWhatsNewFilterUrl } from '../../../data/whatsNew';
import styles from './WhatsNewTypeTabs.module.css';

/**
 * Update-type pill row (All / New Features / Product Enhancements). Plain links to
 * /whats-new?type=... — filtering is driven by the URL, so this works identically whether it's
 * rendered on the listing page or a detail page (where it just navigates back to the list).
 * Deliberately ignores any active module/year (sidebar) filter so it always applies on its own,
 * instead of ANDing with the sidebar and potentially producing a 0-result combination.
 */
export default function WhatsNewTypeTabs({ active }) {
  return (
    <nav className={styles.row} aria-label="Filter updates by type">
      {WN_TYPE_FILTERS.map((f) => {
        const isActive = (active || 'all') === f.key;
        const href = buildWhatsNewFilterUrl({ type: f.key });
        return (
          <Link key={f.key} href={href} className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}>
            {f.label}
          </Link>
        );
      })}
    </nav>
  );
}

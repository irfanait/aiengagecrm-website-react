import Link from 'next/link';
import { WN_MODULE_FILTERS, buildWhatsNewFilterUrl } from '../../../data/whatsNew';
import styles from './WhatsNewSidebar.module.css';

/**
 * Left column: "Modules" and "Years" filter links. These two combine with each other (module +
 * year is a sensible combination), but deliberately drop any active top-bar type filter — see
 * WhatsNewTypeTabs — so the sidebar always applies on its own instead of ANDing with the top
 * filter and potentially producing a 0-result combination.
 */
export default function WhatsNewSidebar({ activeModule, activeYear, years }) {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.heading}>Modules</h3>
      <ul className={styles.list}>
        <li>
          <Link
            href={buildWhatsNewFilterUrl({ module: null, year: activeYear })}
            className={activeModule ? styles.link : styles.linkActive}
          >
            All Modules
          </Link>
        </li>
        {WN_MODULE_FILTERS.map((m) => {
          const isActive = activeModule === m;
          const href = buildWhatsNewFilterUrl({ module: isActive ? null : m, year: activeYear });
          return (
            <li key={m}>
              <Link href={href} className={isActive ? styles.linkActive : styles.link}>
                {m}
              </Link>
            </li>
          );
        })}
      </ul>

      <h3 className={styles.heading}>Years</h3>
      <ul className={styles.list}>
        {years.map((y) => {
          const isActive = activeYear === y;
          const href = buildWhatsNewFilterUrl({ module: activeModule, year: isActive ? null : y });
          return (
            <li key={y}>
              <Link href={href} className={isActive ? styles.linkActive : styles.link}>
                {y}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

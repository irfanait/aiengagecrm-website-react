import Link from 'next/link';
import { WN_MODULE_FILTERS, buildWhatsNewFilterUrl } from '../../../data/whatsNew';
import styles from './WhatsNewSidebar.module.css';

/** Left column: "Modules" and "Years" filter links, kept alongside the active type/module/year. */
export default function WhatsNewSidebar({ typeFilter, activeModule, activeYear, years }) {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.heading}>Modules</h3>
      <ul className={styles.list}>
        {WN_MODULE_FILTERS.map((m) => {
          const isActive = activeModule === m;
          const href = buildWhatsNewFilterUrl({ type: typeFilter, module: isActive ? null : m, year: activeYear });
          return (
            <li key={m}>
              <Link href={href} className={isActive ? styles.linkActive : styles.link}>
                {m}
              </Link>
            </li>
          );
        })}
      </ul>

      <hr className={styles.divider} />

      <h3 className={styles.heading}>Years</h3>
      <ul className={styles.list}>
        {years.map((y) => {
          const isActive = activeYear === y;
          const href = buildWhatsNewFilterUrl({ type: typeFilter, module: activeModule, year: isActive ? null : y });
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

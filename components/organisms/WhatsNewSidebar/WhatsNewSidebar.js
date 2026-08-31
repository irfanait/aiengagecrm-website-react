import Link from 'next/link';
import { buildWhatsNewFilterUrl } from '../../../data/whatsNew';
import styles from './WhatsNewSidebar.module.css';

/**
 * Left column: "Modules" and "Years" filter links. `modules` is the CMS's child categories under
 * "What's New on AiEngage" ([{name, slug}, ...], fetched server-side — see utils/whatsNewApi.js);
 * `activeModule`/the module filter URL param carry the category *slug*, matched against `m.slug`.
 * Modules and Years combine with each other (a sensible pairing), but deliberately drop any active
 * top-bar type filter — see WhatsNewTypeTabs — so the sidebar always applies on its own instead of
 * ANDing with the top filter and potentially producing a 0-result combination.
 */
export default function WhatsNewSidebar({ activeModule, activeYear, years, modules }) {
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
        {modules.map((m) => {
          const isActive = activeModule === m.slug;
          const href = buildWhatsNewFilterUrl({ module: isActive ? null : m.slug, year: activeYear });
          return (
            <li key={m.slug}>
              <Link href={href} className={isActive ? styles.linkActive : styles.link}>
                {m.name}
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

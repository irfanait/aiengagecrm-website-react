import Container from '../../common/Container/Container';
import WhatsNewCard from '../../molecules/WhatsNewCard/WhatsNewCard';
import WhatsNewSidebar from '../WhatsNewSidebar/WhatsNewSidebar';
import { getWhatsNewYears } from '../../../data/whatsNew';
import styles from './WhatsNewListing.module.css';

/**
 * Sidebar (Modules/Years) + the filtered card grid. Filtering is done here, from plain
 * query-param values passed down by app/whats-new/page.js — no client JS involved.
 */
export default function WhatsNewListing({ entries, typeFilter, moduleFilter, yearFilter }) {
  const filtered = entries.filter((e) => {
    if (typeFilter && typeFilter !== 'all' && e.typeTag !== typeFilter) return false;
    if (moduleFilter && !e.moduleTags.includes(moduleFilter)) return false;
    if (yearFilter && e.date.slice(0, 4) !== yearFilter) return false;
    return true;
  });

  return (
    <section className={styles.section}>
      <Container className={styles.body}>
        <WhatsNewSidebar typeFilter={typeFilter} activeModule={moduleFilter} activeYear={yearFilter} years={getWhatsNewYears()} />

        <div className={styles.grid}>
          {filtered.length ? (
            filtered.map((entry) => <WhatsNewCard key={entry.slug} entry={entry} />)
          ) : (
            <div className={styles.empty}>No updates match this filter yet — check back soon.</div>
          )}
        </div>
      </Container>
    </section>
  );
}

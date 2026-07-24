import Link from 'next/link';
import Container from '../../common/Container/Container';
import WhatsNewCard from '../../molecules/WhatsNewCard/WhatsNewCard';
import WhatsNewPagination from '../../molecules/WhatsNewPagination/WhatsNewPagination';
import WhatsNewSidebar from '../WhatsNewSidebar/WhatsNewSidebar';
import { getWhatsNewYears, WN_PAGE_SIZE } from '../../../data/whatsNew';
import styles from './WhatsNewListing.module.css';

/**
 * Sidebar (Modules/Years) + the filtered, paginated card grid. Filtering and pagination are done
 * here, from plain query-param values passed down by app/whats-new/page.js — no client JS involved.
 */
export default function WhatsNewListing({ entries, typeFilter, moduleFilter, yearFilter, page }) {
  const filtered = entries.filter((e) => {
    if (typeFilter && typeFilter !== 'all' && e.typeTag !== typeFilter) return false;
    if (moduleFilter && !e.moduleTags.includes(moduleFilter)) return false;
    if (yearFilter && e.date.slice(0, 4) !== yearFilter) return false;
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / WN_PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const pageEntries = filtered.slice((currentPage - 1) * WN_PAGE_SIZE, currentPage * WN_PAGE_SIZE);

  return (
    <section className={styles.section}>
      <Container className={styles.body}>
        <WhatsNewSidebar typeFilter={typeFilter} activeModule={moduleFilter} activeYear={yearFilter} years={getWhatsNewYears()} />

        <div className={styles.grid}>
          <p className={styles.count}>{filtered.length} update{filtered.length === 1 ? '' : 's'}</p>
          {pageEntries.length ? (
            pageEntries.map((entry) => <WhatsNewCard key={entry.slug} entry={entry} />)
          ) : (
            <div className={styles.empty}>
              <p>No updates match these filters.</p>
              <Link href="/whats-new" className={styles.clearLink}>
                Clear filters
              </Link>
            </div>
          )}
          <WhatsNewPagination page={currentPage} totalPages={totalPages} typeFilter={typeFilter} moduleFilter={moduleFilter} yearFilter={yearFilter} />
        </div>
      </Container>
    </section>
  );
}

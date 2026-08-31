import Link from 'next/link';
import Container from '../../common/Container/Container';
import WhatsNewCard from '../../molecules/WhatsNewCard/WhatsNewCard';
import WhatsNewPagination from '../../molecules/WhatsNewPagination/WhatsNewPagination';
import WhatsNewSidebar from '../WhatsNewSidebar/WhatsNewSidebar';
import { WN_PAGE_SIZE } from '../../../data/whatsNew';
import styles from './WhatsNewListing.module.css';

/**
 * Sidebar (Modules/Years) + the card grid. `entries` arrives already filtered and paginated by
 * app/whats-new/page.js (via getWhatsNewList, which does the filtering server-side against the
 * CMS's full post set — see utils/whatsNewApi.js) — this component only renders what it's given,
 * plus the pagination controls from `total`.
 */
export default function WhatsNewListing({ entries, total, page, typeFilter, moduleFilter, yearFilter, modules, years }) {
  const totalPages = Math.max(1, Math.ceil(total / WN_PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, page), totalPages);

  return (
    <section className={styles.section}>
      <Container className={styles.body}>
        <WhatsNewSidebar activeModule={moduleFilter} activeYear={yearFilter} years={years} modules={modules} />

        <div className={styles.grid}>
          <p className={styles.count}>{total} update{total === 1 ? '' : 's'}</p>
          {entries.length ? (
            entries.map((entry) => <WhatsNewCard key={entry.slug} entry={entry} />)
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

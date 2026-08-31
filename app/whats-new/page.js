import WhatsNewHero from '../../components/templates/WhatsNewHero/WhatsNewHero';
import WhatsNewTypeTabs from '../../components/molecules/WhatsNewTypeTabs/WhatsNewTypeTabs';
import WhatsNewListing from '../../components/organisms/WhatsNewListing/WhatsNewListing';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { WN_BANNER, WN_PAGE_SIZE, WHATS_NEW_SOURCE } from '../../data/whatsNew';
import { getWhatsNewList } from '../../utils/whatsNewApi';
import { WN_ENTRIES, WN_MODULE_FILTERS, getWhatsNewYears } from '../../data/whatsNewEntries';

export const metadata = buildMetadata(seoData.whatsNew);

/** WHATS_NEW_SOURCE=static mirrors getWhatsNewList's contract (filter, paginate, return
 * modules/years) but reads WN_ENTRIES instead of the CMS — see data/whatsNew.js. */
function getWhatsNewListStatic({ page, pageSize, module: moduleFilter, type: typeFilter, year: yearFilter }) {
  const filtered = WN_ENTRIES.filter((e) => {
    if (typeFilter && typeFilter !== 'all' && e.typeTag !== typeFilter) return false;
    if (moduleFilter && !e.moduleTags.includes(moduleFilter)) return false;
    if (yearFilter && e.date.slice(0, 4) !== yearFilter) return false;
    return true;
  });
  const start = (page - 1) * pageSize;
  return {
    data: filtered.slice(start, start + pageSize),
    total: filtered.length,
    page,
    pageSize,
    modules: WN_MODULE_FILTERS.map((m) => ({ name: m, slug: m })),
    years: getWhatsNewYears(),
  };
}

export default async function WhatsNewPage({ searchParams }) {
  const params = await searchParams;
  const typeFilter = typeof params.type === 'string' ? params.type : 'all';
  const moduleFilter = typeof params.module === 'string' ? params.module : null;
  const yearFilter = typeof params.year === 'string' ? params.year : null;
  const page = typeof params.page === 'string' ? Math.max(1, parseInt(params.page, 10) || 1) : 1;

  const listing =
    WHATS_NEW_SOURCE === 'static'
      ? getWhatsNewListStatic({ page, pageSize: WN_PAGE_SIZE, module: moduleFilter, type: typeFilter, year: yearFilter })
      : await getWhatsNewList({ page, pageSize: WN_PAGE_SIZE, module: moduleFilter, type: typeFilter, year: yearFilter });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'What’s New', path: '/whats-new' },
        ])}
      />

      <WhatsNewHero banner={WN_BANNER}>
        <WhatsNewTypeTabs active={typeFilter} />
      </WhatsNewHero>
      <WhatsNewListing
        entries={listing.data}
        total={listing.total}
        page={listing.page}
        typeFilter={typeFilter}
        moduleFilter={moduleFilter}
        yearFilter={yearFilter}
        modules={listing.modules}
        years={listing.years}
      />
    </>
  );
}

import WhatsNewHero from '../../components/templates/WhatsNewHero/WhatsNewHero';
import WhatsNewTypeTabs from '../../components/molecules/WhatsNewTypeTabs/WhatsNewTypeTabs';
import WhatsNewListing from '../../components/organisms/WhatsNewListing/WhatsNewListing';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { WN_BANNER, WN_ENTRIES } from '../../data/whatsNew';

export const metadata = buildMetadata(seoData.whatsNew);

export default async function WhatsNewPage({ searchParams }) {
  const params = await searchParams;
  const typeFilter = typeof params.type === 'string' ? params.type : 'all';
  const moduleFilter = typeof params.module === 'string' ? params.module : null;
  const yearFilter = typeof params.year === 'string' ? params.year : null;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'What’s New', path: '/whats-new' },
        ])}
      />

      <WhatsNewHero banner={WN_BANNER}>
        <WhatsNewTypeTabs active={typeFilter} moduleFilter={moduleFilter} yearFilter={yearFilter} />
      </WhatsNewHero>
      <WhatsNewListing entries={WN_ENTRIES} typeFilter={typeFilter} moduleFilter={moduleFilter} yearFilter={yearFilter} />
    </>
  );
}

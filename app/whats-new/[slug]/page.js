import { notFound, redirect } from 'next/navigation';
import WhatsNewHero from '../../../components/templates/WhatsNewHero/WhatsNewHero';
import WhatsNewTypeTabs from '../../../components/molecules/WhatsNewTypeTabs/WhatsNewTypeTabs';
import WhatsNewDetail from '../../../components/organisms/WhatsNewDetail/WhatsNewDetail';
import JsonLd from '../../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../../utils/seo';
import { WN_BANNER, WHATS_NEW_SOURCE } from '../../../data/whatsNew';
import { getWhatsNewPost, getWhatsNewFacets } from '../../../utils/whatsNewApi';
import { WN_MODULE_FILTERS, getWhatsNewEntry, getWhatsNewYears } from '../../../data/whatsNewEntries';

async function loadEntry(slug) {
  if (WHATS_NEW_SOURCE === 'static') {
    const entry = getWhatsNewEntry(slug);
    if (!entry) return { notFound: true, redirectTo: null };
    return { data: entry, modules: WN_MODULE_FILTERS.map((m) => ({ name: m, slug: m })), years: getWhatsNewYears() };
  }

  const result = await getWhatsNewPost(slug);
  if (result.notFound) return result;
  const { modules, years } = await getWhatsNewFacets();
  return { data: result.data, modules, years };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const result = await loadEntry(slug);
  if (result.notFound) return {};

  const entry = result.data;
  return buildMetadata({
    path: `/whats-new/${entry.slug}`,
    title: `${entry.title} | What’s New on AiEngage CRM`,
    description: entry.teaser,
    keywords: [...entry.moduleTags, 'AiEngage CRM update'],
    image: entry.image,
  });
}

export default async function WhatsNewDetailPage({ params }) {
  const { slug } = await params;
  const result = await loadEntry(slug);

  if (result.notFound) {
    if (result.redirectTo) redirect(result.redirectTo);
    notFound();
  }

  const entry = result.data;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'What’s New', path: '/whats-new' },
          { name: entry.title, path: `/whats-new/${entry.slug}` },
        ])}
      />

      <WhatsNewHero banner={WN_BANNER}>
        <WhatsNewTypeTabs active={null} />
      </WhatsNewHero>
      <WhatsNewDetail entry={entry} modules={result.modules} years={result.years} />
    </>
  );
}

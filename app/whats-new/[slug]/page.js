import { notFound } from 'next/navigation';
import WhatsNewHero from '../../../components/templates/WhatsNewHero/WhatsNewHero';
import WhatsNewTypeTabs from '../../../components/molecules/WhatsNewTypeTabs/WhatsNewTypeTabs';
import WhatsNewDetail from '../../../components/organisms/WhatsNewDetail/WhatsNewDetail';
import JsonLd from '../../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../../utils/seo';
import { WN_BANNER, WN_ENTRIES, getWhatsNewEntry } from '../../../data/whatsNew';

export function generateStaticParams() {
  return WN_ENTRIES.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = getWhatsNewEntry(slug);
  if (!entry) return {};

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
  const entry = getWhatsNewEntry(slug);
  if (!entry) notFound();

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
      <WhatsNewDetail entry={entry} />
    </>
  );
}

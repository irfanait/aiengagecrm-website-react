import ComparisonHero from '../../components/organisms/ComparisonHero/ComparisonHero';
import ComparisonProblem from '../../components/organisms/ComparisonProblem/ComparisonProblem';
import ComparisonDifferentiators from '../../components/organisms/ComparisonDifferentiators/ComparisonDifferentiators';
import ComparisonTable from '../../components/organisms/ComparisonTable/ComparisonTable';
import CTASection from '../../components/organisms/CTASection/CTASection';
import {
  ScatteredCollage,
  ContactCardWidget,
  InboxListWidget,
  ChatThreadWidget,
  CampaignChartWidget,
  ChannelChipsContactsWidget,
  OnePlatformGridWidget,
  GrowthTimelineWidget,
} from '../../components/organisms/ComparisonMocks/ComparisonMocks';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { HUB_HERO, HUB_PROBLEM, HUB_DIFFERENTIATORS, HUB_TABLE, CONTACTS_CARD1, PLATFORM_GRID_ITEMS, GROWTH_TIMELINE_ITEMS } from '../../data/comparisons/hubspot';

export const metadata = buildMetadata(seoData.vsHubspot);

export default function VsHubSpotPage() {
  const differentiatorVisuals = [
    <ChannelChipsContactsWidget key="chips" contacts={CONTACTS_CARD1} />,
    <OnePlatformGridWidget key="grid" items={PLATFORM_GRID_ITEMS} />,
    <GrowthTimelineWidget key="timeline" items={GROWTH_TIMELINE_ITEMS} />,
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Why AiEngage', path: '/' },
          { name: 'AiEngage vs HubSpot', path: '/hubspot-alternative' },
        ])}
      />

      <ComparisonHero
        badge={HUB_HERO.badge}
        title={
          <>
            {HUB_HERO.titleLines[0]}
            <br />
            {HUB_HERO.titleLines[1]}
          </>
        }
      />

      <ComparisonProblem
        paragraphs={HUB_PROBLEM.paragraphs}
        leadOut={HUB_PROBLEM.leadOut}
        visual={
          <ScatteredCollage>
            <ContactCardWidget {...HUB_PROBLEM.contactCard} />
            <InboxListWidget {...HUB_PROBLEM.inbox} />
            <ChatThreadWidget {...HUB_PROBLEM.chatThread} />
            <CampaignChartWidget {...HUB_PROBLEM.campaignChart} />
          </ScatteredCollage>
        }
      />

      <ComparisonDifferentiators
        heading={HUB_DIFFERENTIATORS.heading}
        description={HUB_DIFFERENTIATORS.description}
        items={HUB_DIFFERENTIATORS.items.map((it, i) => ({ ...it, visual: differentiatorVisuals[i] }))}
      />

      <ComparisonTable competitor={HUB_TABLE.competitor} rows={HUB_TABLE.rows} />

      <CTASection
        title="Ready To Take Your Business To The Next Level?"
        description="Capture leads, automate follow-ups, boost re-engagement, increase repeat clients, and maximize ROI with our AI-powered CRM."
        titleSize={36}
      />
    </>
  );
}

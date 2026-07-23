import ComparisonHero from '../../components/organisms/ComparisonHero/ComparisonHero';
import ComparisonProblem from '../../components/organisms/ComparisonProblem/ComparisonProblem';
import ComparisonDifferentiators from '../../components/organisms/ComparisonDifferentiators/ComparisonDifferentiators';
import ComparisonTable from '../../components/organisms/ComparisonTable/ComparisonTable';
import CTASection from '../../components/organisms/CTASection/CTASection';
import {
  ScatteredCollage,
  ContactCardWidget,
  CampaignChartWidget,
  TicketWidget,
  WorkflowBuilderWidget,
  ChannelChipsContactsWidget,
  OnePlatformGridWidget,
  GrowthTimelineWidget,
} from '../../components/organisms/ComparisonMocks/ComparisonMocks';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { ZOHO_HERO, ZOHO_PROBLEM, ZOHO_DIFFERENTIATORS, ZOHO_TABLE } from '../../data/comparisons/zoho';
import { CONTACTS_CARD1, PLATFORM_GRID_ITEMS_ZOHO, GROWTH_TIMELINE_ITEMS } from '../../data/comparisons/hubspot';

export const metadata = buildMetadata(seoData.vsZoho);

export default function VsZohoPage() {
  const differentiatorVisuals = [
    <ChannelChipsContactsWidget key="chips" contacts={CONTACTS_CARD1} />,
    <OnePlatformGridWidget key="grid" items={PLATFORM_GRID_ITEMS_ZOHO} />,
    <GrowthTimelineWidget key="timeline" items={GROWTH_TIMELINE_ITEMS} />,
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Why AiEngage', path: '/' },
          { name: 'AiEngage vs Zoho', path: '/zoho-alternative' },
        ])}
      />

      <ComparisonHero
        badge={ZOHO_HERO.badge}
        title={
          <>
            {ZOHO_HERO.titleLead}
            <br />
            {ZOHO_HERO.titleAccentLine.lead}
            <span className="textAccent">{ZOHO_HERO.titleAccentLine.accent}</span>
            {ZOHO_HERO.titleAccentLine.trail}
          </>
        }
      />

      <ComparisonProblem
        paragraphs={ZOHO_PROBLEM.paragraphs}
        leadOut={ZOHO_PROBLEM.leadOut}
        visual={
          <ScatteredCollage>
            <ContactCardWidget {...ZOHO_PROBLEM.contactCard} />
            <CampaignChartWidget {...ZOHO_PROBLEM.campaignChart} />
            <TicketWidget {...ZOHO_PROBLEM.ticket} />
            <WorkflowBuilderWidget {...ZOHO_PROBLEM.workflowBuilder} />
          </ScatteredCollage>
        }
      />

      <ComparisonDifferentiators
        heading={ZOHO_DIFFERENTIATORS.heading}
        description={ZOHO_DIFFERENTIATORS.description}
        items={ZOHO_DIFFERENTIATORS.items.map((it, i) => ({ ...it, visual: differentiatorVisuals[i] }))}
      />

      <ComparisonTable competitor={ZOHO_TABLE.competitor} rows={ZOHO_TABLE.rows} />

      <CTASection
        title="Ready To Take Your Business To The Next Level?"
        description="Capture leads, automate follow-ups, boost re-engagement, increase repeat clients, and maximize ROI with our AI-powered CRM."
        titleSize={36}
      />
    </>
  );
}

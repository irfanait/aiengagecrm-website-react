import ComparisonHero from '../../components/organisms/ComparisonHero/ComparisonHero';
import ComparisonProblem from '../../components/organisms/ComparisonProblem/ComparisonProblem';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import ComparisonTable from '../../components/organisms/ComparisonTable/ComparisonTable';
import CTASection from '../../components/organisms/CTASection/CTASection';
import { PricingTiersWidget, AIAssistantWidget, CommunicationTimelineWidget } from '../../components/organisms/ComparisonMocks/ComparisonMocks';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { KEAP_HERO, KEAP_PROBLEM, KEAP_ZIG1, KEAP_ZIG2, KEAP_TABLE } from '../../data/comparisons/keap';

export const metadata = buildMetadata(seoData.vsKeap);

export default function VsKeapPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Why AiEngage', path: '/' },
          { name: 'AiEngage vs Keap', path: '/keap-alternative' },
        ])}
      />

      <ComparisonHero
        badge={KEAP_HERO.badge}
        title={
          <>
            {KEAP_HERO.titleLead}
            <br />
            {KEAP_HERO.titleAccentLine.lead}
            <span className="textAccent">{KEAP_HERO.titleAccentLine.accent}</span>
            {KEAP_HERO.titleAccentLine.trail}
          </>
        }
      />

      <ComparisonProblem
        paragraphs={KEAP_PROBLEM.paragraphs}
        visual={<PricingTiersWidget {...KEAP_PROBLEM.pricingCard} />}
        belowCard={{ heading: KEAP_PROBLEM.leadOutHeading, body: KEAP_PROBLEM.leadOutBody }}
      />

      <FeatureSection
        id="ai-automation"
        titleAccent={KEAP_ZIG1.titleAccent}
        titleTrail={KEAP_ZIG1.titleTrail}
        paragraphs={KEAP_ZIG1.paragraphs}
        lists={[]}
        mock={<AIAssistantWidget contact={KEAP_ZIG1.contact} actions={KEAP_ZIG1.actions} />}
      />

      <FeatureSection
        id="communication"
        titleAccent={KEAP_ZIG2.titleAccent}
        titleTrail={
          <>
            <br />
            {KEAP_ZIG2.titleTrail}
          </>
        }
        paragraphs={KEAP_ZIG2.paragraphs}
        lists={[]}
        reverse
        mock={<CommunicationTimelineWidget contact={KEAP_ZIG2.contact} events={KEAP_ZIG2.events} />}
      />

      <ComparisonTable competitor={KEAP_TABLE.competitor} rows={KEAP_TABLE.rows} />

      <CTASection
        title="Ready To Take Your Business To The Next Level?"
        description="Capture leads, automate follow-ups, boost re-engagement, increase repeat clients, and maximize ROI with our AI-powered CRM."
        titleSize={36}
      />
    </>
  );
}

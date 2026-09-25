import HeroV3 from '../../../organisms/HeroV3/HeroV3';
import TrustedByV2 from '../../../organisms/TrustedByV2/TrustedByV2';
import TeamOverviewV3 from '../../../organisms/TeamOverviewV3/TeamOverviewV3';
import AIJourneyV3 from '../../../organisms/AIJourneyV3/AIJourneyV3';
import ToolStackV3 from '../../../organisms/ToolStackV3/ToolStackV3';
import AutomationFlowV2 from '../../../organisms/AutomationFlowV2/AutomationFlowV2';
import Stats from '../../../organisms/Stats/Stats';
import IndustriesV2 from '../../../organisms/IndustriesV2/IndustriesV2';
import TestimonialV2 from '../../../organisms/TestimonialV2/TestimonialV2';
import IntegrationsV2 from '../../../organisms/IntegrationsV2/IntegrationsV2';
import OneCrmJourneyV2 from '../../../organisms/OneCrmJourneyV2/OneCrmJourneyV2';
import CTASection from '../../../organisms/CTASection/CTASection';
import JsonLd from '../../../common/JsonLd/JsonLd';
import { webPageSchema } from '../../../../utils/seo';
import { seoData } from '../../../../data/seoData';

/**
 * The new "Home V6" mockup design. Sections up through ToolStackV3 ("From Multiple Tools to One
 * Powerful CRM") are new, homepage-v3-exclusive organisms (components/organisms/*V3) built from
 * that mockup — they do not touch or replace any v1/v2 organism. TrustedByV2 is reused verbatim:
 * the mockup's logo marquee (label text and all 14 logos, in the same order) is byte-identical to
 * v2's, so it wasn't rebuilt. From AutomationFlowV2 ("From Meta Ad to Booked Meeting Without Zero
 * Human Touch") onward, every section is reused verbatim from homepagev2 — confirmed heading-text
 * matches against the mockup — since the new mockup's design for those sections is identical to
 * what's already live in v2. See app/page.js for which homepage template is actually live.
 */
export default function HomepageV3() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: seoData.home.title, description: seoData.home.description, path: '/' })} />
      <HeroV3 />
      <TrustedByV2 />
      <TeamOverviewV3 />
      <AIJourneyV3 />
      <ToolStackV3 />
      <AutomationFlowV2 />
      <Stats showIndex={false} />
      <IndustriesV2 />
      <TestimonialV2 />
      <IntegrationsV2 />
      <OneCrmJourneyV2 />
      <CTASection
        eyebrow="GET STARTED"
        title="Ready to Take Your Business to The Next Level?"
        description="Capture leads, automate follow-ups, boost re-engagement and maximize ROI with AiEngage CRM."
        note="No credit card · 14-day trial"
        centered={false}
        titleSize={46}
      />
    </>
  );
}

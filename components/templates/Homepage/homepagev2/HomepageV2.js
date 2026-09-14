import HeroV2 from '../../../organisms/HeroV2/HeroV2';
import TrustedByV2 from '../../../organisms/TrustedByV2/TrustedByV2';
import DashboardShowcaseV2 from '../../../organisms/DashboardShowcaseV2/DashboardShowcaseV2';
import AIJourneyCarouselV2 from '../../../organisms/AIJourneyCarouselV2/AIJourneyCarouselV2';
import ReplaceStackV2 from '../../../organisms/ReplaceStackV2/ReplaceStackV2';
import AutomationFlowV2 from '../../../organisms/AutomationFlowV2/AutomationFlowV2';
import TestimonialV2 from '../../../organisms/TestimonialV2/TestimonialV2';
import IntegrationsV2 from '../../../organisms/IntegrationsV2/IntegrationsV2';
import OneCrmJourneyV2 from '../../../organisms/OneCrmJourneyV2/OneCrmJourneyV2';
import Stats from '../../../organisms/Stats/Stats';
import Industries from '../../../organisms/Industries/Industries';
import CTASection from '../../../organisms/CTASection/CTASection';
import JsonLd from '../../../common/JsonLd/JsonLd';
import { webPageSchema } from '../../../../utils/seo';
import { seoData } from '../../../../data/seoData';

/**
 * The new "Home V5" mockup design — just the composition; every section is its own organism
 * (components/organisms/*V2), same as homepagev1 composes Hero/Stats/etc. Stats/Industries are
 * the existing v1 organisms reused (with their numbered eyebrow/index hidden via props — the new
 * design doesn't use that convention — see each component's `showIndex`/`showEyebrow` prop).
 * IntegrationsV2 is its own component (different layout/copy from v1's Integrations) but reuses
 * v1's INTEGRATIONS data (data/homeContent.js) for the real brand logos.
 * See app/page.js for which homepage template is actually live.
 */
export default function HomepageV2() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: seoData.home.title, description: seoData.home.description, path: '/' })} />
      <HeroV2 />
      <TrustedByV2 />
      <DashboardShowcaseV2 />
      <AIJourneyCarouselV2 />
      <ReplaceStackV2 />
      <AutomationFlowV2 />
      <Stats showIndex={false} />
      <Industries title="Trusted Across the Industries" showEyebrow={false} white />
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

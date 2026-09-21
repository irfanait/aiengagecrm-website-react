import Hero from '../../../organisms/Hero/Hero';
import PlatformExplorer from '../../../organisms/PlatformExplorer/PlatformExplorer';
import AIAutopilot from '../../../organisms/AIAutopilot/AIAutopilot';
import AIStageSlider from '../../../organisms/AIStageSlider/AIStageSlider';
import PipelineJourney from '../../../organisms/PipelineJourney/PipelineJourney';
import Stats from '../../../organisms/Stats/Stats';
import Industries from '../../../organisms/Industries/Industries';
import Testimonial from '../../../organisms/Testimonial/Testimonial';
import Integrations from '../../../organisms/Integrations/Integrations';
import CTASection from '../../../organisms/CTASection/CTASection';
import JsonLd from '../../../common/JsonLd/JsonLd';
import { buildMetadata, webPageSchema } from '../../../../utils/seo';
import { seoData } from '../../../../data/seoData';

export const metadata = buildMetadata(seoData.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: seoData.home.title, description: seoData.home.description, path: '/' })} />
      <Hero />
      <PlatformExplorer />
      <AIStageSlider />
      <AIAutopilot />
      <PipelineJourney />
      <Stats />
      <Industries />
      <Testimonial />
      <Integrations />
      <CTASection
        eyebrow="GET STARTED"
        title="Ready to take your business to the next level?"
        description="Capture leads, automate follow-ups, boost re-engagement and maximize ROI with AiEngage CRM."
        note="No credit card · 14-day trial"
        centered={false}
        titleSize={46}
      />
    </>
  );
}

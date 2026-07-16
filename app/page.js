import Hero from '../components/organisms/Hero/Hero';
import PlatformExplorer from '../components/organisms/PlatformExplorer/PlatformExplorer';
import AIAutopilot from '../components/organisms/AIAutopilot/AIAutopilot';
import PipelineJourney from '../components/organisms/PipelineJourney/PipelineJourney';
import Stats from '../components/organisms/Stats/Stats';
import Industries from '../components/organisms/Industries/Industries';
import Testimonial from '../components/organisms/Testimonial/Testimonial';
import Integrations from '../components/organisms/Integrations/Integrations';
import CTASection from '../components/organisms/CTASection/CTASection';
import JsonLd from '../components/common/JsonLd/JsonLd';
import { buildMetadata, webPageSchema } from '../utils/seo';
import { seoData } from '../data/seoData';

export const metadata = buildMetadata(seoData.home);

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: seoData.home.title, description: seoData.home.description, path: '/' })} />
      <Hero />
      <PlatformExplorer />
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

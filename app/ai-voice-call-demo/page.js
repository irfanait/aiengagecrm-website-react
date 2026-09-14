import AIVoiceCallDemo from '../../components/templates/AIVoiceCallDemo/AIVoiceCallDemo';
import { buildMetadata } from '../../utils/seo';
import { seoData } from '../../data/seoData';

export const metadata = buildMetadata(seoData.aiVoiceCallDemo);

export default function AIVoiceCallDemoPage() {
  return <AIVoiceCallDemo />;
}

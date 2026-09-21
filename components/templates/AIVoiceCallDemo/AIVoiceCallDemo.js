import VoiceCallDemoHero from '../../organisms/VoiceCallDemoHero/VoiceCallDemoHero';
import JsonLd from '../../common/JsonLd/JsonLd';
import { breadcrumbSchema } from '../../../utils/seo';

export default function AIVoiceCallDemo() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'AI Voice Call Demo', path: '/ai-voice-call-demo' },
        ])}
      />
      <VoiceCallDemoHero />
    </>
  );
}

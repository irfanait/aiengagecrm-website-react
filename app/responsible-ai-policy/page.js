import LegalPage from '../../components/templates/LegalPage/LegalPage';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { AI_RESPONSIBLE_AUTOMATION_POLICY, LEGAL_META } from '../../data/legal';

export const metadata = buildMetadata(seoData.responsibleAiPolicy);

export default function ResponsibleAiPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'AI & Responsible Automation Policy', path: '/responsible-ai-policy' },
        ])}
      />

      <LegalPage
        title={AI_RESPONSIBLE_AUTOMATION_POLICY.title}
        intro={AI_RESPONSIBLE_AUTOMATION_POLICY.intro}
        sections={AI_RESPONSIBLE_AUTOMATION_POLICY.sections}
        meta={LEGAL_META}
      />
    </>
  );
}

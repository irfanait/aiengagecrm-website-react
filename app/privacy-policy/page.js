import LegalPage from '../../components/templates/LegalPage/LegalPage';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { PRIVACY_POLICY, LEGAL_META } from '../../data/legal';

export const metadata = buildMetadata(seoData.privacyPolicy);

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ])}
      />

      <LegalPage title={PRIVACY_POLICY.title} sections={PRIVACY_POLICY.sections} meta={LEGAL_META} />
    </>
  );
}

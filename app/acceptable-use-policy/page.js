import LegalPage from '../../components/templates/LegalPage/LegalPage';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { ACCEPTABLE_USE_POLICY, LEGAL_META } from '../../data/legal';

export const metadata = buildMetadata(seoData.acceptableUsePolicy);

export default function AcceptableUsePolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Acceptable Use & Anti-Spam Policy', path: '/acceptable-use-policy' },
        ])}
      />

      <LegalPage title={ACCEPTABLE_USE_POLICY.title} sections={ACCEPTABLE_USE_POLICY.sections} meta={LEGAL_META} />
    </>
  );
}

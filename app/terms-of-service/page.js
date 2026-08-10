import LegalPage from '../../components/templates/LegalPage/LegalPage';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { TERMS_OF_SERVICE, LEGAL_META } from '../../data/legal';

export const metadata = buildMetadata(seoData.termsOfService);

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Terms of Service', path: '/terms-of-service' },
        ])}
      />

      <LegalPage title={TERMS_OF_SERVICE.title} sections={TERMS_OF_SERVICE.sections} meta={LEGAL_META} />
    </>
  );
}

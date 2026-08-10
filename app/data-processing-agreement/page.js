import LegalPage from '../../components/templates/LegalPage/LegalPage';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { DATA_PROCESSING_AGREEMENT, LEGAL_META } from '../../data/legal';

export const metadata = buildMetadata(seoData.dataProcessingAgreement);

export default function DataProcessingAgreementPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Data Processing Agreement', path: '/data-processing-agreement' },
        ])}
      />

      <LegalPage
        title={DATA_PROCESSING_AGREEMENT.title}
        intro={DATA_PROCESSING_AGREEMENT.intro}
        sections={DATA_PROCESSING_AGREEMENT.sections}
        meta={LEGAL_META}
      />
    </>
  );
}

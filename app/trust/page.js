import TrustCenter from '../../components/organisms/TrustCenter/TrustCenter';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { TRUST_HERO, TRUST_CARDS } from '../../data/trust';

export const metadata = buildMetadata(seoData.trust);

export default function TrustPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Trust Center', path: '/trust' },
        ])}
      />

      <TrustCenter hero={TRUST_HERO} cards={TRUST_CARDS} />
    </>
  );
}

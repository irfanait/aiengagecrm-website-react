import ProductHero from '../../components/templates/ProductHero/ProductHero';
import { IntegrationsHubMock, DataSyncMock } from '../../components/organisms/IntegrationsPageMocks/IntegrationsPageMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import IntegrationCatalog from '../../components/organisms/IntegrationCatalog/IntegrationCatalog';
import DataSyncBand from '../../components/organisms/DataSyncBand/DataSyncBand';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  IN_HERO,
  IN_TRUST_ITEMS,
  IN_CATALOG_EYEBROW,
  IN_CATALOG_HEADING,
  IN_FILTERS,
  IN_CARDS,
  IN_SYNC_EYEBROW,
  IN_SYNC_HEADING,
  IN_BENEFITS_HEADING,
  IN_BENEFITS,
  IN_INDUSTRIES,
  IN_FINAL_CTA,
} from '../../data/integrationsPage';

export const metadata = buildMetadata(seoData.integrations);

export default function IntegrationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Integrations', path: '/integrations' },
        ])}
      />

      <ProductHero
        badge={IN_HERO.badge}
        title={
          <>
            {IN_HERO.titleLead}
            <span className="textAccent">{IN_HERO.titleAccent}</span>
          </>
        }
        description={IN_HERO.description}
      >
        <IntegrationsHubMock />
      </ProductHero>

      <TrustStrip items={IN_TRUST_ITEMS} />

      <IntegrationCatalog eyebrow={IN_CATALOG_EYEBROW} heading={IN_CATALOG_HEADING} filters={IN_FILTERS} items={IN_CARDS} />

      <DataSyncBand eyebrow={IN_SYNC_EYEBROW} heading={IN_SYNC_HEADING}>
        <DataSyncMock />
      </DataSyncBand>

      <BenefitBand heading={IN_BENEFITS_HEADING} items={IN_BENEFITS} columns={4} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Trusted Across Industries" items={IN_INDUSTRIES} columns={3} showMoreCard={false} />

      <CTASection
        title={
          <>
            {IN_FINAL_CTA.titleLead}
            <span className="textAccentDark">{IN_FINAL_CTA.titleAccent}</span>
            {IN_FINAL_CTA.titleTrail}
          </>
        }
        description={IN_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}

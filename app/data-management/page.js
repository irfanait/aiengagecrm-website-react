import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  DataWorkspaceMock,
  ImportExportMock,
  ProductCatalogMock,
  FormBuilderMock,
  AuditLogMock,
  SheetViewMock,
  DataMappingMock,
  AIDataCleanupMock,
} from '../../components/organisms/DataManagementMocks/DataManagementMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  DM_HERO,
  DM_TRUST_ITEMS,
  DM_SECTIONS,
  DM_BENEFITS_HEADING,
  DM_BENEFITS,
  DM_INDUSTRIES,
  DM_FINAL_CTA,
} from '../../data/dataManagement';

export const metadata = buildMetadata(seoData.dataManagement);

const MOCKS = {
  ImportExportMock,
  ProductCatalogMock,
  FormBuilderMock,
  AuditLogMock,
  SheetViewMock,
  DataMappingMock,
  AIDataCleanupMock,
};

export default function DataManagementPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Data Management', path: '/data-management' },
        ])}
      />

      <ProductHero
        badge={DM_HERO.badge}
        title={
          <>
            {DM_HERO.titleLead}
            <span className="textAccent">{DM_HERO.titleAccent}</span>
          </>
        }
        description={DM_HERO.description}
      >
        <DataWorkspaceMock />
      </ProductHero>

      <TrustStrip items={DM_TRUST_ITEMS} />

      {DM_SECTIONS.map((section) => {
        const Mock = MOCKS[section.mockKey];
        return (
          <FeatureSection
            key={section.id}
            id={section.id}
            index={section.index}
            eyebrow={section.eyebrow}
            titleLead={section.titleLead}
            titleAccent={section.titleAccent}
            titleTrail={section.titleTrail}
            leadParagraph={section.leadParagraph}
            paragraphs={section.paragraphs}
            lists={section.lists}
            reverse={section.reverse}
            mock={<Mock />}
          />
        );
      })}

      <BenefitBand heading={DM_BENEFITS_HEADING} items={DM_BENEFITS} columns={3} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Trusted Across Industries" items={DM_INDUSTRIES} columns={3} showMoreCard={false} />

      <CTASection
        title={
          <>
            {DM_FINAL_CTA.titleLead}
            <span className="textAccentDark">{DM_FINAL_CTA.titleAccent}</span>
            {DM_FINAL_CTA.titleTrail}
          </>
        }
        description={DM_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}

import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  SettingsOverviewMock,
  FieldBuilderMock,
  CustomModulesMock,
  CustomPipelinesMock,
  RolesPermissionsMock,
  BrandingMock,
  CustomTagsMock,
  CustomViewsMock,
} from '../../components/organisms/CustomizationMocks/CustomizationMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  CU_HERO,
  CU_TRUST_ITEMS,
  CU_SECTIONS,
  CU_BENEFITS_HEADING,
  CU_BENEFITS,
  CU_INDUSTRIES,
  CU_FINAL_CTA,
} from '../../data/customization';

export const metadata = buildMetadata(seoData.customization);

const MOCKS = {
  FieldBuilderMock,
  CustomModulesMock,
  CustomPipelinesMock,
  RolesPermissionsMock,
  BrandingMock,
  CustomTagsMock,
  CustomViewsMock,
};

export default function CustomizationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Customization', path: '/customization' },
        ])}
      />

      <ProductHero
        badge={CU_HERO.badge}
        title={
          <>
            {CU_HERO.titleLead}
            <span className="textAccent">{CU_HERO.titleAccent}</span>
          </>
        }
        description={CU_HERO.description}
      >
        <SettingsOverviewMock />
      </ProductHero>

      <TrustStrip items={CU_TRUST_ITEMS} />

      {CU_SECTIONS.map((section) => {
        const Mock = MOCKS[section.mockKey];
        return (
          <FeatureSection
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            titleLead={section.titleLead}
            titleAccent={section.titleAccent}
            titleTrail={section.titleTrail}
            leadParagraph={section.leadParagraph}
            paragraphs={section.paragraphs}
            lists={section.lists}
            reverse={section.reverse}
            dark={section.dark}
            mock={<Mock />}
          />
        );
      })}

      <BenefitBand heading={CU_BENEFITS_HEADING} items={CU_BENEFITS} columns={4} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Trusted Across Industries" items={CU_INDUSTRIES} columns={3} showMoreCard={false} />

      <CTASection
        title={
          <>
            {CU_FINAL_CTA.titleLead}
            <span className="textAccentDark">{CU_FINAL_CTA.titleAccent}</span>
            {CU_FINAL_CTA.titleTrail}
          </>
        }
        description={CU_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}

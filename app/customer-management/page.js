import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  ProfileCardMock,
  ContactRecordMock,
  SegmentBuilderMock,
  ProfileTabsMock,
  ActivityTimelineMock,
} from '../../components/organisms/CustomerManagementMocks/CustomerManagementMocks';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  CM_HERO,
  CM_SECTIONS,
  CM_BENEFITS_EYEBROW,
  CM_BENEFITS_HEADING,
  CM_BENEFITS,
  CM_INDUSTRIES_HEADING,
  CM_INDUSTRIES,
  CM_FINAL_CTA,
} from '../../data/customerManagement';

export const metadata = buildMetadata(seoData.customerManagement);

const MOCKS = {
  ContactRecordMock,
  SegmentBuilderMock,
  ProfileTabsMock,
  ActivityTimelineMock,
};

export default function CustomerManagementPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Customer Management', path: '/customer-management' },
        ])}
      />

      <ProductHero
        badge={CM_HERO.badge}
        title={
          <>
            {CM_HERO.titleLead}
            <span className="highlight">{CM_HERO.titleHighlight}</span>
            {CM_HERO.titleTrail}
          </>
        }
        description={CM_HERO.description}
      >
        <ProfileCardMock />
      </ProductHero>

      {CM_SECTIONS.map((section) => {
        const Mock = MOCKS[section.mockKey];
        return (
          <FeatureSection
            key={section.id}
            id={section.id}
            titleLead={section.titleLead}
            titleAccent={section.titleAccent}
            titleTrail={section.titleTrail}
            leadParagraph={section.leadParagraph}
            paragraphs={section.paragraphs}
            lists={section.lists}
            reverse={section.reverse}
            checkIcon="check"
            mutedListHeading
            mock={<Mock />}
          />
        );
      })}

      <BenefitBand eyebrow={CM_BENEFITS_EYEBROW} heading={CM_BENEFITS_HEADING} items={CM_BENEFITS} columns={3} />

      <IndustriesGrid eyebrow="BUILT FOR" heading={CM_INDUSTRIES_HEADING} items={CM_INDUSTRIES} columns={3} showMoreCard={false} />

      <CTASection title={CM_FINAL_CTA.title} description={CM_FINAL_CTA.description} titleSize={42} />
    </>
  );
}

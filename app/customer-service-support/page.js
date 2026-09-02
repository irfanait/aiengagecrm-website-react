import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  SharedInboxMock,
  AISupportAgentMock,
  TicketManagementMock,
  OmnichannelSupportMock,
} from '../../components/organisms/CustomerServiceSupportMocks/CustomerServiceSupportMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  CS_HERO,
  CS_TRUST_ITEMS,
  CS_SECTIONS,
  CS_BENEFITS_HEADING,
  CS_BENEFITS,
  CS_INDUSTRIES,
  CS_FINAL_CTA,
} from '../../data/customerServiceSupport';

export const metadata = buildMetadata(seoData.customerServiceSupport);

const MOCKS = {
  SharedInboxMock,
  AISupportAgentMock,
  TicketManagementMock,
  OmnichannelSupportMock,
};

export default function CustomerServiceSupportPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Customer Service & Support', path: '/customer-service-support' },
        ])}
      />

      <ProductHero
        badge={CS_HERO.badge}
        title={
          <>
            {CS_HERO.titleLead}
            <span className="textAccent">{CS_HERO.titleAccent}</span>
          </>
        }
        description={CS_HERO.description}
      >
        <SharedInboxMock />
      </ProductHero>

      <TrustStrip items={CS_TRUST_ITEMS} />

      {CS_SECTIONS.map((section) => {
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
            dark={section.dark}
            keyBenefits={section.keyBenefits}
            trailingParagraph={section.trailingParagraph}
            mock={<Mock />}
          />
        );
      })}

      <BenefitBand heading={CS_BENEFITS_HEADING} items={CS_BENEFITS} columns={4} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Trusted Across Industries" items={CS_INDUSTRIES} columns={4} showMoreCard />

      <CTASection
        title={
          <>
            {CS_FINAL_CTA.titleLead}
            <span className="textAccentDark">{CS_FINAL_CTA.titleAccent}</span>
            {CS_FINAL_CTA.titleTrail}
          </>
        }
        description={CS_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}

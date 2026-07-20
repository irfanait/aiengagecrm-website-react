import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  CampaignsDashboardMock,
  EmailBuilderMock,
  WhatsAppCampaignBuilderMock,
  AICampaignBuilderMock,
  CampaignInsightsMock,
} from '../../components/organisms/MarketingCampaignsMocks/MarketingCampaignsMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  MKT_HERO,
  MKT_TRUST_ITEMS,
  MKT_SECTIONS,
  MKT_BENEFITS_HEADING,
  MKT_BENEFITS,
  MKT_INDUSTRIES,
  MKT_FINAL_CTA,
} from '../../data/marketingCampaigns';

export const metadata = buildMetadata(seoData.marketingCampaigns);

const MOCKS = {
  EmailBuilderMock,
  WhatsAppCampaignBuilderMock,
  AICampaignBuilderMock,
  CampaignInsightsMock,
};

export default function MarketingCampaignsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Marketing Campaigns', path: '/marketing-campaigns' },
        ])}
      />

      <ProductHero
        badge={MKT_HERO.badge}
        title={
          <>
            {MKT_HERO.titleLead}
            <span className="textAccent">{MKT_HERO.titleAccent}</span>
          </>
        }
        description={MKT_HERO.description}
      >
        <CampaignsDashboardMock />
      </ProductHero>

      <TrustStrip items={MKT_TRUST_ITEMS} />

      {MKT_SECTIONS.map((section) => {
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
            keyBenefits={section.keyBenefits}
            mock={<Mock />}
          />
        );
      })}

      <BenefitBand heading={MKT_BENEFITS_HEADING} items={MKT_BENEFITS} columns={4} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Built For" items={MKT_INDUSTRIES} columns={4} showMoreCard={false} />

      <CTASection
        title={
          <>
            {MKT_FINAL_CTA.titleLead}
            <span className="textAccentDark">{MKT_FINAL_CTA.titleAccent}</span>
          </>
        }
        titleSize={42}
      />
    </>
  );
}

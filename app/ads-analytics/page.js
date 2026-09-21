import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  AdsOverviewMock,
  MetaLeadAdsMock,
  GoogleLeadAdsMock,
  OfflineCampaignsMock,
  AdIntegrationsMock,
  OfflineReportingMock,
  CostPerLeadMock,
  RevenueRoasMock,
  PlatformComparisonMock,
  ReportingSourcesMock,
  CampaignReportsMock,
} from '../../components/organisms/AdsAnalyticsMocks/AdsAnalyticsMocks';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  AA_HERO,
  AA_SECTIONS,
  AA_BENEFITS_HEADING,
  AA_BENEFITS,
  AA_INDUSTRIES,
  AA_FINAL_CTA,
} from '../../data/adsAnalytics';

export const metadata = buildMetadata(seoData.adsAnalytics);

const MOCKS = {
  MetaLeadAdsMock,
  GoogleLeadAdsMock,
  OfflineCampaignsMock,
  AdIntegrationsMock,
  OfflineReportingMock,
  CostPerLeadMock,
  RevenueRoasMock,
  PlatformComparisonMock,
  ReportingSourcesMock,
  CampaignReportsMock,
};

export default function AdsAnalyticsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Ads & Analytics', path: '/ads-analytics' },
        ])}
      />

      <ProductHero
        title={
          <>
            {AA_HERO.titleLead}
            <span className="textAccent">{AA_HERO.titleAccent}</span>
          </>
        }
        description={AA_HERO.description}
        primaryCtaFirst
        mockAlign="start"
        mockWidth="560px"
      >
        <AdsOverviewMock />
      </ProductHero>

      {AA_SECTIONS.map((section) => {
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
            trailingParagraph={section.trailingParagraph}
            mock={<Mock />}
          />
        );
      })}

      <BenefitBand heading={AA_BENEFITS_HEADING} items={AA_BENEFITS} columns={4} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Built For" items={AA_INDUSTRIES} columns={3} showMoreCard={false} />

      <CTASection
        title={
          <>
            {AA_FINAL_CTA.titleLead}
            <span className="textAccentDark">{AA_FINAL_CTA.titleAccent}</span>
            {AA_FINAL_CTA.titleTrail}
          </>
        }
        description={AA_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}

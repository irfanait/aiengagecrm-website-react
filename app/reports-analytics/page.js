import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  AnalyticsWorkspaceMock,
  DashboardMock,
  SalesReportsMock,
  CampaignReportsMock,
  FunnelReportsMock,
  TeamPerformanceMock,
  KPITrackingMock,
  TargetMetersMock,
  ChartsLibraryMock,
} from '../../components/organisms/ReportsAnalyticsMocks/ReportsAnalyticsMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  RA_HERO,
  RA_TRUST_ITEMS,
  RA_SECTIONS,
  RA_BENEFITS_HEADING,
  RA_BENEFITS,
  RA_INDUSTRIES,
  RA_FINAL_CTA,
} from '../../data/reportsAnalytics';

export const metadata = buildMetadata(seoData.reportsAnalytics);

const MOCKS = {
  DashboardMock,
  SalesReportsMock,
  CampaignReportsMock,
  FunnelReportsMock,
  TeamPerformanceMock,
  KPITrackingMock,
  TargetMetersMock,
  ChartsLibraryMock,
};

export default function ReportsAnalyticsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Reports & Analytics', path: '/reports-analytics' },
        ])}
      />

      <ProductHero
        badge={RA_HERO.badge}
        title={
          <>
            {RA_HERO.titleLead}
            <span className="textAccent">{RA_HERO.titleAccent}</span>
          </>
        }
        description={RA_HERO.description}
      >
        <AnalyticsWorkspaceMock />
      </ProductHero>

      <TrustStrip items={RA_TRUST_ITEMS} />

      {RA_SECTIONS.map((section) => {
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

      <BenefitBand heading={RA_BENEFITS_HEADING} items={RA_BENEFITS} columns={4} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Trusted Across Industries" items={RA_INDUSTRIES} columns={3} showMoreCard={false} />

      <CTASection
        title={
          <>
            {RA_FINAL_CTA.titleLead}
            <span className="textAccentDark">{RA_FINAL_CTA.titleAccent}</span>
            {RA_FINAL_CTA.titleTrail}
          </>
        }
        description={RA_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}

import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  KanbanHeroMock,
  PipelineBoardMock,
  DealDetailMock,
  TaskListMock,
  FollowUpScheduleMock,
  ConnectedDealMock,
  TeamPipelineSwitchMock,
  PaymentTrackerMock,
  ShareRecordMock,
  ProductCatalogMock,
  StageRulesMock,
  ForecastMock,
} from '../../components/organisms/SalesPipelineMocks/SalesPipelineMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  SP_HERO,
  SP_TRUST_ITEMS,
  SP_SECTIONS,
  SP_BENEFITS_HEADING,
  SP_BENEFITS,
  SP_INDUSTRIES,
  SP_FINAL_CTA,
} from '../../data/salesPipeline';

export const metadata = buildMetadata(seoData.salesPipeline);

const MOCKS = {
  PipelineBoardMock,
  DealDetailMock,
  TaskListMock,
  FollowUpScheduleMock,
  ConnectedDealMock,
  TeamPipelineSwitchMock,
  PaymentTrackerMock,
  ShareRecordMock,
  ProductCatalogMock,
  StageRulesMock,
  ForecastMock,
};

export default function SalesPipelinePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Sales Pipeline', path: '/sales-pipeline' },
        ])}
      />

      <ProductHero
        badge={SP_HERO.badge}
        title={
          <>
            {SP_HERO.titleLead}
            <span className="textAccent">{SP_HERO.titleAccent}</span>
          </>
        }
        description={SP_HERO.description}
      >
        <KanbanHeroMock />
      </ProductHero>

      <TrustStrip items={SP_TRUST_ITEMS} />

      {SP_SECTIONS.map((section) => {
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

      <BenefitBand heading={SP_BENEFITS_HEADING} items={SP_BENEFITS} columns={4} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Built For" items={SP_INDUSTRIES} columns={3} showMoreCard={false} />

      <CTASection
        title={
          <>
            {SP_FINAL_CTA.titleLead}
            <span className="textAccentDark">{SP_FINAL_CTA.titleAccent}</span>
          </>
        }
        titleSize={42}
      />
    </>
  );
}

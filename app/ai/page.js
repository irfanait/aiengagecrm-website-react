import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  AIWorkspaceMock,
  SmartSummariesMock,
  AIChatbotMock,
  AILeadQualificationMock,
  AIInsightsMock,
  MobileAIMock,
  AIEmailAssistantMock,
  AICallTranscriptionMock,
  AISalesInsightsMock,
  AIForecastingMock,
} from '../../components/organisms/AIMocks/AIMocks';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  AI_HERO,
  AI_SECTIONS,
  AI_BENEFITS_HEADING,
  AI_BENEFITS,
  AI_INDUSTRIES,
  AI_FINAL_CTA,
} from '../../data/ai';

export const metadata = buildMetadata(seoData.ai);

const MOCKS = {
  SmartSummariesMock,
  AIChatbotMock,
  AILeadQualificationMock,
  AIInsightsMock,
  MobileAIMock,
  AIEmailAssistantMock,
  AICallTranscriptionMock,
  AISalesInsightsMock,
  AIForecastingMock,
};

export default function AIPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'AI', path: '/ai' },
        ])}
      />

      <ProductHero
        badge={AI_HERO.badge}
        title={
          <>
            {AI_HERO.titleLead}
            <span className="textAccent">{AI_HERO.titleAccent}</span>
          </>
        }
        description={AI_HERO.description}
      >
        <AIWorkspaceMock />
      </ProductHero>

      {AI_SECTIONS.map((section) => {
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
            mock={<Mock />}
          />
        );
      })}

      <BenefitBand heading={AI_BENEFITS_HEADING} items={AI_BENEFITS} columns={4} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Trusted Across Industries" items={AI_INDUSTRIES} columns={3} showMoreCard={false} />

      <CTASection
        title={
          <>
            {AI_FINAL_CTA.titleLead}
            <span className="textAccentDark">{AI_FINAL_CTA.titleAccent}</span>
            {AI_FINAL_CTA.titleTrail}
          </>
        }
        description={AI_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}

import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  WorkflowHeroMock,
  WorkflowBuilderMock,
  EmailAutomationMock,
  WhatsAppAutomationMock,
  AppointmentReminderMock,
  LeadNurturingMock,
  CustomerOnboardingMock,
  DealStageMock,
  AIAutomationMock,
} from '../../components/organisms/AutomationMocks/AutomationMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  AU_HERO,
  AU_TRUST_ITEMS,
  AU_SECTIONS,
  AU_BENEFITS_HEADING,
  AU_BENEFITS,
  AU_INDUSTRIES,
  AU_FINAL_CTA,
} from '../../data/automation';

export const metadata = buildMetadata(seoData.automation);

const MOCKS = {
  WorkflowBuilderMock,
  EmailAutomationMock,
  WhatsAppAutomationMock,
  AppointmentReminderMock,
  LeadNurturingMock,
  CustomerOnboardingMock,
  DealStageMock,
  AIAutomationMock,
};

export default function AutomationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Automation', path: '/automation' },
        ])}
      />

      <ProductHero
        badge={AU_HERO.badge}
        title={
          <>
            {AU_HERO.titleLead}
            <span className="textAccent">{AU_HERO.titleAccent}</span>
          </>
        }
        description={AU_HERO.description}
      >
        <WorkflowHeroMock />
      </ProductHero>

      <TrustStrip items={AU_TRUST_ITEMS} />

      {AU_SECTIONS.map((section) => {
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

      <BenefitBand heading={AU_BENEFITS_HEADING} items={AU_BENEFITS} columns={4} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Built For" items={AU_INDUSTRIES} columns={3} showMoreCard={false} />

      <CTASection
        title={
          <>
            {AU_FINAL_CTA.titleLead}
            <span className="textAccentDark">{AU_FINAL_CTA.titleAccent}</span>
            {AU_FINAL_CTA.titleTrail}
          </>
        }
        description={AU_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}

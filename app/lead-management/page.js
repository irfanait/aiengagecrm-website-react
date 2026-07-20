import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  NewLeadMock,
  CaptureFormMock,
  AssignmentRuleMock,
  LeadScoringMock,
  LeadSyncMock,
  LeadSourcesMock,
  ImportLeadsMock,
  RoundRobinMock,
  LeadQualificationMock,
} from '../../components/organisms/LeadManagementMocks/LeadManagementMocks';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  LM_HERO,
  LM_SECTIONS,
  LM_BENEFITS_EYEBROW,
  LM_BENEFITS_HEADING,
  LM_BENEFITS,
  LM_INDUSTRIES_HEADING,
  LM_INDUSTRIES,
  LM_FINAL_CTA,
} from '../../data/leadManagement';

export const metadata = buildMetadata(seoData.leadManagement);

const MOCKS = {
  CaptureFormMock,
  AssignmentRuleMock,
  LeadScoringMock,
  LeadSyncMock,
  LeadSourcesMock,
  ImportLeadsMock,
  RoundRobinMock,
  LeadQualificationMock,
};

export default function LeadManagementPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Lead Management', path: '/lead-management' },
        ])}
      />

      <ProductHero
        badge={LM_HERO.badge}
        title={
          <>
            {LM_HERO.titleLead}
            <span className="highlight">{LM_HERO.titleHighlight}</span>
            {LM_HERO.titleTrail}
          </>
        }
        description={LM_HERO.description}
      >
        <NewLeadMock />
      </ProductHero>

      {LM_SECTIONS.map((section) => {
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

      <BenefitBand eyebrow={LM_BENEFITS_EYEBROW} heading={LM_BENEFITS_HEADING} items={LM_BENEFITS} columns={3} />

      <IndustriesGrid eyebrow="BUILT FOR" heading={LM_INDUSTRIES_HEADING} items={LM_INDUSTRIES} columns={3} showMoreCard={false} />

      <CTASection title={LM_FINAL_CTA.title} description={LM_FINAL_CTA.description} titleSize={42} />
    </>
  );
}

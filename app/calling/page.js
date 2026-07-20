import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  CallHeroMock,
  ConnectedNumbersMock,
  AssignNumbersMock,
  CallTimelineMock,
  CallRoutingMock,
  OneClickCallingMock,
  CallMonitoringMock,
  CallAnalyticsMock,
  CallingCrmMock,
} from '../../components/organisms/CallingMocks/CallingMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  CL_HERO,
  CL_TRUST_ITEMS,
  CL_SECTIONS,
  CL_BENEFITS_HEADING,
  CL_BENEFITS,
  CL_INDUSTRIES,
  CL_FINAL_CTA,
} from '../../data/calling';

export const metadata = buildMetadata(seoData.calling);

const MOCKS = {
  ConnectedNumbersMock,
  AssignNumbersMock,
  CallTimelineMock,
  CallRoutingMock,
  OneClickCallingMock,
  CallMonitoringMock,
  CallAnalyticsMock,
  CallingCrmMock,
};

export default function CallingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Calling', path: '/calling' },
        ])}
      />

      <ProductHero
        badge={CL_HERO.badge}
        title={
          <>
            {CL_HERO.titleLead}
            <span className="textAccent">{CL_HERO.titleAccent}</span>
          </>
        }
        description={CL_HERO.description}
      >
        <CallHeroMock />
      </ProductHero>

      <TrustStrip items={CL_TRUST_ITEMS} />

      {CL_SECTIONS.map((section) => {
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
            trailingParagraph={section.trailingParagraph}
            mock={<Mock />}
          />
        );
      })}

      <BenefitBand heading={CL_BENEFITS_HEADING} items={CL_BENEFITS} columns={4} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Trusted Across Industries" items={CL_INDUSTRIES} columns={4} showMoreCard />

      <CTASection
        title={
          <>
            {CL_FINAL_CTA.titleLead}
            <span className="textAccentDark">{CL_FINAL_CTA.titleAccent}</span>
            {CL_FINAL_CTA.titleTrail}
          </>
        }
        description={CL_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}

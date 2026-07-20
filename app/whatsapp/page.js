import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  ChatMock,
  TeamInboxMock,
  NumbersMock,
  AIAgentChatMock,
  ChatManagementMock,
  BroadcastMock,
  OneToOneMock,
  AutomationMock,
  FlowsFormsMock,
  SegmentationMock,
  CrmIntegrationMock,
  AnalyticsMock,
} from '../../components/organisms/WhatsAppMocks/WhatsAppMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  WHATSAPP_HERO,
  WHATSAPP_TRUST_ITEMS,
  WHATSAPP_SECTIONS,
  WHATSAPP_BENEFITS_HEADING,
  WHATSAPP_BENEFITS,
  WHATSAPP_INDUSTRIES,
  WHATSAPP_FINAL_CTA,
} from '../../data/whatsappPages';

export const metadata = buildMetadata(seoData.whatsappHub);

const MOCKS = {
  TeamInboxMock,
  NumbersMock,
  AIAgentChatMock,
  ChatManagementMock,
  BroadcastMock,
  OneToOneMock,
  AutomationMock,
  FlowsFormsMock,
  SegmentationMock,
  CrmIntegrationMock,
  AnalyticsMock,
};

export default function WhatsAppBusinessPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'WhatsApp Business', path: '/whatsapp' }])} />

      <ProductHero
        badge={WHATSAPP_HERO.badge}
        title={
          <>
            {WHATSAPP_HERO.titleLead}
            <span className="textAccent">{WHATSAPP_HERO.titleAccent}</span>
            {WHATSAPP_HERO.titleTrail}
          </>
        }
        description={WHATSAPP_HERO.description}
        checklist={WHATSAPP_HERO.checklist}
      >
        <ChatMock />
      </ProductHero>

      <TrustStrip items={WHATSAPP_TRUST_ITEMS} />

      {WHATSAPP_SECTIONS.map((section) => {
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
            paragraphs={section.paragraphs}
            lists={section.lists}
            reverse={section.reverse}
            mock={<Mock />}
          />
        );
      })}

      <BenefitBand heading={WHATSAPP_BENEFITS_HEADING} items={WHATSAPP_BENEFITS} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Trusted Across Industries" items={WHATSAPP_INDUSTRIES} />

      <CTASection
        title={
          <>
            {WHATSAPP_FINAL_CTA.titleLead}
            <span className="textAccentDark">{WHATSAPP_FINAL_CTA.titleAccent}</span>
            {WHATSAPP_FINAL_CTA.titleTrail}
          </>
        }
        description={WHATSAPP_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}

import WhatsAppHero from '../../components/templates/WhatsAppHero/WhatsAppHero';
import { ChatMock } from '../../components/organisms/WhatsAppMocks/WhatsAppMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureCard from '../../components/molecules/FeatureCard/FeatureCard';
import NumberedSteps from '../../components/molecules/NumberedSteps/NumberedSteps';
import CTASection from '../../components/organisms/CTASection/CTASection';
import Container from '../../components/common/Container/Container';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { WHATSAPP_HUB_FEATURES, WHATSAPP_TRUST_ITEMS, WHATSAPP_HOW_IT_WORKS } from '../../data/whatsappPages';
import gridStyles from './whatsapp.module.css';

export const metadata = buildMetadata(seoData.whatsappHub);

export default function WhatsAppHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'WhatsApp Business', path: '/whatsapp' }])} />

      <WhatsAppHero
        icon="chat"
        iconBg="var(--color-green-tint)"
        iconColor="var(--color-whatsapp)"
        title="Turn WhatsApp into your busiest sales channel."
        description="One shared inbox, multiple numbers, broadcasts, automation, analytics and a 24/7 AI Agent — everything your team needs to sell and support on WhatsApp, inside AiEngage CRM."
      >
        <ChatMock />
      </WhatsAppHero>

      <TrustStrip items={WHATSAPP_TRUST_ITEMS} />

      <section className={gridStyles.section}>
        <Container>
          <div className={gridStyles.headWrap}>
            <span className={gridStyles.eyebrow}>EVERYTHING INCLUDED</span>
            <h2 className={gridStyles.heading}>Six ways WhatsApp works harder for you.</h2>
          </div>
          <div className={gridStyles.grid}>
            {WHATSAPP_HUB_FEATURES.map((f) => (
              <FeatureCard
                key={f.title}
                href={f.href}
                icon={f.icon}
                iconBg={f.iconBg}
                iconColor={f.iconColor}
                title={f.title}
                description={f.description}
                dark={f.dark}
              />
            ))}
          </div>
        </Container>
      </section>

      <NumberedSteps eyebrow="HOW IT WORKS" heading="Live on WhatsApp in three simple steps." steps={WHATSAPP_HOW_IT_WORKS} />

      <CTASection
        title="Ready to sell on WhatsApp?"
        description="Start your 14-day free trial — no credit card required."
        titleSize={42}
      />
    </>
  );
}

import WhatsAppHero from '../../../components/templates/WhatsAppHero/WhatsAppHero';
import { AIAgentChatMock, AIHandoffMock } from '../../../components/organisms/WhatsAppMocks/WhatsAppMocks';
import BenefitsGrid from '../../../components/molecules/BenefitsGrid/BenefitsGrid';
import CheckItem from '../../../components/molecules/CheckItem/CheckItem';
import CTASection from '../../../components/organisms/CTASection/CTASection';
import Container from '../../../components/common/Container/Container';
import JsonLd from '../../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../../utils/seo';
import { seoData } from '../../../data/seoData';
import { WHATSAPP_SUBPAGES } from '../../../data/whatsappPages';
import styles from './aiAgent.module.css';

const page = WHATSAPP_SUBPAGES['ai-agent'];

export const metadata = buildMetadata(seoData[page.seoKey]);

export default function WhatsAppAIAgentPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'WhatsApp Business', path: '/whatsapp' },
          { name: page.breadcrumbLabel, path: '/whatsapp/ai-agent' },
        ])}
      />

      <WhatsAppHero
        icon={page.icon}
        iconBg={page.iconBg}
        iconColor={page.iconColor}
        title={page.title}
        titleAccent={page.titleAccent}
        description={page.description}
        dark
      >
        <AIAgentChatMock />
      </WhatsAppHero>

      <BenefitsGrid heading={page.whatItDoesHeading} items={page.whatItDoes} columns={4} small />

      <section className={styles.handoff}>
        <Container className={styles.inner}>
          <div className={styles.text}>
            <span className={styles.eyebrow}>{page.handoff.eyebrow}</span>
            <h2 className={styles.title}>{page.handoff.title}</h2>
            <p className={styles.desc}>{page.handoff.description}</p>
            <div className={styles.checks}>
              {page.handoff.checks.map((text) => (
                <CheckItem key={text}>{text}</CheckItem>
              ))}
            </div>
          </div>
          <div className={styles.mock}>
            <AIHandoffMock />
          </div>
        </Container>
      </section>

      <CTASection
        title={page.ctaTitle}
        description={page.ctaDesc}
        titleSize={page.ctaTitleSize}
        secondaryLabel="Back to WhatsApp"
        secondaryHref="/whatsapp"
      />
    </>
  );
}

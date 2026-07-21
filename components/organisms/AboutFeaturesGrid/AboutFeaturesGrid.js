import Container from '../../common/Container/Container';
import AboutFeatureCard from '../../molecules/AboutFeatureCard/AboutFeatureCard';
import {
  AICapabilitiesMock,
  WhatsAppAgentMock,
  VoiceCallingMock,
  MobileCRMMock,
  SalesPipelineMock,
  LeadManagementMock,
  CustomizationMock,
  MultichannelMock,
  AutomationFlowMock,
} from '../AboutMocks/AboutMocks';
import styles from './AboutFeaturesGrid.module.css';

const MOCKS = {
  AICapabilitiesMock,
  WhatsAppAgentMock,
  VoiceCallingMock,
  MobileCRMMock,
  SalesPipelineMock,
  LeadManagementMock,
  CustomizationMock,
  MultichannelMock,
  AutomationFlowMock,
};

/** Heading + 3-column grid of product feature link-cards, each with its own mini mock visual. */
export default function AboutFeaturesGrid({ heading, items }) {
  return (
    <section id="features" className={styles.section}>
      <Container>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.grid}>
          {items.map((item) => {
            const Mock = MOCKS[item.mockKey];
            return (
              <AboutFeatureCard
                key={item.title}
                href={item.href}
                icon={item.icon}
                iconBg={item.iconBg}
                iconColor={item.iconColor}
                title={item.title}
                description={item.description}
                capabilities={item.capabilities}
              >
                <Mock />
              </AboutFeatureCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import Button from '../../atoms/Button/Button';
import { CTA_LINKS } from '../../../utils/constants';
import { PRICING } from '../../../data/shopifyPartner';
import styles from './ShopifyPricing.module.css';

export default function ShopifyPricing() {
  const { plan } = PRICING;
  return (
    <section id="pricing" className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.copy}>
            <h2 className={styles.heading}>
              Starting at Just <span className="textAccent">$19/Month</span>
            </h2>
            <p className={styles.desc}>Get started with the tools your team needs today and scale as you grow.</p>

            <div className={styles.checks}>
              {PRICING.checks.map((c) => (
                <span key={c} className={styles.check}>
                  <Icon name="check_circle" size={16} color="var(--color-green)" />
                  {c}
                </span>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <Button target="_blank" href={CTA_LINKS.tryFree} variant="primary" size="lg">
                See All Pricing
              </Button>
              <Button href={CTA_LINKS.bookDemo} variant="outlineDark" size="lg">
                Book a Live Demo
              </Button>
            </div>
          </div>

          <div className={styles.art}>
            <div className={styles.blob} />
            <div className={styles.planCard}>
              <div className={styles.planHead}>
                <span className={styles.planIcon}>
                  <Icon name={plan.icon} size={24} color="var(--color-primary)" />
                </span>
                <div>
                  <div className={styles.planName}>{plan.name}</div>
                  <div className={styles.planTagline}>{plan.tagline}</div>
                </div>
              </div>

              <div className={styles.planPrice}>
                <span className={styles.priceValue}>{plan.price}</span>
                <span className={styles.pricePeriod}>{plan.period}</span>
              </div>

              <div className={styles.planFeatures}>
                {plan.features.map((f) => (
                  <div key={f} className={styles.planFeature}>
                    <Icon name="check_circle" size={16} color="var(--color-green)" />
                    {f}
                  </div>
                ))}
              </div>

              <a target="_blank" href={plan.ctaHref} className={styles.planCta}>
                {plan.cta}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

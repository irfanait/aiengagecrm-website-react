import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import ProductMock from '../ProductMock/ProductMock';
import { CTA_LINKS } from '../../../utils/constants';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            AI POWERED CRM
            <span className={styles.eyebrowLine} />
          </div>

          <h1 className={styles.title}>
            Automate your business.
            <br />
            Close <span className="highlight">every deal</span> that matters.
          </h1>

          <p className={styles.subtitle}>
            Capture leads, engage customers on WhatsApp, email and calls, and let AI handle the follow-ups — in one
            CRM your team will actually use.
          </p>

          <div className={styles.ctaRow}>
            <Button href={CTA_LINKS.bookDemo} variant="primary" size="lg" shadow>
              Book a Demo
            </Button>
            <Button href={CTA_LINKS.tryFree} variant="outline" size="lg">
              Try for Free
            </Button>
          </div>

          <div className={styles.trustRow}>
            <span className={styles.trustItem}>
              <Icon name="check" size={17} color="var(--color-primary)" />
              No credit card required
            </span>
            <span className={styles.trustDot} />
            <span className={styles.trustItem}>
              <Icon name="check" size={17} color="var(--color-primary)" />
              14-day free trial
            </span>
            <span className={styles.trustDot} />
            <span className={styles.trustItem}>
              <Icon name="check" size={17} color="var(--color-primary)" />
              Trusted by 2000+ businesses
            </span>
          </div>

          <ProductMock />
        </div>
      </section>
      <div className={styles.hairline} />
    </>
  );
}

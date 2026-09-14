import Image from 'next/image';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import Button from '../../atoms/Button/Button';
import { CTA_LINKS } from '../../../utils/constants';
import { HERO_STATS, HERO_CHECKS } from '../../../data/shopifyPartner';
import styles from './ShopifyHero.module.css';

export default function ShopifyHero() {
  return (
    <section id="top" className={styles.section}>
      <Container className={styles.body}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            The AI-Powered CRM Built for <span className="textAccent">Shopify Apps &amp; Agencies</span>
          </h1>
          <p className={styles.desc}>
            Capture more leads, automate follow-ups, and deliver faster support with sales, marketing, and AI in one
            CRM.
          </p>

          <div className={styles.stats}>
            {HERO_STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <Image src={s.image} alt={s.label} width={44} height={44} className={styles.statImage} />
                <b className={styles.statLabel}>{s.label}</b>
              </div>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <Button href={CTA_LINKS.tryFree} variant="primary" size="lg" icon="arrow_forward">
              Start 14-Day Free Trial
            </Button>
            <Button href={CTA_LINKS.bookDemo} variant="outlineDark" size="lg">
              Book a Demo
            </Button>
          </div>

          <div className={styles.checks}>
            {HERO_CHECKS.map((c) => (
              <span key={c} className={styles.check}>
                <Icon name="check_circle" size={16} color="var(--color-green)" />
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <Image
            src="/shopify-partner/hero-dashboard.png"
            alt="AiEngage CRM dashboard with leads from Shopify, Meta Ads, Google Ads and website forms"
            width={662}
            height={630}
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 620px"
            quality={95}
            priority
          />
        </div>
      </Container>
    </section>
  );
}

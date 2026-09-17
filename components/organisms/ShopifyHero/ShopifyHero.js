import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import Button from '../../atoms/Button/Button';
import { CTA_LINKS } from '../../../utils/constants';
import { HERO_STATS } from '../../../data/shopifyPartner';
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
                {/* Plain <img>, not next/image — serves the source file's real bytes directly with
                    no resize/re-encode. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.label} className={styles.statImage} loading="lazy" />
                <b className={styles.statLabel}>{s.label}</b>
              </div>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <Button href={CTA_LINKS.tryFree} variant="primary" size="lg" shadow>
              Start 14-Day Free Trial
            </Button>
            <Button href={CTA_LINKS.bookDemo} variant="outlineDark" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>

        <div className={styles.right}>
          {/* Plain <img>, not next/image — serves the source file's real bytes directly with no
              resize/re-encode. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/shopify-partner/hero-dashboard.webp"
            alt="AiEngage CRM dashboard — marketing and sales activity, deals, team inbox and leads from the Shopify ecosystem"
            className={styles.image}
            fetchPriority="high"
          />

          {/* <span className={styles.caption}>
            From First Click
            <br />
            to Long-Term
            <br />
            Customers
          </span> */}

          {/* <div className={styles.sourceBadges}>
            <span className={styles.sourceBadge}>
              <Icon name="thumb_up" size={14} color="#1877F2" />
              Meta Ads
            </span>
            <span className={styles.sourceBadge}>
              <Icon name="search" size={14} color="#EA4335" />
              Google Ads
            </span>
            <span className={styles.sourceBadge}>
              <Icon name="public" size={14} color="var(--color-text-faint)" />
              Website
            </span>
          </div> */}
{/* 
          <div className={styles.trustBadge}>
            <span className={styles.trustAvatars}>
              <span className={styles.trustAvatar}>AP</span>
              <span className={styles.trustAvatar}>NM</span>
              <span className={styles.trustAvatar}>YM</span>
            </span>
            Trusted by 1,000+
          </div> */}

          {/* Real HTML replica of the "One CRM. Every conversation. More growth." card — the
              mockup's own version of this is baked into hero-dashboard.webp as flat pixels (that
              region has been erased from the image), rebuilt here so "One CRM" can be colored. */}
          <div className={styles.crmBadge}>
            <span className={styles.crmBadgeIcon}>
              <Icon name="auto_awesome" size={20} color="var(--color-primary)" />
            </span>
            <span className={styles.crmBadgeText}>
              <span className="textAccent">One CRM.</span>
              <br />
              Every conversation.
              <br />
              More growth.
            </span>
            <Icon name="north_east" size={18} color="var(--color-primary)" className={styles.crmBadgeArrow} />
          </div>
        </div>
      </Container>
    </section>
  );
}

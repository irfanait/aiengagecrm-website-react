import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import { CTA_LINKS } from '../../../utils/constants';
import { HERO_CHANNELS } from '../../../data/homeV2Discovery';
import styles from './HeroV2.module.css';

export default function HeroV2() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Bringing Sales, Marketing &amp; Automation Into <span className="textAccent">One CRM</span>
          </h1>
          <p className={styles.subtitle}>Manage leads, conversations, campaigns, and follow-ups from one AI-powered CRM.</p>

          <div className={styles.channels}>
            {HERO_CHANNELS.map((c) => (
              <span key={c.label} className={styles.channelChip}>
                <Icon name={c.icon} size={15} color="var(--color-primary)" />
                {c.label}
              </span>
            ))}
          </div>

          <p className={styles.note}>Built for growing businesses.</p>

          <div className={styles.ctaRow}>
            <Button href={CTA_LINKS.bookDemo} variant="primary" size="lg" shadow>
              Book a Demo
            </Button>
            <Button href={CTA_LINKS.tryFree} variant="outline" size="lg" icon="arrow_forward">
              Try for Free
            </Button>
          </div>
        </div>

        <div className={styles.right}>
          {/* Plain <img>, not next/image — serves the source file's real bytes directly with no
              resize/re-encode. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/homev2/hero-dashboard-mock.png"
            alt="AiEngage CRM dashboard — new lead captured from Meta Ads, AI follow-up sent on WhatsApp, meeting booked"
            className={styles.mockImage}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import { CTA_LINKS } from '../../../utils/constants';
import { HOMEV3_HERO_CHANNELS } from '../../../data/homeV3Hero';
import styles from './HeroV3.module.css';

/** Homepage v3 hero — new "Turn Conversations into Customers with AI" headline, extracted from
 * the "Home V6" mockup. Own component/data, independent from HeroV2 (which stays untouched). */
export default function HeroV3() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Turn Conversations into Customers <span className="textAccent">with AI</span>
          </h1>
          <p className={styles.subtitle}>
            Capture leads, engage across WhatsApp, Email &amp; Calls, automate follow-ups, book meetings, close deals and
            deliver support &mdash; <strong>all in one AI-powered CRM.</strong>
          </p>

          <div className={styles.ctaRow}>
            <Button href={CTA_LINKS.bookDemo} variant="primary" size="lg" shadow>
              Book a Demo
            </Button>
            <Button href={CTA_LINKS.tryFree} variant="outline" size="lg">
              Try for Free
            </Button>
          </div>

          <div className={styles.channelRow}>
            {HOMEV3_HERO_CHANNELS.map((c) => (
              <div key={c.key} className={styles.channel}>
                <div className={styles.channelIcon} style={{ background: c.bg }}>
                  <Icon name={c.icon} size={24} color={c.color} />
                </div>
                <span className={styles.channelLabel}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          {/* Plain <img>, not next/image — serves the source file's real bytes directly with no
              resize/re-encode. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/homev3/hero-device-mock.png"
            alt="AiEngage CRM dashboard and mobile app"
            className={styles.mockImage}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

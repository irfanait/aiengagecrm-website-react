import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import { CTA_LINKS } from '../../../utils/constants';
import { AI_JOURNEY_STEPS } from '../../../data/homeV3AiJourney';
import styles from './AIJourneyV3.module.css';

function StepMock({ mock }) {
  if (mock.kind === 'checklist') {
    return (
      <div className={styles.mockCard}>
        <div className={styles.checklist}>
          {mock.items.map((item) => (
            <div key={item} className={styles.checklistRow}>
              <Icon name="check_box" size={16} color="rgb(34, 169, 84)" />
              {item}
              <span className={styles.checkDot}>
                <Icon name="check" size={11} color="#fff" />
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (mock.kind === 'slots') {
    return (
      <div className={styles.mockCard}>
        <div className={styles.slotLabel}>{mock.label}</div>
        <div className={styles.slotList}>
          {mock.slots.map((s) => (
            <div key={s.time} className={`${styles.slot} ${s.active ? styles.slotActive : ''}`}>
              {s.time}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (mock.kind === 'tasks') {
    return (
      <div className={styles.mockCard}>
        <div className={styles.taskList}>
          {mock.items.map((t) => (
            <div key={t.label} className={styles.taskRow}>
              <Icon name="chevron_right" size={15} color="var(--color-text-faint)" />
              {t.label}
              {t.done ? (
                <span className={styles.checkDot}>
                  <Icon name="check" size={11} color="#fff" />
                </span>
              ) : (
                <span className={styles.taskEmptyDot} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (mock.kind === 'bubble') {
    return (
      <div className={`${styles.mockCard} ${styles.mockCardTint}`}>
        <p className={styles.bubbleText}>{mock.message}</p>
      </div>
    );
  }
  // default: chat
  return (
    <div className={`${styles.mockCard} ${styles.mockCardGreen}`}>
      <p className={styles.bubbleText}>{mock.message}</p>
      <span className={styles.bubbleTime}>{mock.time}</span>
    </div>
  );
}

/** Homepage v3's "AI That Works Across Your Entire Customer Journey" section — 5 step cards
 * connected by arrows, each with its own small mock UI. Extracted from the "Home V6" mockup; own
 * component/data, doesn't touch AIJourneyCarouselV2 (v2's equivalent, a carousel not a static row). */
export default function AIJourneyV3() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>
          AI That Works Across Your <span className="textAccent">Entire Customer Journey</span>
        </h2>

        <div className={styles.row}>
          {AI_JOURNEY_STEPS.map((step, i) => (
            <div key={step.key} className={styles.stepWrap}>
              <div className={styles.card}>
                <div className={styles.iconBox} style={{ background: step.iconBg }}>
                  <Icon name={step.icon || 'chat'} size={30} color={step.iconColor || 'var(--color-whatsapp)'} filled />
                </div>
                <div className={styles.cardTitle}>{step.title}</div>
                <StepMock mock={step.mock} />
                <h3 className={styles.stepSubtitle}>{step.subtitle}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              {i < AI_JOURNEY_STEPS.length - 1 && (
                <span className={styles.arrow}>
                  <Icon name="arrow_forward" size={18} color="var(--color-primary)" />
                </span>
              )}
            </div>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Button href={CTA_LINKS.tryFree} variant="primary" size="lg" shadow>
            See AI in Action
          </Button>
        </div>
      </Container>
    </section>
  );
}

import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import SectionHeading from '../../molecules/SectionHeading/SectionHeading';
import { AUTOPILOT_STEPS } from '../../../data/homeContent';
import styles from './AIAutopilot.module.css';

function Step({ data }) {
  const isFinal = data.final;
  return (
    <div>
      <div className={styles.step}>
        <span className={`${styles.stepIcon} ${isFinal ? styles.stepIconFinal : ''}`}>
          <Icon name={data.icon} size={22} color={isFinal ? '#fff' : 'var(--color-primary-dark-accent)'} />
        </span>
        <span className={`${styles.stepLabel} ${isFinal ? styles.stepLabelFinal : ''}`}>STEP {data.step}</span>
      </div>
      <div className={styles.stepTitle}>{data.title}</div>
      <p className={styles.stepDesc}>{data.desc}</p>
      <div className={`${styles.stepStatus} ${isFinal ? styles.stepStatusFinal : ''}`}>
        {data.dot ? (
          <span className={styles.statusDot} />
        ) : (
          <Icon name={data.statusIcon} size={14} color={data.statusColor || 'var(--color-primary-dark-accent)'} />
        )}
        <span className={`${styles.statusText} ${isFinal ? styles.statusTextFinal : ''}`}>{data.statusText}</span>
      </div>
    </div>
  );
}

export default function AIAutopilot() {
  const row1 = AUTOPILOT_STEPS.slice(0, 4);
  const row2 = AUTOPILOT_STEPS.slice(4, 8);

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading index="02" label="AI ON AUTOPILOT" dark className={styles.eyebrowOnly} title="" />

        <div className={styles.header}>
          <h2 className={styles.title}>
            From Meta ad to booked meeting — <span className={styles.titleAccent}>zero human touch.</span>
          </h2>
          <p className={styles.desc}>
            A real lead journey, handled end-to-end by AiEngage. Your team steps in only when the meeting is on the
            calendar.
          </p>
        </div>

        <div className={styles.rowWrap}>
          <div className={styles.rowLine} />
          <div className={styles.grid}>
            {row1.map((s) => (
              <Step key={s.step} data={s} />
            ))}
          </div>
        </div>

        <div className={styles.connector}>
          <span className={styles.connectorIcon}>
            <Icon name="subdirectory_arrow_left" size={24} color="var(--color-dark-border-strong)" />
          </span>
        </div>

        <div className={styles.rowWrap} style={{ marginBottom: 0 }}>
          <div className={styles.rowLine} />
          <div className={styles.grid}>
            {row2.map((s) => (
              <Step key={s.step} data={s} />
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <span className={styles.footerItem}>
            <span className={styles.footerDot} />
            Steps 1–7 · fully automated
          </span>
          <span className={styles.footerItem}>
            <span className={`${styles.footerDot} ${styles.footerDotFinal}`} />
            Step 8 · your team&apos;s first touch
          </span>
          <a href="#" className={styles.footerLink}>
            See automation in action
            <Icon name="arrow_forward" size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}

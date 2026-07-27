import Container from '../../common/Container/Container';
import styles from './AboutMission.module.css';

/** Origin-story section: heading + paragraphs on the left, a bordered stat card on the right. */
export default function AboutMission({ heading, paragraphs, stats }) {
  return (
    <section id="mission" className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>{heading}</h2>
          {paragraphs.map((p) => (
            <p key={p} className={styles.paragraph}>
              {p}
            </p>
          ))}
        </div>
        <div className={styles.statCard}>
          {stats.map((s, i) => (
            <div key={s.label} className={`${styles.stat} ${i > 0 ? styles.statBordered : ''}`}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

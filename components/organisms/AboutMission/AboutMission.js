import Container from '../../common/Container/Container';
import styles from './AboutMission.module.css';

/** Plain two-column text section: heading + tagline on the left, paragraphs on the right. */
export default function AboutMission({ heading, tagline, paragraphs }) {
  return (
    <section id="mission" className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>{heading}</h2>
          <div className={styles.tagline}>{tagline}</div>
        </div>
        <div className={styles.right}>
          {paragraphs.map((p) => (
            <p key={p} className={styles.paragraph}>
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

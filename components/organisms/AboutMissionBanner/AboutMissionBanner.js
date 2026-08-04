import Container from '../../common/Container/Container';
import styles from './AboutMissionBanner.module.css';

/** Full-bleed dark banner: centered eyebrow + mission statement heading + supporting paragraphs. */
export default function AboutMissionBanner({ eyebrow, heading, description }) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 className={styles.heading}>{heading}</h2>
        {description.map((p) => (
          <p key={p} className={styles.description}>
            {p}
          </p>
        ))}
      </Container>
    </section>
  );
}

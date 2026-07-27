import Container from '../../common/Container/Container';
import styles from './AboutMissionBanner.module.css';

/** Full-bleed dark banner: centered eyebrow + mission statement heading + supporting paragraph. */
export default function AboutMissionBanner({ eyebrow, heading, description }) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
      </Container>
    </section>
  );
}

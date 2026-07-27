import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './AboutTrust.module.css';

/** Centered heading + a 3-col grid of check-marked trust points, and a closing centered note. */
export default function AboutTrust({ heading, items, note }) {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.heading}>{heading}</h2>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item} className={styles.card}>
              <Icon name="check_circle" size={20} color="var(--color-primary)" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p className={styles.note}>{note}</p>
      </Container>
    </section>
  );
}

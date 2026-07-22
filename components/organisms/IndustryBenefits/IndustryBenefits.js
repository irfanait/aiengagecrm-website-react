import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './IndustryBenefits.module.css';

/** Centered heading + 3-column grid of benefit cards. */
export default function IndustryBenefits({ heading, items }) {
  return (
    <section id="benefits" className={styles.section}>
      <Container>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.grid}>
          {items.map((b) => (
            <div key={b.title} className={styles.card}>
              <span className={styles.iconBox}>
                <Icon name={b.icon} size={24} color="var(--color-primary)" />
              </span>
              <div className={styles.title}>{b.title}</div>
              <p className={styles.body}>{b.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

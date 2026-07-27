import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './AboutWhyItWorks.module.css';

/** "Our Approach to AI": left-aligned heading + subtitle, a 3-card row, and a closing note. */
export default function AboutWhyItWorks({ heading, subtitle, cards, note }) {
  return (
    <section id="why-it-works" className={styles.section}>
      <Container>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.grid}>
          {cards.map((c) => (
            <div className={styles.card} key={c.title}>
              <span className={styles.iconBox}>
                <Icon name={c.icon} size={24} color="var(--color-primary)" />
              </span>
              <div className={styles.cardTitle}>{c.title}</div>
              <p className={styles.cardBody}>{c.body}</p>
            </div>
          ))}
        </div>

        <p className={styles.note}>{note}</p>
      </Container>
    </section>
  );
}

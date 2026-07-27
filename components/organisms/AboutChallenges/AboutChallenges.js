import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './AboutChallenges.module.css';

/** Left-aligned heading + subtitle, a bordered checklist of common business pain points, and a
 * closing pair of paragraphs. */
export default function AboutChallenges({ heading, subtitle, items, note }) {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.list}>
          {items.map((item) => (
            <div key={item} className={styles.row}>
              <Icon name="priority_high" size={18} color="var(--color-primary)" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {note.map((p) => (
          <p key={p} className={styles.note}>
            {p}
          </p>
        ))}
      </Container>
    </section>
  );
}

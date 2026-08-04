import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './AboutChallenges.module.css';

/** Centered, narrow (820px) heading, a pair of intro paragraphs, a subtitle right above the
 * list, and a bordered checklist of common business pain points. */
export default function AboutChallenges({ heading, subtitle, items, note }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.heading}>{heading}</h2>

          {note.map((p) => (
            <p key={p} className={styles.note}>
              {p}
            </p>
          ))}

          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.list}>
            {items.map((item) => (
              <div key={item} className={styles.row}>
                <Icon name="priority_high" size={20} color="#c0503a" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

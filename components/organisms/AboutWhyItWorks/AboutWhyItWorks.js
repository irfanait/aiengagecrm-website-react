import { Fragment } from 'react';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './AboutWhyItWorks.module.css';

/** Heading + 4-card icon grid, followed by a horizontal "RESULT" stats bar. */
export default function AboutWhyItWorks({ heading, cards, resultLabel, stats }) {
  return (
    <section id="why-it-works" className={styles.section}>
      <Container>
        <h2 className={styles.heading}>{heading}</h2>
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
        <div className={styles.resultBar}>
          <div className={styles.resultLabel}>{resultLabel}</div>
          <div className={styles.resultStats}>
            {stats.map((s, i) => (
              <Fragment key={s.label}>
                {i > 0 && <span className={styles.divider} />}
                <div className={styles.stat}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

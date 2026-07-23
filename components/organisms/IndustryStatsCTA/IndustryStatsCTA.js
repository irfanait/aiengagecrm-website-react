import { Fragment } from 'react';
import Button from '../../atoms/Button/Button';
import Container from '../../common/Container/Container';
import { CTA_LINKS } from '../../../utils/constants';
import styles from './IndustryStatsCTA.module.css';

/**
 * Dark "results" band with detailed stat cards (figure + label + title + description, not just a
 * bare number) laid out in rows, followed by a divided heading/description/CTA block — used by
 * Education instead of the simpler IndustryResultsCTA. `statRows` is an array of rows, each an
 * array of stats.
 */
export default function IndustryStatsCTA({ statRows, heading, description, primaryLabel = 'Book a Demo', secondaryLabel = 'Try for Free' }) {
  return (
    <section id="results" className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.statsRows}>
          {statRows.map((row, i) => (
            <div key={i} className={styles.statsRow}>
              {row.map((s, j) => (
                <Fragment key={s.label}>
                  {j > 0 && <span className={styles.divider} />}
                  <div className={styles.stat}>
                    <div className={styles.statValue}>{s.value}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                    <div className={styles.statTitle}>{s.title}</div>
                    <p className={styles.statDesc}>{s.desc}</p>
                  </div>
                </Fragment>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.ctaBlock}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.desc}>{description}</p>
          <div className={styles.ctaRow}>
            <Button href={CTA_LINKS.bookDemo} variant="primary" size="lg">
              {primaryLabel}
            </Button>
            <Button href={CTA_LINKS.tryFree} variant="outlineOnDark" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

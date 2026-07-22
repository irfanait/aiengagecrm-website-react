import { Fragment } from 'react';
import Button from '../../atoms/Button/Button';
import Container from '../../common/Container/Container';
import { CTA_LINKS } from '../../../utils/constants';
import styles from './IndustryResultsCTA.module.css';

function StatsRow({ stats }) {
  return (
    <div className={styles.statsRow}>
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
  );
}

/**
 * Dark "results" band: heading, N stats, and the Book a Demo / Try for Free CTAs. `stats` is
 * either a flat array (single row) or an array of arrays (one row each, e.g. Tours & Travels'
 * 2-row/6-stat layout) — rows render as separate flex containers so dividers never span a wrap.
 */
export default function IndustryResultsCTA({ heading, stats, primaryLabel = 'Book a Demo', secondaryLabel = 'Try for Free' }) {
  const rows = Array.isArray(stats[0]) ? stats : [stats];

  return (
    <section id="results" className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.statsRows}>
          {rows.map((row, i) => (
            <StatsRow key={i} stats={row} />
          ))}
        </div>
        <div className={styles.ctaRow}>
          <Button href={CTA_LINKS.bookDemo} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          <Button href={CTA_LINKS.tryFree} variant="outlineOnDark" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}

import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import styles from './PartnerHero.module.css';

function EarningsChart({ chart }) {
  const w = 265;
  const h = 132;
  const left = 25;
  const right = 240;
  const top = 10;
  const bottom = 110;
  const step = (right - left) / (chart.points.length - 1);
  const coords = chart.points.map((v, i) => ({
    x: left + i * step,
    y: bottom - (v / 100) * (bottom - top),
  }));
  const polyline = coords.map((c) => `${c.x},${c.y}`).join(' ');
  const last = coords[coords.length - 1];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={styles.chart}>
      <g stroke="var(--color-border)" strokeWidth="1">
        <line x1="22" y1="110" x2="258" y2="110" />
        <line x1="22" y1="76.7" x2="258" y2="76.7" />
        <line x1="22" y1="43.3" x2="258" y2="43.3" />
        <line x1="22" y1="10" x2="258" y2="10" />
      </g>
      <polyline points={polyline} fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <g fill="#fff" stroke="var(--color-primary)" strokeWidth="1.6">
        {coords.slice(0, -1).map((c, i) => (
          <circle key={i} cx={c.x} cy={c.y} r="2.6" />
        ))}
        <circle cx={last.x} cy={last.y} r="3.4" fill="var(--color-primary)" />
      </g>
      <g>
        <rect x={last.x - 23} y="28" width="46" height="16" rx="8" fill="var(--color-primary-tint)" stroke="var(--color-primary)" strokeWidth="1" />
        <text x={last.x} y="39.3" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--color-primary)">
          {chart.callout}
        </text>
      </g>
      <g fontSize="7.5" fill="var(--color-text-faint)">
        <text x="18" y="113" textAnchor="end">
          0
        </text>
        {coords.map((c, i) => (
          <text key={i} x={c.x} y="126" textAnchor="middle">
            {chart.months[i]}
          </text>
        ))}
      </g>
    </svg>
  );
}

/** Partner Program hero: heading + checklist + CTA on the left, a "partner business" stat mock on the right. */
export default function PartnerHero({ hero, dashboard }) {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <div>
          <span className={styles.badge}>{hero.badge}</span>
          <h1 className={styles.title}>
            {hero.headingLine1}
            <br />
            {hero.headingLine2}
            <span className="textAccent">{hero.headingAccent}</span>
          </h1>
          <p className={styles.desc}>{hero.description}</p>
          <p className={styles.highlight}>{hero.highlight}</p>
          <Button href={hero.ctaHref} variant="primary" size="lg" shadow>
            {hero.ctaLabel} →
          </Button>
          <div className={styles.checks}>
            {hero.checks.map((c) => (
              <span key={c} className={styles.check}>
                <Icon name="check_circle" size={17} color="var(--color-primary)" />
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.mockCard}>
          <div className={styles.mockHeader}>
            <span className={styles.mockTitle}>{dashboard.title}</span>
            <span className={styles.mockPeriod}>{dashboard.period}</span>
          </div>

          <div className={styles.statGrid}>
            {dashboard.stats.map((s) => (
              <div key={s.label} className={`${styles.statTile} ${s.highlight ? styles.statTileHighlight : ''}`}>
                <div className={s.highlight ? styles.statValueHighlight : styles.statValue}>
                  {s.value}
                  {s.highlight && <Icon name="north_east" size={15} color="var(--color-primary)" />}
                </div>
                <div className={styles.statLabel}>{s.level || s.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.panelRow}>
            <div className={styles.chartPanel}>
              <div className={styles.panelTitle}>Earnings Overview</div>
              <EarningsChart chart={dashboard.chart} />
            </div>
            <div className={styles.sourcesPanel}>
              <div className={styles.panelTitle}>Top Sources</div>
              <div className={styles.sourceList}>
                {dashboard.sources.map((s) => (
                  <div key={s.label} className={styles.sourceRow}>
                    <span className={styles.sourceIcon}>
                      <Icon name={s.icon} size={13} color="var(--color-primary)" />
                    </span>
                    <span className={styles.sourceLabel}>{s.label}</span>
                    <span className={styles.sourceValue}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

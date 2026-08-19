import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './PartnerTiers.module.css';

/** Pricing-style tier cards (Associate / Growth / Elite) with a progression row and fine print. */
export default function PartnerTiers({ data }) {
  return (
    <section id="partner-levels" className={styles.section}>
      <Container>
        <h2 className={styles.heading}>
          {data.headingLead}
          <span className="textAccent">{data.headingAccent}</span>
          {data.headingSuffix}
        </h2>

        <div className={styles.tiers}>
          {data.tiers.map((tier) => (
            <div key={tier.name} className={`${styles.tier} ${tier.featured ? styles.tierFeatured : ''}`}>
              {tier.badge && <span className={styles.badge}>{tier.badge}</span>}
              <div className={styles.kicker}>{tier.kicker}</div>
              <div className={styles.name}>{tier.name}</div>
              <div className={styles.range}>{tier.range}</div>
              <div className={styles.commission}>{tier.commission}</div>
              <div className={styles.commissionLabel}>Recurring commission</div>
              <div className={styles.features}>
                {tier.features.map((f) => (
                  <span key={f} className={styles.feature}>
                    <Icon name="check" size={17} color="var(--color-primary)" />
                    {f}
                  </span>
                ))}
              </div>
              <a href={tier.ctaHref} className={tier.variant === 'filled' ? styles.ctaFilled : styles.ctaOutline}>
                {tier.ctaLabel} →
              </a>
            </div>
          ))}
        </div>

        <div className={styles.progression}>
          {data.progression.map((step, i) => (
            <span key={step.label} className={styles.progressionGroup}>
              <span className={styles.progressionItem}>
                <Icon name={step.icon} size={17} color="var(--color-primary)" />
                {step.label}
              </span>
              {i < data.progression.length - 1 && <span className={styles.progressionArrow}>→</span>}
            </span>
          ))}
        </div>

        {data.notes.map((note) => (
          <p key={note} className={styles.note}>
            {note}
          </p>
        ))}
      </Container>
    </section>
  );
}

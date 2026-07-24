import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import styles from './NewPricingCard.module.css';

/**
 * A single pricing plan card. `price` + `priceSuffix` render the dynamic "big number" row
 * (used by plans that have a priceKey in data/newPricing.js); a plan without a suffix (e.g. the
 * Custom plan's "Get a quote") just renders the price text on its own. Unlike the live pricing
 * page, these are flat multi-seat plans (not per-user), so priceSuffix only carries a cadence
 * ("/month" or "/year") — no "/ user" line.
 */
export default function NewPricingCard({
  name,
  price,
  priceSuffix,
  subLabel,
  tagline,
  ctaLabel,
  ctaHref,
  ctaExternal = false,
  trialNote,
  featuresHeading,
  features,
  onSeeAll,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.name}>{name}</div>
      <div className={styles.priceRow}>
        <span className={styles.price}>{price}</span>
        {priceSuffix && (
          <span className={styles.priceSuffix}>
            <span>{priceSuffix.top}</span>
            {priceSuffix.bottom && <span>{priceSuffix.bottom}</span>}
          </span>
        )}
      </div>
      {subLabel && <div className={styles.subLabel}>{subLabel}</div>}
      <p className={styles.tagline}>{tagline}</p>
      {ctaExternal ? (
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={styles.cta}>
          {ctaLabel}
        </a>
      ) : (
        <Link href={ctaHref} className={styles.cta}>
          {ctaLabel}
        </Link>
      )}
      <div className={styles.trialNote}>{trialNote}</div>
      <div className={styles.featuresHeading}>{featuresHeading}</div>
      <div className={styles.featureList}>
        {features.map((f) => (
          <div key={f} className={styles.featureItem}>
            <Icon name="check_circle" size={17} color="var(--color-primary)" className={styles.featureIcon} />
            {f}
          </div>
        ))}
      </div>
      <button type="button" className={styles.seeAll} onClick={onSeeAll}>
        See all features
        <Icon name="arrow_forward" size={16} />
      </button>
    </div>
  );
}

import Icon from '../../atoms/Icon/Icon';
import styles from './PricingToggles.module.css';

/** Billing-cycle pill switch + region (India / International) switch above the pricing cards. */
export default function PricingToggles({ cycle, region, onCycleChange, onRegionChange, regionNote }) {
  return (
    <div className={styles.row}>
      <div className={styles.cycleGroup}>
        <button
          type="button"
          className={`${styles.cycleBtn} ${cycle === 'monthly' ? styles.cycleBtnActive : ''}`}
          onClick={() => onCycleChange('monthly')}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`${styles.cycleBtn} ${cycle === 'annual' ? styles.cycleBtnActive : ''}`}
          onClick={() => onCycleChange('annual')}
        >
          Annually(Save up to 30%)
        </button>
      </div>

      <div className={styles.regionGroup}>
        <span className={`${styles.regionLabel} ${region === 'international' ? styles.regionLabelActive : ''}`}>International</span>
        <button
          type="button"
          className={`${styles.track} ${region === 'india' ? styles.trackIndia : ''}`}
          onClick={() => onRegionChange(region === 'india' ? 'international' : 'india')}
          aria-label="Toggle region"
        >
          <span className={`${styles.knob} ${region === 'india' ? styles.knobIndia : ''}`} />
        </button>
        <span className={`${styles.regionLabel} ${region === 'india' ? styles.regionLabelActive : ''}`}>India</span>
        <span className={styles.infoWrap}>
          <Icon name="info" size={18} color="var(--color-text-faint)" />
          <span className={styles.tip}>{regionNote}</span>
        </span>
      </div>
    </div>
  );
}

import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import styles from './PartnerFinalCTA.module.css';

/** Final dark CTA band: heading, a checklist column and an earn/CTA column. */
export default function PartnerFinalCTA({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <span className={styles.label}>{data.label}</span>
            <h2 className={styles.heading}>
              {data.headingLine1}
              <br />
              {data.headingLine2}
              <span className="textAccentDark">{data.headingAccent}</span>
              {data.headingLine2Suffix}
            </h2>
          </div>

          <div className={styles.checks}>
            {data.checks.map((c) => (
              <span key={c} className={styles.check}>
                <Icon name="check" size={18} color="var(--color-primary)" />
                {c}
              </span>
            ))}
          </div>

          <div className={styles.earnCol}>
            <div className={styles.earnLabel}>{data.earnLabel}</div>
            <Button href={data.ctaHref} variant="primary" size="md">
              {data.ctaLabel} →
            </Button>
            <div className={styles.note}>{data.note}</div>
          </div>
        </div>

        <div className={styles.footerNote}>
          <Icon name="favorite" size={19} color="var(--color-primary)" />
          {data.footerNote}
        </div>
      </div>
    </section>
  );
}

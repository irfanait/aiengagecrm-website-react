import Icon from '../../atoms/Icon/Icon';
import styles from './PartnerSignupTerms.module.css';

/** Compact terms & eligibility checklist shown below the signup FAQ. */
export default function PartnerSignupTerms({ data }) {
  return (
    <section id="signup-terms" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>{data.label}</div>
        {data.items.map((item) => (
          <div key={item} className={styles.item}>
            <Icon name="check" size={18} color="var(--color-primary)" className={styles.icon} />
            {item}
          </div>
        ))}
        <a href={data.linkHref} className={styles.link}>
          {data.linkLabel} →
        </a>
      </div>
    </section>
  );
}

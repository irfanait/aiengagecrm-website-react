import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import styles from './AboutFeatureCard.module.css';

/** A single product feature link-card: icon, title, description, a mini mock visual, and a
 * "KEY CAPABILITIES" chip row. Used by AboutFeaturesGrid on the About Us page. */
export default function AboutFeatureCard({ href, icon, iconBg, iconColor, title, description, capabilities, children }) {
  return (
    <Link href={href} className={styles.card}>
      <span className={styles.iconBox} style={{ background: iconBg }}>
        <Icon name={icon} size={24} color={iconColor} />
      </span>
      <div className={styles.title}>{title}</div>
      <p className={styles.desc}>{description}</p>
      <div className={styles.mockSlot}>{children}</div>
      <div className={styles.footer}>
        <div className={styles.capLabel}>KEY CAPABILITIES</div>
        <div className={styles.capRow}>
          {capabilities.map((c) => (
            <span key={c} className={styles.capChip}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

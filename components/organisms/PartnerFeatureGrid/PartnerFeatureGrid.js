import Icon from '../../atoms/Icon/Icon';
import styles from './PartnerFeatureGrid.module.css';

/** Icon + title + description card grid, shared by the "More Than Referrals" and
 * "We Help You Win" sections on /partners. `tags` renders an optional 2-col chip row per card. */
export default function PartnerFeatureGrid({ items, columns = 3 }) {
  return (
    <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {items.map((item) => (
        <div key={item.title} className={styles.card}>
          <span className={styles.iconBox}>
            <Icon name={item.icon} size={24} color="var(--color-primary)" />
          </span>
          <div className={styles.cardTitle}>{item.title}</div>
          <p className={styles.cardDesc}>{item.description}</p>
          {item.tags && (
            <div className={styles.tags}>
              {item.tags.map((tag) => (
                <span key={tag.label} className={styles.tag}>
                  <Icon name={tag.icon} size={15} color="var(--color-primary)" />
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

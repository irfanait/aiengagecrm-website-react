import Icon from '../../atoms/Icon/Icon';
import styles from './TrustStrip.module.css';

export default function TrustStrip({ items }) {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        {items.map((item, i) => (
          <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {i > 0 && <span className={styles.divider} />}
            <span className={styles.item}>
              <Icon name={item.icon} size={22} color={item.color} />
              {item.label}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

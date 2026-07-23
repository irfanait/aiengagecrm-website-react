import Icon from '../../atoms/Icon/Icon';
import styles from './ContactChannels.module.css';

/** Small grid of contact channel cards (email, WhatsApp, office, hours) used on the Contact Us page. */
export default function ContactChannels({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((c) => {
        const Tag = c.href ? 'a' : 'div';
        return (
          <Tag key={c.label} href={c.href} className={styles.card} target={c.href?.startsWith('http') ? '_blank' : undefined} rel={c.href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
            <span className={styles.iconBox}>
              <Icon name={c.icon} size={20} color="var(--color-primary)" />
            </span>
            <div>
              <div className={styles.label}>{c.label}</div>
              <div className={styles.value}>{c.value}</div>
            </div>
          </Tag>
        );
      })}
    </div>
  );
}

import Icon from '../Icon/Icon';
import styles from './Badge.module.css';

/** Small pill badge with icon + label, e.g. the "WHATSAPP BUSINESS" tag above page H1s. */
export default function Badge({ icon, children, bg = 'var(--color-primary-tint)', color = 'var(--color-primary)', className = '' }) {
  return (
    <span className={`${styles.badge} ${className}`.trim()} style={{ background: bg }}>
      {icon && <Icon name={icon} size={18} color={color} />}
      <span className={styles.label} style={{ color }}>
        {children}
      </span>
    </span>
  );
}

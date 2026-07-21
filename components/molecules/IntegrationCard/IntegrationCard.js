import Image from 'next/image';
import Icon from '../../atoms/Icon/Icon';
import CheckItem from '../CheckItem/CheckItem';
import styles from './IntegrationCard.module.css';

/**
 * A single integration tile: icon/logo, name, category, connected badge, description,
 * a short "what you can do" checklist, and a "+N more" count. Used by IntegrationCatalog.
 */
export default function IntegrationCard({ id, logo, icon, name, category, connected, leadLine, description, listHeading, items, moreCount }) {
  return (
    <div id={id} className={styles.card} style={{ scrollMarginTop: 100 }}>
      {connected && <span className={styles.badge}>● Connected</span>}
      <span className={styles.iconBox}>
        {logo ? (
          <Image src={logo} alt={name} width={28} height={28} className={styles.iconImg} />
        ) : (
          <Icon name={icon} size={26} color="var(--color-primary)" />
        )}
      </span>
      <div className={styles.name}>{name}</div>
      <div className={styles.category}>{category}</div>
      {leadLine && <p className={styles.leadLine}>{leadLine}</p>}
      <p className={styles.desc}>{description}</p>
      <div className={styles.listHeading}>{listHeading}</div>
      <div className={styles.list}>
        {items.map((item) => (
          <CheckItem key={item} small icon="check_circle" color="var(--color-primary)">
            {item}
          </CheckItem>
        ))}
      </div>
      {moreCount && <div className={styles.more}>+{moreCount} more</div>}
    </div>
  );
}

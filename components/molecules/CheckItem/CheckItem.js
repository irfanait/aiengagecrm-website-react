import Icon from '../../atoms/Icon/Icon';
import styles from './CheckItem.module.css';

export default function CheckItem({ children, dark = false, small = false, top = false, muted = false, icon = 'check_circle', color = 'var(--color-green)' }) {
  return (
    <span className={`${styles.item} ${dark ? styles.itemDark : ''} ${small ? styles.small : ''} ${top ? styles.itemTop : ''} ${muted ? styles.itemMuted : ''}`.trim()}>
      <Icon name={icon} size={small ? 17 : 19} color={color} style={top ? { marginTop: 2 } : undefined} />
      {children}
    </span>
  );
}

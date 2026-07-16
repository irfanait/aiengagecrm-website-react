import Icon from '../Icon/Icon';
import styles from './IconBubble.module.css';

/**
 * Round or squircle icon container used for feature icons, step markers,
 * mega-menu category icons and integration logos.
 */
export default function IconBubble({
  icon,
  size = 50,
  iconSize,
  bg = 'var(--color-primary-tint)',
  color = 'var(--color-primary)',
  shape = 'square',
  style = {},
}) {
  return (
    <span
      className={`${styles.bubble} ${shape === 'circle' ? styles.circle : styles.square}`}
      style={{ width: size, height: size, background: bg, ...style }}
    >
      <Icon name={icon} size={iconSize || Math.round(size * 0.52)} color={color} />
    </span>
  );
}

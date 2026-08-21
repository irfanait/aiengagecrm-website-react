import { getInitials, getAvatarColor } from '../../../utils/blogFormat';
import styles from './Avatar.module.css';

/** Circular author avatar — renders the real `avatarUrl` image when the API provides one,
 * otherwise falls back to a colored initials circle. */
export default function Avatar({ name, src, size = 44 }) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- external, admin-uploaded avatar on an unknown domain
      <img src={src} alt={name || ''} className={styles.avatarImg} style={{ width: size, height: size }} />
    );
  }

  return (
    <span
      className={styles.avatar}
      style={{ width: size, height: size, fontSize: size * 0.38, background: getAvatarColor(name) }}
    >
      {getInitials(name)}
    </span>
  );
}

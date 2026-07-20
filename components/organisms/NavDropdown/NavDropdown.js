'use client';

import Link from 'next/link';
import styles from './NavDropdown.module.css';

/**
 * Small hover dropdown for a plain list of links (e.g. "Why AiEngage" comparison pages).
 * Positioned relative to its own trigger, unlike MegaMenu which centers under the whole bar.
 */
export default function NavDropdown({ items, onMouseEnter, onMouseLeave, onNavigate }) {
  return (
    <div className={styles.wrap} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={styles.panel}>
        {items.map((item) => (
          <Link key={item.label} href={item.href} className={styles.item} onClick={onNavigate}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

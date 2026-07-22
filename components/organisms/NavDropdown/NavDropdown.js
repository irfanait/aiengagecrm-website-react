'use client';

import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import styles from './NavDropdown.module.css';

/**
 * Small hover dropdown for a list of links (e.g. "Why AiEngage" comparison pages). Positioned
 * relative to its own trigger, unlike MegaMenu which centers under the whole bar.
 * `variant="grid"` (used by "Industries") renders a 2-column grid of icon + label cards instead
 * of the default plain text list — pass an `icon` per item in that case.
 */
export default function NavDropdown({ items, variant = 'list', onMouseEnter, onMouseLeave, onNavigate }) {
  const isGrid = variant === 'grid';
  const itemClass = isGrid ? styles.gridItem : styles.item;

  return (
    <div className={`${styles.wrap} ${isGrid ? styles.wrapGrid : ''}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={`${styles.panel} ${isGrid ? styles.panelGrid : ''}`}>
        {items.map((item) => {
          const content = isGrid ? (
            <>
              <span className={styles.gridIcon}>
                <Icon name={item.icon} size={20} color="var(--color-primary)" />
              </span>
              {item.label}
            </>
          ) : (
            item.label
          );

          return item.external ? (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={itemClass} onClick={onNavigate}>
              {content}
            </a>
          ) : (
            <Link key={item.label} href={item.href} className={itemClass} onClick={onNavigate}>
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

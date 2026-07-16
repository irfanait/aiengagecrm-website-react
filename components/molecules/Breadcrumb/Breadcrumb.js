import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import styles from './Breadcrumb.module.css';

/**
 * items: [{ label, href }] — the last item renders as plain (non-link) current page text.
 */
export default function Breadcrumb({ items, dark = false }) {
  return (
    <nav className={`${styles.crumbs} ${dark ? styles.crumbsDark : ''}`} aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {isLast ? (
              <span className={dark ? styles.currentDark : styles.current}>{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
            {!isLast && <Icon name="chevron_right" size={15} />}
          </span>
        );
      })}
    </nav>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import { MEGA_MENU } from '../../../data/megaMenu';
import styles from './MegaMenu.module.css';

/** A feature link's href may be an absolute external URL (e.g. the Knowledge Hub) — those need
 * target="_blank"/rel="noopener" instead of client-side Link navigation. */
function FeatureLink({ href, className, onClick, children }) {
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

/**
 * Desktop mega menu: left column of the 4 Suites (icon + name + one-line description), right
 * column of the active Suite's features. Open/close is owned by Header (hover intent with
 * debounce); this component only tracks which Suite is active, mirroring the design's
 * `activeCat` state. Every Suite's own href is '#' (no overview page per-Suite), so the
 * "Complete Overview" link is only rendered when a Suite actually has a real page to send it to.
 */
export default function MegaMenu({ onMouseEnter, onMouseLeave, onNavigate }) {
  const [activeCat, setActiveCat] = useState(0);
  const active = MEGA_MENU[activeCat];
  const hasOverview = active.href && active.href !== '#';

  return (
    <div className={styles.wrap} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={styles.panel}>
        <div className={styles.categories}>
          <div className={styles.categoriesHeading}>ALL SUITES</div>
          {MEGA_MENU.map((cat, i) => {
            const isActive = i === activeCat;
            return (
              <div
                key={cat.name}
                role="button"
                tabIndex={0}
                className={`${styles.categoryItem} ${isActive ? styles.categoryItemActive : ''}`}
                onMouseEnter={() => setActiveCat(i)}
                onFocus={() => setActiveCat(i)}
              >
                <Icon name={cat.icon} size={20} color={isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)'} className={styles.categoryIcon} />
                <span className={styles.categoryText}>
                  <span className={styles.categoryName}>{cat.name}</span>
                  {/* Suite subheading hidden per request — data still in data/megaMenu.js `description` field */}
                  {/* <span className={styles.categoryDesc}>{cat.description}</span> */}
                </span>
                <span className={`${styles.categoryChevron} ${isActive ? styles.categoryChevronActive : ''}`}>
                  <Icon name="arrow_forward" size={16} color="var(--color-primary)" />
                </span>
              </div>
            );
          })}
        </div>

        <div className={styles.details}>
          <div className={styles.detailsHeader}>
            <div className={styles.detailsTitle}>{active.name}</div>
            {hasOverview && (
              <Link href={active.href} className={styles.viewAll} onClick={onNavigate}>
                Complete Overview
                <Icon name="arrow_forward" size={16} />
              </Link>
            )}
          </div>
          <div className={styles.featureGrid}>
            {active.features.map(([name, icon, desc, href]) => (
              <FeatureLink key={name} href={href} className={styles.featureItem} onClick={onNavigate}>
                <span className={styles.featureIcon}>
                  <Icon name={icon} size={20} color="var(--color-primary)" />
                </span>
                <span className={styles.featureText}>
                  <span className={styles.featureName}>{name}</span>
                  <span className={styles.featureDesc}>{desc}</span>
                </span>
              </FeatureLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

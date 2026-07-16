'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import { MEGA_MENU } from '../../../data/megaMenu';
import styles from './MegaMenu.module.css';

/**
 * Desktop mega menu: left column of categories, right column of that category's features.
 * Open/close is owned by Header (hover intent with debounce); this component only tracks
 * which category is active, mirroring the design's `activeCat` state.
 */
export default function MegaMenu({ onMouseEnter, onMouseLeave, onNavigate }) {
  const [activeCat, setActiveCat] = useState(0);
  const active = MEGA_MENU[activeCat];

  return (
    <div className={styles.wrap} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={styles.panel}>
        <div className={styles.categories}>
          <div className={styles.categoriesHeading}>ALL FEATURES</div>
          {MEGA_MENU.map((cat, i) => {
            const isActive = i === activeCat;
            return (
              <button
                key={cat.name}
                type="button"
                className={`${styles.categoryItem} ${isActive ? styles.categoryItemActive : ''}`}
                onMouseEnter={() => setActiveCat(i)}
                onFocus={() => setActiveCat(i)}
              >
                <Icon name={cat.icon} size={19} color={isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)'} />
                <span className={styles.categoryName}>{cat.name}</span>
                <span className={`${styles.categoryChevron} ${isActive ? styles.categoryChevronActive : ''}`}>
                  <Icon name="arrow_forward" size={16} color="var(--color-primary)" />
                </span>
              </button>
            );
          })}
        </div>

        <div className={styles.details}>
          <div className={styles.detailsHeader}>
            <div className={styles.detailsTitle}>{active.name}</div>
            <Link href={active.href} className={styles.viewAll} onClick={onNavigate}>
              View overview
              <Icon name="arrow_forward" size={16} />
            </Link>
          </div>
          <div className={styles.featureGrid}>
            {active.features.map(([name, icon, desc, href]) => (
              <Link key={name} href={href} className={styles.featureItem} onClick={onNavigate}>
                <span className={styles.featureIcon}>
                  <Icon name={icon} size={20} color="var(--color-primary)" />
                </span>
                <span className={styles.featureText}>
                  <span className={styles.featureName}>{name}</span>
                  <span className={styles.featureDesc}>{desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

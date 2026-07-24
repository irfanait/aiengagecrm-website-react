'use client';

import { Fragment, useEffect } from 'react';
import Icon from '../../atoms/Icon/Icon';
import styles from './NewPricingFeatureModal.module.css';

function Cell({ value }) {
  if (value === true) {
    return (
      <span className={styles.check}>
        <Icon name="check" size={15} weight={600} />
      </span>
    );
  }
  if (value === false) {
    return <span className={styles.dash}>—</span>;
  }
  return value;
}

/**
 * "See all features" comparison table: Business vs Business Pro, grouped by category. The last
 * category ("Extra Addons") is rendered with a light highlight — see `cat.highlight` in
 * data/newPricing.js — to set flat add-on pricing apart from the plan-limit rows above it.
 *
 * Rows use the same CSS grid template (columns, gap, padding) as .header below, rather than an
 * HTML table with independently-computed cell widths, so each row's value columns land exactly
 * under their header price box — a plain <table>'s percentage-width columns don't share a box
 * model with the header's grid and drift out of alignment.
 */
export default function NewPricingFeatureModal({ businessPrice, businessProPrice, categories, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
            <Icon name="close" size={19} />
          </button>
          <h2 className={styles.headerTitle}>Compare plans and features</h2>
          <div className={styles.headerPrice}>
            <span className={styles.headerPlanName}>Business</span>
            <span className={styles.headerPlanPrice}>{businessPrice}</span>
          </div>
          <div className={styles.headerPrice}>
            <span className={styles.headerPlanName}>Business Pro</span>
            <span className={styles.headerPlanPrice}>{businessProPrice}</span>
          </div>
        </div>

        <div className={styles.tableWrap}>
          {categories.map((cat) => (
            <Fragment key={cat.title}>
              <div className={`${styles.categoryRow} ${cat.highlight ? styles.categoryRowHighlight : ''}`}>
                <span className={styles.categoryLabel}>
                  <Icon name={cat.icon} size={16} color="#fff" />
                  {cat.title}
                </span>
              </div>
              {cat.rows.map((row) => (
                <div key={row.label} className={`${styles.row} ${cat.highlight ? styles.rowHighlight : ''}`}>
                  <div className={styles.labelCell}>
                    <span className={styles.rowLabel}>{row.label}</span>
                    {row.sub && <span className={styles.rowSub}>{row.sub}</span>}
                  </div>
                  <div className={styles.valueCell}>
                    <Cell value={row.business} />
                  </div>
                  <div className={styles.valueCell}>
                    <Cell value={row.businessPro} />
                  </div>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

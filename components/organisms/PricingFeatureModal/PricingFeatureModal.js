'use client';

import { Fragment, useEffect } from 'react';
import Icon from '../../atoms/Icon/Icon';
import styles from './PricingFeatureModal.module.css';

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

/** "See all features" comparison table: Growth vs Advance, grouped by capability category. */
export default function PricingFeatureModal({ growthPrice, advancePrice, categories, onClose }) {
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
            <span className={styles.headerPlanName}>Growth</span>
            <span className={styles.headerPlanPrice}>{growthPrice} / user/month</span>
          </div>
          <div className={styles.headerPrice}>
            <span className={styles.headerPlanName}>Advance</span>
            <span className={styles.headerPlanPrice}>{advancePrice} / user/month</span>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <tbody>
              {categories.map((cat) => (
                <Fragment key={cat.title}>
                  <tr>
                    <td colSpan={3} className={styles.categoryRow}>
                      <span className={styles.categoryLabel}>
                        <Icon name={cat.icon} size={16} color="#fff" />
                        {cat.title}
                      </span>
                    </td>
                  </tr>
                  {cat.rows.map((row) => (
                    <tr key={row.label}>
                      <td className={styles.labelCell}>
                        <span className={styles.rowLabel}>{row.label}</span>
                        {row.sub && <span className={styles.rowSub}>{row.sub}</span>}
                      </td>
                      <td className={styles.valueCell}>
                        <Cell value={row.growth} />
                      </td>
                      <td className={styles.valueCell}>
                        <Cell value={row.advance} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

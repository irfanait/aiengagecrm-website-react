'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
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
 * "See all features" comparison table: Solo vs Business vs Business Pro, grouped by category. The
 * last category ("Extra Addons") is rendered with a light highlight — see `cat.highlight` in
 * data/newPricing.js — to set flat add-on pricing apart from the plan-limit rows above it.
 *
 * Rows use the same CSS grid template (columns, gap, padding) as .header below, rather than an
 * HTML table with independently-computed cell widths, so each row's value columns land exactly
 * under their header price box — a plain <table>'s percentage-width columns don't share a box
 * model with the header's grid and drift out of alignment.
 *
 * .header and every .row/.categoryRow live inside one .scrollArea that scrolls on both axes: it
 * carries the vertical scroll (header pinned via position:sticky/top) at every width, and below
 * the 700px breakpoint the grid columns switch to a fixed min-width wider than the viewport so
 * .scrollArea also scrolls horizontally, with .labelCell/.headerTitle pinned via
 * position:sticky/left so the feature name stays put while the plan columns scroll under it.
 */
export default function NewPricingFeatureModal({
  soloPrice,
  soloPriceOriginal,
  businessPrice,
  businessPriceOriginal,
  businessProPrice,
  businessProPriceOriginal,
  categories,
  onClose,
}) {
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Right-edge fade (mobile only, see .scrollFade) hints that a partially-cut plan column is
  // scrollable rather than broken — it hides itself once scrolled to the end.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;

    const update = () => setCanScrollRight(el.scrollWidth - el.clientWidth - el.scrollLeft > 4);
    update();

    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
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
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          <Icon name="close" size={19} />
        </button>

        <div className={styles.scrollArea} ref={scrollRef}>
          <div className={styles.header}>
            <h2 className={styles.headerTitle}>Compare plans and features</h2>
            <div className={styles.headerPrice}>
              <span className={styles.headerPlanName}>Solo</span>
              <span className={styles.headerPlanPrice}>
                {soloPrice}
                {soloPriceOriginal && <span className={styles.headerPlanOriginal}>{soloPriceOriginal}</span>}
              </span>
            </div>
            <div className={styles.headerPrice}>
              <span className={styles.headerPlanName}>Business</span>
              <span className={styles.headerPlanPrice}>
                {businessPrice}
                {businessPriceOriginal && <span className={styles.headerPlanOriginal}>{businessPriceOriginal}</span>}
              </span>
            </div>
            <div className={styles.headerPrice}>
              <span className={styles.headerPlanName}>Business Pro</span>
              <span className={styles.headerPlanPrice}>
                {businessProPrice}
                {businessProPriceOriginal && <span className={styles.headerPlanOriginal}>{businessProPriceOriginal}</span>}
              </span>
            </div>
          </div>

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
                    <Cell value={row.solo} />
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

        {/* Fades the right edge on mobile so a partially cut-off plan column reads as "more to
            scroll" rather than as broken/cut-off content — see .scrollFade in the CSS module. */}
        {canScrollRight && <div className={styles.scrollFade} aria-hidden="true" />}
      </div>
    </div>
  );
}

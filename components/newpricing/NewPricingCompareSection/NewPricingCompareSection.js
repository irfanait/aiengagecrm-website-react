'use client';

import { Fragment, useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './NewPricingCompareSection.module.css';

function Cell({ value, addon }) {
  let content;
  if (value === true) {
    content = (
      <span className={styles.check}>
        <Icon name="check" size={15} weight={600} />
      </span>
    );
  } else if (value === false) {
    content = <span className={styles.dash}>—</span>;
  } else {
    content = value;
  }

  if (!addon) return content;

  return (
    <span className={styles.cellWithAddon}>
      {content}
      <span className={styles.addonTrigger} tabIndex={0}>
        <Icon name="help" size={13} />
        <span className={styles.addonTooltip} role="tooltip">
          {addon}
        </span>
      </span>
    </span>
  );
}

/**
 * On-page, collapsible version of NewPricingFeatureModal's "Compare plans and features" table —
 * same categories/rows data and the same row-rendering rules (checkmarks/dashes/addon tooltips),
 * just without the popup's overlay/search/close chrome. A separate component rather than a shared
 * import so NewPricingFeatureModal.js stays completely untouched and ready to use exactly as
 * before, in case "See all features" ever gets wired back to it.
 *
 * Rendered via a portal from NewPricingPlansSection (see that file) into a placeholder slot lower
 * down app/pricing/page.js, so it can sit just above NewPricingComparison while still sharing that
 * component's live cycle/region price state — the same numbers the popup would have shown.
 */
export default function NewPricingCompareSection({
  soloPrice,
  soloPriceOriginal,
  businessPrice,
  businessPriceOriginal,
  businessProPrice,
  businessProPriceOriginal,
  categories,
  open,
  onToggle,
}) {
  // Accordion state for the category groups below — first category starts open, the rest
  // collapsed; opening one closes whichever else was open (single-select), same convention as
  // DashboardShowcaseV2's mobile accordion.
  const [openCategory, setOpenCategory] = useState(0);

  const toggleCategory = (i) => {
    setOpenCategory((prev) => (prev === i ? -1 : i));
  };

  return (
    <section id="pricing-compare" className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div
            className={`${styles.toggleStrip} ${open ? styles.toggleStripOpen : ''}`}
            onClick={onToggle}
            role="button"
            tabIndex={0}
            aria-expanded={open}
          >
            <div className={styles.text}>
              <div className={styles.title}>Compare plans and features</div>
              <p className={styles.desc}>See every feature and limit across Solo, Business and Business Pro, side by side.</p>
            </div>
            <span className={styles.toggleBtn}>
              {open ? 'Hide comparison' : 'Show comparison'}
              <Icon name={open ? 'remove' : 'add'} size={19} />
            </span>
          </div>

          {open && (
            <div className={styles.scrollArea}>
              <div className={styles.header}>
                {/* Blank, not a repeat of the "Compare plans and features" title above — this cell
                    exists only to keep the label column aligned with the rows below it. */}
                <span className={styles.headerTitle} aria-hidden="true" />
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

              {categories.map((cat, i) => {
                const isOpen = openCategory === i;
                return (
                  <Fragment key={cat.title}>
                    <div
                      className={`${styles.categoryRow} ${cat.highlight ? styles.categoryRowHighlight : ''}`}
                      onClick={() => toggleCategory(i)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.categoryLabel}>
                        <span className={styles.categoryIcon}>
                          <Icon name={cat.icon} size={15} filled />
                        </span>
                        {cat.title}
                      </span>
                      <Icon
                        name={isOpen ? 'expand_less' : 'expand_more'}
                        size={19}
                        className={styles.categoryChevron}
                      />
                    </div>
                    {isOpen &&
                      cat.rows.map((row) => (
                        // `${label}-${sub}` rather than just label: a couple of rows in the source
                        // sheet (e.g. two "AI Follow ups" entries with different `sub` text) share a label.
                        <div key={`${row.label}-${row.sub}`} className={`${styles.row} ${cat.highlight ? styles.rowHighlight : ''}`}>
                          <div className={styles.labelCell}>
                            <span className={styles.rowLabel}>{row.label}</span>
                            {row.sub && <span className={styles.rowSub}>{row.sub}</span>}
                          </div>
                          <div className={styles.valueCell}>
                            <Cell value={row.solo} addon={row.addon} />
                          </div>
                          <div className={styles.valueCell}>
                            <Cell value={row.business} addon={row.addon} />
                          </div>
                          <div className={styles.valueCell}>
                            <Cell value={row.businessPro} addon={row.addon} />
                          </div>
                        </div>
                      ))}
                  </Fragment>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

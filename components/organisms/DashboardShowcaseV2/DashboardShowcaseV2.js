'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import { DASHBOARD_SIDEBAR } from '../../../data/homeV2Discovery';
import styles from './DashboardShowcaseV2.module.css';

export default function DashboardShowcaseV2() {
  const [active, setActive] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  const activeTab = DASHBOARD_SIDEBAR[active];

  return (
    <section id="product-tour" className={styles.section}>
      <Container>
        <div className={styles.head}>
          <h2 className={styles.title}>
            Everything Your Team Needs Across <span className="textAccent">Marketing, Sales &amp; Support</span>
          </h2>
          <p className={styles.desc}>All the tools. One CRM. Smarter engagement at every stage of the customer journey.</p>
        </div>

        {/* Desktop/tablet: side tabs + single preview image (hidden below 900px, see .shell) */}
        <div className={styles.shell}>
          <div className={styles.sidebar}>
            {DASHBOARD_SIDEBAR.map((item, i) => (
              <button
                key={item.label}
                type="button"
                className={`${styles.sidebarItem} ${i === active ? styles.sidebarItemActive : ''}`}
                onClick={() => setActive(i)}
              >
                <Icon name={item.icon} size={16} />
                <span className={styles.sidebarLabel}>{item.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.main}>
            <Image
              key={activeTab.image}
              src={activeTab.image}
              alt={`AiEngage CRM — ${activeTab.label}`}
              fill
              className={styles.mainImage}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
        </div>

        {/* Mobile: accordion instead of tabs — first item open by default (see .accordion) */}
        <div className={styles.accordion}>
          {DASHBOARD_SIDEBAR.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.label} className={styles.accordionItem}>
                <button
                  type="button"
                  className={`${styles.accordionHeader} ${isOpen ? styles.accordionHeaderActive : ''}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <Icon name={item.icon} size={16} color={isOpen ? 'var(--color-primary)' : undefined} />
                  <span className={styles.accordionLabel}>{item.label}</span>
                  <Icon name={isOpen ? 'expand_less' : 'expand_more'} size={19} className={styles.accordionChevron} />
                </button>
                {isOpen && (
                  <div className={styles.accordionPanel}>
                    <Image
                      src={item.image}
                      alt={`AiEngage CRM — ${item.label}`}
                      width={900}
                      height={640}
                      className={styles.accordionImage}
                      sizes="100vw"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

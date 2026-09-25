'use client';

import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import CheckItem from '../../molecules/CheckItem/CheckItem';
import { CTA_LINKS } from '../../../utils/constants';
import { TEAM_OVERVIEW_TABS } from '../../../data/homeV3TeamOverview';
import styles from './TeamOverviewV3.module.css';

/** Homepage v3's "Marketing, Sales & Support Working Together" section — a pill tab row that swaps
 * the entire left panel (title, tagline, description, checklist, CTA label) and the right-side
 * dashboard screenshot. Extracted from the "Home V6" mockup; own component/data, doesn't touch
 * DashboardShowcaseV2 (the v2 equivalent). */
export default function TeamOverviewV3() {
  const [active, setActive] = useState(TEAM_OVERVIEW_TABS[0].key);
  const activeTab = TEAM_OVERVIEW_TABS.find((t) => t.key === active) || TEAM_OVERVIEW_TABS[0];
  const isDashboard = activeTab.key === 'dashboard';

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>All Your Teams. One CRM</span>
          <h2 className={styles.title}>
            Marketing, Sales &amp; Support <span className="textAccent">Working Together</span>
          </h2>
          <p className={styles.desc}>Capture leads, manage conversations, close deals, deliver support and grow your revenue &mdash; all from one AI-powered CRM.</p>
        </div>

        <div className={styles.tabRow}>
          {TEAM_OVERVIEW_TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`${styles.tab} ${tab.key === active ? styles.tabActive : ''}`}
              onClick={() => setActive(tab.key)}
            >
              <Icon name={tab.icon} size={17} color={tab.key === active ? '#fff' : 'var(--color-text-muted)'} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.body}>
          <div className={styles.left}>
            {isDashboard ? (
              <h3 className={styles.subtitle}>
                Get a <span className="textAccent">360&deg; View</span><br />of Your Business
              </h3>
            ) : (
              <>
                <h3 className={styles.subtitle}>{activeTab.title}</h3>
                <p className={styles.tagline}>{activeTab.tagline}</p>
              </>
            )}
            <p className={styles.subdesc}>{activeTab.desc}</p>
            <div className={styles.checklist}>
              {activeTab.items.map((item) => (
                <CheckItem key={item} color="var(--color-primary)">
                  {item}
                </CheckItem>
              ))}
            </div>
            <Button href={CTA_LINKS.tryFree} variant="primary" size="lg" shadow>
              {activeTab.btnText}
            </Button>
          </div>

          <div className={styles.right}>
            {/* Plain <img>, not next/image — serves the source file's real bytes directly with no
                resize/re-encode. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={activeTab.image} alt={`AiEngage CRM ${activeTab.label} view`} className={styles.dashboardImage} />
          </div>
        </div>
      </Container>
    </section>
  );
}

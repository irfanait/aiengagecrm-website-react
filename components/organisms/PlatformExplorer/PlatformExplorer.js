'use client';

import { useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import { LinkButton } from '../../atoms/Button/Button';
import Container from '../../common/Container/Container';
import SectionHeading from '../../molecules/SectionHeading/SectionHeading';
import { PLATFORM_TABS } from '../../../data/homeContent';
import styles from './PlatformExplorer.module.css';

export default function PlatformExplorer() {
  const [active, setActive] = useState(0);
  const tab = PLATFORM_TABS[active];

  return (
    <section id="platform" className={styles.section}>
      <Container>
        <SectionHeading
          index="01"
          label="THE PLATFORM"
          title="Everything your sales team does, in one place."
          titleSize={42}
          titleMaxWidth={640}
        />

        <div className={styles.body}>
          <div className={styles.tabs}>
            {PLATFORM_TABS.map((t, i) => {
              const isActive = i === active;
              return (
                <button key={t.name} type="button" className={styles.tab} onClick={() => setActive(i)}>
                  <span className={`${styles.tabNum} ${isActive ? styles.tabNumActive : ''}`}>0{i + 1}</span>
                  <span className={`${styles.tabName} ${isActive ? styles.tabNameActive : ''}`}>{t.name}</span>
                  <span className={`${styles.tabChevron} ${isActive ? styles.tabChevronActive : ''}`}>
                    <Icon name="arrow_forward" size={19} color="var(--color-primary)" />
                  </span>
                </button>
              );
            })}
          </div>

          <div className={styles.detail}>
            <div className={styles.detailText}>
              <p className={styles.detailDesc}>{tab.desc}</p>
              <div className={styles.featureGrid}>
                {tab.features.map((f) => (
                  <span key={f} className={styles.featureItem}>
                    <Icon name="check" size={17} color="var(--color-primary)" />
                    {f}
                  </span>
                ))}
              </div>
              <LinkButton href="#">{tab.link}</LinkButton>
            </div>

            <div className={styles.visual}>
              <div className={styles.visualHead}>
                <Icon name={tab.icon} size={17} color="var(--color-primary)" />
                <span className={styles.visualTitle}>{tab.visTitle}</span>
              </div>
              <div className={styles.visualRows}>
                {tab.rows.map((row) => (
                  <div key={row.text} className={styles.visualRow}>
                    <Icon name={row.icon} size={15} color={row.color} />
                    <span className={styles.visualRowText}>{row.text}</span>
                    <span className={styles.visualRowStatus} style={{ color: row.color }}>
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

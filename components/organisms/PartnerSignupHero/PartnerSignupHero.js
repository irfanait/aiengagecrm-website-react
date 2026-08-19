'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import EmbedForm from '../EmbedForm/EmbedForm';
import styles from './PartnerSignupHero.module.css';

/** Signup page hero: pitch + interactive "where you'll start" level selector on the left,
 * the embedded partner registration form on the right. */
export default function PartnerSignupHero({ hero, bands, initialTier }) {
  const tierKeys = Object.keys(bands);
  const [tier, setTier] = useState(tierKeys.includes(initialTier) ? initialTier : tierKeys[0]);
  const stage = bands[tier];

  return (
    <section id="signup-hero" className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.leftCol}>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.desc}>{hero.description}</p>
          <p className={styles.highlight}>{hero.highlight}</p>

          <div className={styles.selector}>
            <div className={styles.selectorLabel}>{hero.selectorLabel}</div>
            <div className={styles.selectorQuestion}>{hero.selectorQuestion}</div>

            <div className={styles.tabs}>
              {tierKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTier(key)}
                  className={key === tier ? styles.tabActive : styles.tab}
                >
                  {bands[key].label}
                </button>
              ))}
            </div>

            <div className={styles.stageCard}>
              <div>
                <div className={styles.stageLevel}>{stage.level}</div>
                <div className={styles.stageName}>{stage.name}</div>
                <div className={styles.stageRange}>{stage.range}</div>
              </div>
              <div className={styles.stagePctCol}>
                <div className={styles.stagePct}>{stage.pct}</div>
                <div className={styles.stagePctLabel}>Recurring commission</div>
              </div>
            </div>
            <Link href={hero.exploreLevelsHref} className={styles.exploreLink}>
              {hero.exploreLevelsLabel} →
            </Link>
          </div>

          <div className={styles.checks}>
            {hero.checks.map((c) => (
              <span key={c} className={styles.check}>
                <Icon name="check_circle" size={17} color="var(--color-primary)" />
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.formCol}>
          <EmbedForm slug="partner-registration" title="Sign up as Partner" height={600} />
          <p className={styles.termsNote}>
            {hero.termsNoteLead}
            <Link href="/privacy-policy" className={styles.termsLink}>
              Privacy Policy
            </Link>
            {hero.termsNoteSuffix}
          </p>
        </div>
      </Container>
    </section>
  );
}

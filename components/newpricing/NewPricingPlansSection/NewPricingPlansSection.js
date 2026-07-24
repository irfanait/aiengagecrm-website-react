'use client';

import { useEffect, useRef, useState } from 'react';
import NewPricingToggles from '../NewPricingToggles/NewPricingToggles';
import NewPricingCard from '../NewPricingCard/NewPricingCard';
import NewPricingFeatureModal from '../NewPricingFeatureModal/NewPricingFeatureModal';
import Container from '../../common/Container/Container';
import { NP_BILLING_LINES, NP_REGION_NOTE, buildNewSignupHref } from '../../../data/newPricing';
import styles from './NewPricingPlansSection.module.css';

/**
 * Hero + billing/region toggles + the 3 plan cards, all in one client component since the
 * cards' prices and the "See all features" modal both depend on the same cycle/region state.
 * The rest of this page (start-free strip, comparison, tiles, addons, FAQ, final CTA) is static
 * and lives in separate server components. Mirrors PricingPlansSection's structure exactly, but
 * reads from data/newPricing.js and renders through the components/newpricing/* tree so it never
 * touches the live /pricing page.
 *
 * `initialRegion` ('india' | 'international' | null) comes from app/pricing-new/page.js, which
 * reads the same country cookie the live page uses. When absent (e.g. local dev), this component
 * falls back to a one-off client-side IP lookup so the toggle still defaults correctly.
 */
export default function NewPricingPlansSection({ hero, prices, plans, featureTable, initialRegion }) {
  const [cycle, setCycle] = useState('monthly');
  const [region, setRegion] = useState(initialRegion || 'india');
  const [modalOpen, setModalOpen] = useState(false);
  const regionTouchedRef = useRef(Boolean(initialRegion));

  const handleRegionChange = (next) => {
    regionTouchedRef.current = true;
    setRegion(next);
  };

  useEffect(() => {
    if (initialRegion) return undefined;

    const controller = new AbortController();
    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const code = data?.country_code;
        if (!code || regionTouchedRef.current) return;
        setRegion(code === 'IN' ? 'india' : 'international');
      })
      .catch(() => {});

    return () => controller.abort();
  }, [initialRegion]);

  const regionPrices = prices[region][cycle];
  const cycleSuffix = cycle === 'annual' ? '/year' : '/month';

  return (
    <section id="pricing-plans" className={styles.section}>
      <Container>
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            {hero.titleLead}
            <span className="textAccent">{hero.titleAccent}</span>
          </h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <p className={styles.subtext}>{hero.subtext}</p>
        </div>

        <NewPricingToggles cycle={cycle} region={region} onCycleChange={setCycle} onRegionChange={handleRegionChange} regionNote={NP_REGION_NOTE} />

        <div className={styles.grid}>
          {plans.map((plan) => {
            const isDynamic = Boolean(plan.priceKey);
            const isSignup = Boolean(plan.signupProductId);
            return (
              <NewPricingCard
                key={plan.key}
                name={plan.name}
                price={isDynamic ? regionPrices[plan.priceKey] : plan.staticPrice}
                priceSuffix={isDynamic ? { top: cycleSuffix } : null}
                subLabel={isDynamic ? NP_BILLING_LINES[cycle] : plan.staticSubLabel}
                tagline={plan.tagline}
                ctaLabel={plan.ctaLabel}
                ctaHref={isSignup ? buildNewSignupHref(plan.signupProductId, cycle) : plan.ctaHref}
                ctaExternal={isSignup}
                trialNote={plan.trialNote}
                featuresHeading={plan.featuresHeading}
                features={plan.features}
                onSeeAll={() => setModalOpen(true)}
              />
            );
          })}
        </div>
      </Container>

      {modalOpen && (
        <NewPricingFeatureModal
          businessPrice={regionPrices.business}
          businessProPrice={regionPrices.businessPro}
          categories={featureTable}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}

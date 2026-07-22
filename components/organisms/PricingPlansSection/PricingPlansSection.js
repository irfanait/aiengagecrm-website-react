'use client';

import { useEffect, useRef, useState } from 'react';
import PricingToggles from '../../molecules/PricingToggles/PricingToggles';
import PricingCard from '../../molecules/PricingCard/PricingCard';
import PricingFeatureModal from '../PricingFeatureModal/PricingFeatureModal';
import Container from '../../common/Container/Container';
import { PR_BILLING_LINES, PR_REGION_NOTE, buildSignupHref } from '../../../data/pricing';
import styles from './PricingPlansSection.module.css';

/**
 * Hero + billing/region toggles + the 3 plan cards, all in one client component since the
 * cards' prices and the "See all features" modal both depend on the same cycle/region state.
 * The rest of the pricing page (start-free strip, comparison, tiles, FAQ, final CTA) is static
 * and lives in separate server components.
 *
 * `initialRegion` ('india' | 'international' | null) comes from app/pricing/page.js, which reads
 * a country cookie set by proxy.js from the host's IP-geolocation header. When the host doesn't
 * supply one (e.g. local dev, or a host without geo headers), it's null and this component falls
 * back to a one-off client-side IP lookup so the toggle still defaults correctly.
 */
export default function PricingPlansSection({ hero, prices, plans, featureTable, initialRegion }) {
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

        <PricingToggles cycle={cycle} region={region} onCycleChange={setCycle} onRegionChange={handleRegionChange} regionNote={PR_REGION_NOTE} />

        <div className={styles.grid}>
          {plans.map((plan) => {
            const isDynamic = Boolean(plan.priceKey);
            const isSignup = Boolean(plan.signupProductId);
            return (
              <PricingCard
                key={plan.key}
                name={plan.name}
                price={isDynamic ? regionPrices[plan.priceKey] : plan.staticPrice}
                priceSuffix={isDynamic ? { top: '/ user', bottom: '/month' } : null}
                subLabel={isDynamic ? PR_BILLING_LINES[cycle] : plan.staticSubLabel}
                tagline={plan.tagline}
                ctaLabel={plan.ctaLabel}
                ctaHref={isSignup ? buildSignupHref(plan.signupProductId, cycle) : plan.ctaHref}
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
        <PricingFeatureModal
          growthPrice={regionPrices.growth}
          advancePrice={regionPrices.advance}
          categories={featureTable}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
}

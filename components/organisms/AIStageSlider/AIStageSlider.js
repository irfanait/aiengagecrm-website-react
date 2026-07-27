'use client';

import { useEffect, useRef, useState } from 'react';
import { Carousel } from 'antd';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import SectionHeading from '../../molecules/SectionHeading/SectionHeading';
import AboutFeatureCard from '../../molecules/AboutFeatureCard/AboutFeatureCard';
import {
  AICapabilitiesMock,
  WhatsAppAgentMock,
  VoiceCallingMock,
  MobileCRMMock,
  SalesPipelineMock,
  LeadManagementMock,
  CustomizationMock,
  MultichannelMock,
  AutomationFlowMock,
} from '../AboutMocks/AboutMocks';
import { AB_FEATURES_HEADING, AB_FEATURES } from '../../../data/about';
import styles from './AIStageSlider.module.css';

const MOCKS = {
  AICapabilitiesMock,
  WhatsAppAgentMock,
  VoiceCallingMock,
  MobileCRMMock,
  SalesPipelineMock,
  LeadManagementMock,
  CustomizationMock,
  MultichannelMock,
  AutomationFlowMock,
};

function slidesForWidth(width) {
  if (width <= 700) return 1;
  if (width <= 1120) return 2;
  return 3;
}

/** Homepage carousel version of the About page's AboutFeaturesGrid — same content/cards, same
 * data source (data/about.js), shown 3-up with prev/next arrows instead of a static grid.
 *
 * slidesToShow is tracked in state (rather than passed via the Carousel's `responsive` prop)
 * because react-slick's responsive breakpoints only react to matchMedia *change* events — a
 * page loaded directly at a narrow width renders the desktop slide count until the viewport is
 * resized. Reading window.innerWidth on mount avoids that. */
export default function AIStageSlider() {
  const carouselRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const update = () => setSlidesToShow(slidesForWidth(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <SectionHeading
            index="02"
            label="AI AT EVERY STAGE"
            title={AB_FEATURES_HEADING}
            titleSize={38}
            titleMaxWidth={640}
            className={styles.heading}
          />
          <div className={styles.arrows}>
            <button type="button" className={styles.arrowBtn} aria-label="Previous" onClick={() => carouselRef.current?.prev()}>
              <Icon name="chevron_left" size={20} />
            </button>
            <button type="button" className={styles.arrowBtn} aria-label="Next" onClick={() => carouselRef.current?.next()}>
              <Icon name="chevron_right" size={20} />
            </button>
          </div>
        </div>

        <Carousel
          ref={carouselRef}
          dots={false}
          arrows={false}
          infinite
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          className={styles.carousel}
        >
          {AB_FEATURES.map((item) => {
            const Mock = MOCKS[item.mockKey];
            return (
              <div key={item.title} className={styles.slide}>
                <AboutFeatureCard
                  href={item.href}
                  icon={item.icon}
                  iconBg={item.iconBg}
                  iconColor={item.iconColor}
                  title={item.title}
                  description={item.description}
                  capabilities={item.capabilities}
                >
                  <Mock />
                </AboutFeatureCard>
              </div>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}

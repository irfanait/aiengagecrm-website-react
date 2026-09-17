'use client';

import { useEffect, useRef, useState } from 'react';
import { Carousel } from 'antd';
import Icon from '../../atoms/Icon/Icon';
import { LinkButton } from '../../atoms/Button/Button';
import Container from '../../common/Container/Container';
import { AI_JOURNEY_CARDS } from '../../../data/homeV2Discovery';
import styles from './AIJourneyCarouselV2.module.css';

function slidesForWidth(width) {
  if (width <= 700) return 1;
  if (width <= 1120) return 2;
  return 3;
}

export default function AIJourneyCarouselV2() {
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
        <h2 className={styles.title}>
          AI That Works Across Your <span className="textAccent">Entire Customer Journey</span>
        </h2>

        <div className={styles.stage}>
          <button type="button" className={`${styles.arrowBtn} ${styles.arrowLeft}`} aria-label="Previous" onClick={() => carouselRef.current?.prev()}>
            <Icon name="chevron_left" size={20} color="var(--color-text-faint)" />
          </button>
          <button type="button" className={`${styles.arrowBtn} ${styles.arrowRight}`} aria-label="Next" onClick={() => carouselRef.current?.next()}>
            <Icon name="chevron_right" size={20} color="var(--color-text-faint)" />
          </button>

          <Carousel ref={carouselRef} dots={false} arrows={false} infinite slidesToShow={slidesToShow} slidesToScroll={1} className={styles.carousel}>
            {AI_JOURNEY_CARDS.map((card) => (
              <div key={card.title} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.cardImageWrap}>
                    {/* Plain <img>, not next/image — serves the source file's real bytes directly
                        with no resize/re-encode. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={card.image} alt={card.title} className={styles.cardImage} loading="lazy" />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                  <LinkButton href={card.href} className={styles.cardLink}>
                    {card.linkLabel}
                  </LinkButton>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
}

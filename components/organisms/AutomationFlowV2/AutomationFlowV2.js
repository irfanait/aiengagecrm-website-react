'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import { LinkButton } from '../../atoms/Button/Button';
import styles from './AutomationFlowV2.module.css';

export default function AutomationFlowV2() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return undefined;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setVideoOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [videoOpen]);

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.heading}>
          From Meta Ad to Booked Meeting Without <span className={styles.accent}>Zero Human Touch</span>
        </h2>

        <div className={styles.frame}>
          <button type="button" className={styles.imageWrap} onClick={() => setVideoOpen(true)} aria-label="Play video: Meta Lead Ads integration">
            <Image
              src="/homev2/automation-flow.png"
              alt="From Meta Ad to Booked Meeting, Zero Human Touch — Meta Ad, WhatsApp, AI Calling, AI Qualified, Meeting Booked"
              width={1920}
              height={1080}
              className={styles.image}
              sizes="(max-width: 1360px) 100vw, 1280px"
            />
            <span className={styles.playButton}>
              <Icon name="play_arrow" size={42} color="var(--color-primary)" />
            </span>
          </button>
        </div>

        <div className={styles.footer}>
          <LinkButton href="/automation" className={styles.footerLink}>
            See automation in action
          </LinkButton>
        </div>
      </Container>

      {videoOpen && (
        <div className={styles.overlay} onClick={() => setVideoOpen(false)}>
          <div className={styles.videoPanel} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.close} onClick={() => setVideoOpen(false)} aria-label="Close">
              <Icon name="close" size={20} color="#fff" />
            </button>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption -- video already has burned-in subtitles */}
            <video src="/homev2/video/meta-lead-ads-integration.mp4" controls autoPlay className={styles.video} />
          </div>
        </div>
      )}
    </section>
  );
}

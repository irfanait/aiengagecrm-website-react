'use client';

import { Carousel } from 'antd';
import Image from 'next/image';
import Container from '../../common/Container/Container';
import SectionHeading from '../../molecules/SectionHeading/SectionHeading';
import { TESTIMONIALS, TESTIMONIAL_STATS } from '../../../data/homeContent';
import styles from './Testimonial.module.css';

function QuoteIcon() {
  return (
    <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.quoteIcon}>
      <g clipPath="url(#testiQuoteClip)">
        <path d="M11.0768 14.3077H6.76909C6.25623 14.3077 5.82023 14.1339 5.46122 13.7861C5.10241 13.4383 4.92277 13.016 4.92277 12.5191V11.9232C4.92277 10.6066 5.40363 9.4827 6.36528 8.5511C7.32687 7.61982 8.48723 7.15399 9.84615 7.15399H11.0768C11.4101 7.15399 11.6985 7.03595 11.9422 6.80006C12.1857 6.56404 12.3075 6.2847 12.3075 5.96177V3.57694C12.3075 3.25407 12.1857 2.97447 11.9422 2.73845C11.6985 2.50276 11.4102 2.38452 11.0768 2.38452H9.84615C8.51269 2.38452 7.24052 2.63626 6.02884 3.13903C4.81729 3.64212 3.76935 4.32218 2.88462 5.17927C1.99996 6.03596 1.29817 7.05122 0.778914 8.22504C0.25966 9.39872 0 10.6315 0 11.9231V25.0382C0 26.0323 0.35881 26.8764 1.07677 27.5722C1.79479 28.2676 2.66679 28.6153 3.69236 28.6153H11.0773C12.1028 28.6153 12.9745 28.2676 13.6926 27.5722C14.4104 26.8764 14.7695 26.0323 14.7695 25.0382V17.8847C14.7695 16.8908 14.4104 16.0467 13.6922 15.3508C12.9744 14.6555 12.1023 14.3077 11.0768 14.3077Z" fill="#FF5F38" />
        <path d="M30.9239 15.3508C30.2062 14.6555 29.3344 14.3077 28.3086 14.3077H24.0009C23.4884 14.3077 23.0519 14.1339 22.6935 13.7861C22.3344 13.4383 22.1551 13.016 22.1551 12.5191V11.9232C22.1551 10.6066 22.636 9.4827 23.5971 8.5511C24.5584 7.61982 25.7187 7.15399 27.0783 7.15399H28.3087C28.642 7.15399 28.9306 7.03595 29.1741 6.80006C29.4174 6.56404 29.5397 6.2847 29.5397 5.96177V3.57694C29.5397 3.25407 29.4175 2.97447 29.1741 2.73845C28.9306 2.50276 28.6421 2.38452 28.3087 2.38452H27.0783C25.7441 2.38452 24.4722 2.63626 23.2601 3.13903C22.0488 3.64212 21.0012 4.32218 20.1165 5.17927C19.2317 6.03596 18.5296 7.05122 18.0106 8.22504C17.4914 9.39872 17.2314 10.6315 17.2314 11.9231V25.0382C17.2314 26.0323 17.5906 26.8764 18.3083 27.5722C19.0262 28.2676 19.898 28.6153 20.9237 28.6153H28.3082C29.334 28.6153 30.2057 28.2676 30.9235 27.5722C31.6418 26.8764 32.0002 26.0323 32.0002 25.0382V17.8847C32.0002 16.8907 31.6418 16.0467 30.9239 15.3508Z" fill="#FF5F38" />
      </g>
      <defs>
        <clipPath id="testiQuoteClip">
          <rect width="32" height="31" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <Container className={styles.body}>
        <div className={styles.side}>
          <SectionHeading index="06" label="CUSTOMERS" title="" className={styles.tagOnly} />
        </div>

        <div className={styles.content}>
          <Carousel autoplay autoplaySpeed={5000} dots className={styles.carousel}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name}>
                <div className={styles.slide}>
                  <QuoteIcon />
                  <p className={styles.quote}>&quot;{t.quote}&quot;</p>
                  <div className={styles.divider} />
                  <div className={styles.footer}>
                    <span className={styles.avatar}>
                      <Image src={t.avatar} alt={t.name} width={46} height={46} className={styles.avatarImg} />
                    </span>
                    <span>
                      <span className={styles.name}>{t.name}</span>
                      <span className={styles.role}>{t.role}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>

          <div className={styles.stats}>
            {TESTIMONIAL_STATS.map((s, i) => (
              <span key={s.label} className={styles.statItem}>
                {i > 0 && <span className={styles.statDivider} />}
                <span>
                  <b className={styles.statValue}>{s.value}</b> {s.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

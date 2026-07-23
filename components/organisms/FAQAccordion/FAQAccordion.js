'use client';

import { useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './FAQAccordion.module.css';

/** Simple accordion; only the first question starts expanded (unlike PricingFAQ, where every
 * question starts open). */
export default function FAQAccordion({ heading, faqs }) {
  const [openIndex, setOpenIndex] = useState(faqs.map((_, i) => i === 0));

  const toggle = (i) => {
    setOpenIndex((prev) => {
      const next = prev.slice();
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <section id="faq" className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.heading}>{heading}</h2>
          <div className={styles.list}>
            {faqs.map((f, i) => (
              <div key={f.q} className={styles.item}>
                <div className={styles.question} onClick={() => toggle(i)} role="button" tabIndex={0}>
                  <div className={styles.questionText}>{f.q}</div>
                  <span className={styles.toggleIcon}>
                    <Icon name={openIndex[i] ? 'expand_less' : 'expand_more'} size={19} color="var(--color-primary)" />
                  </span>
                </div>
                {openIndex[i] && <p className={styles.answer}>{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

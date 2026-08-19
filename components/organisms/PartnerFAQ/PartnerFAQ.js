'use client';

import { useState } from 'react';
import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './PartnerFAQ.module.css';

/** Partner Program FAQ accordion. */
export default function PartnerFAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="signup-faq" className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.heading}>Partner Program FAQs</h2>

        <div className={styles.list}>
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className={styles.item}>
                <button type="button" className={styles.question} onClick={() => setOpenIndex(open ? -1 : i)}>
                  <span>{item.q}</span>
                  <Icon
                    name="expand_more"
                    size={24}
                    color="var(--color-primary)"
                    className={styles.chevron}
                    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                {open && <p className={styles.answer}>{item.a}</p>}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

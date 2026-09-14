import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import SectionHeading from '../../molecules/SectionHeading/SectionHeading';
import { INDUSTRIES } from '../../../data/homeContent';
import styles from './Industries.module.css';

export default function Industries({
  title = 'Built for the way your industry sells.',
  desc = 'Custom pipelines, fields and automations shape AiEngage around your business — not the other way round.',
  showEyebrow = true,
  white = false,
}) {
  return (
    <section id="industries" className={`${styles.section} ${white ? styles.sectionWhite : ''}`}>
      <Container className={styles.body}>
        <div className={styles.intro}>
          {showEyebrow && <SectionHeading index="06" label="INDUSTRIES" title="" className={styles.tagOnly} />}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{desc}</p>
        </div>

        <div className={styles.pills}>
          {INDUSTRIES.map((ind) => {
            const Tag = ind.href ? Link : 'span';
            return (
              <Tag key={ind.label} href={ind.href} className={styles.pill}>
                <Icon name={ind.icon} size={18} color="var(--color-primary)" />
                {ind.label}
              </Tag>
            );
          })}
          <span className={styles.pillMore}>+ many more</span>
        </div>
      </Container>
    </section>
  );
}

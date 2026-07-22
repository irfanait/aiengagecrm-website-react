import Link from 'next/link';
import Image from 'next/image';
import Container from '../../common/Container/Container';
import WhatsNewSidebar from '../WhatsNewSidebar/WhatsNewSidebar';
import Icon from '../../atoms/Icon/Icon';
import { formatWhatsNewDate, getWhatsNewYears, WN_DETAIL_CTA } from '../../../data/whatsNew';
import styles from './WhatsNewDetail.module.css';

function Segment({ seg }) {
  if (seg.href) {
    return seg.external ? (
      <a href={seg.href} target="_blank" rel="noopener noreferrer">
        {seg.text}
      </a>
    ) : (
      <Link href={seg.href}>{seg.text}</Link>
    );
  }
  return seg.bold ? <b>{seg.text}</b> : seg.text;
}

function Block({ block, index }) {
  if (block.type === 'heading') {
    return <h5 key={index}>{block.text}</h5>;
  }
  if (block.type === 'list') {
    return (
      <ul key={index}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p key={index}>
      {block.segments.map((seg, i) => (
        <Segment key={i} seg={seg} />
      ))}
    </p>
  );
}

/** Single "What's New" article: image, tags/date, title, body blocks, and the try/sign-up CTA row. */
export default function WhatsNewDetail({ entry }) {
  return (
    <section className={styles.section}>
      <Container className={styles.body}>
        <WhatsNewSidebar typeFilter={null} activeModule={null} activeYear={null} years={getWhatsNewYears()} />

        <article className={styles.article}>
          <Link href="/whats-new" className={styles.backLink}>
            <Icon name="arrow_back" size={16} />
            All Updates
          </Link>

          <div className={styles.imageWrap}>
            <Image src={entry.image} alt={entry.title} fill sizes="(max-width: 900px) 100vw, 700px" className={styles.image} priority />
          </div>

          <div className={styles.tagDateRow}>
            <div className={styles.tags}>
              {entry.moduleTags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
              <span className={styles.tag}>{entry.typeTag === 'enhancement' ? 'Enhancement' : 'New Feature Update'}</span>
            </div>
            <span className={styles.date}>{formatWhatsNewDate(entry.date)}</span>
          </div>

          <h1 className={styles.title}>{entry.title}</h1>

          <div className={styles.prose}>
            {entry.body.map((block, i) => (
              <Block key={i} block={block} index={i} />
            ))}
          </div>

          <div className={styles.ctaRow}>
            <a href={WN_DETAIL_CTA.tryHref} target="_blank" rel="noopener noreferrer" className={styles.tryBtn}>
              {WN_DETAIL_CTA.tryLabel}
            </a>
            <p className={styles.signupNote}>
              {WN_DETAIL_CTA.signupLead}
              <Link href={WN_DETAIL_CTA.signupHref}>{WN_DETAIL_CTA.signupLabel}</Link>
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}

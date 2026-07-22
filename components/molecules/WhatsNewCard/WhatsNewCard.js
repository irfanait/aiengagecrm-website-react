import Link from 'next/link';
import Image from 'next/image';
import { formatWhatsNewDate } from '../../../data/whatsNew';
import styles from './WhatsNewCard.module.css';

/** One update card in the listing grid: image, module + type tags, date, title, teaser. */
export default function WhatsNewCard({ entry }) {
  return (
    <Link href={`/whats-new/${entry.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={entry.image} alt={entry.title} fill sizes="(max-width: 900px) 100vw, 700px" className={styles.image} />
      </div>
      <div className={styles.content}>
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
        <h3 className={styles.title}>{entry.title}</h3>
        <p className={styles.teaser}>{entry.teaser}</p>
      </div>
    </Link>
  );
}

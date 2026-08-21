import Link from 'next/link';
import { buildBlogSearchUrl } from '../../../data/blog';
import styles from './BlogTagList.module.css';

/** "Tagged:" pill row — links every tag back into /blog/search filtered by that tag. */
export default function BlogTagList({ tags }) {
  if (!tags?.length) return null;

  return (
    <div className={styles.row}>
      <span className={styles.label}>Tagged:</span>
      {tags.map((tag) => (
        <Link key={tag} href={buildBlogSearchUrl({ tag })} className={styles.tag}>
          {tag}
        </Link>
      ))}
    </div>
  );
}

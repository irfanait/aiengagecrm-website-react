import Link from 'next/link';
import { buildBlogUrl } from '../../../data/blog';
import styles from './BlogCategoryChips.module.css';

/** "All" + category pill filter row for the blog list, driven by the API's own category tree. */
export default function BlogCategoryChips({ categories, activeCategory }) {
  return (
    <div className={styles.row}>
      <Link href={buildBlogUrl({})} className={!activeCategory ? styles.chipActive : styles.chip}>
        All
      </Link>
      {categories.map((c) => (
        <Link
          key={c.slug}
          href={buildBlogUrl({ category: c.slug })}
          className={activeCategory === c.slug ? styles.chipActive : styles.chip}
        >
          {c.emoji ? `${c.emoji} ` : ''}
          {c.name}
        </Link>
      ))}
    </div>
  );
}

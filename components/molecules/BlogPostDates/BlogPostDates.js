import { formatBlogDate } from '../../../utils/blogFormat';
import styles from './BlogPostDates.module.css';

/** Closing "Published · Last updated" line — also closes out `<article>` in the page. */
export default function BlogPostDates({ publishedAt, updatedAt }) {
  return (
    <div className={styles.row}>
      Published <time dateTime={publishedAt}>{formatBlogDate(publishedAt)}</time>
      {updatedAt && updatedAt !== publishedAt && (
        <>
          {' '}
          · Last updated <time dateTime={updatedAt}>{formatBlogDate(updatedAt)}</time>
        </>
      )}
    </div>
  );
}

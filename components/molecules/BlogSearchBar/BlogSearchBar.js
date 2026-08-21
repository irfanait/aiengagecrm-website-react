import Icon from '../../atoms/Icon/Icon';
import styles from './BlogSearchBar.module.css';

/** Pill search box. Plain GET form to /blog/search — no client JS needed, works with JS off too. */
export default function BlogSearchBar({ defaultValue = '', compact = false }) {
  return (
    <form action="/blog/search" method="GET" className={`${styles.form} ${compact ? styles.compact : ''}`}>
      <Icon name="search" size={compact ? 18 : 22} color="var(--color-text-faint)" />
      <input
        type="text"
        name="q"
        defaultValue={defaultValue}
        placeholder="Search articles…"
        className={styles.input}
        aria-label="Search articles"
      />
      {compact ? (
        <button type="submit" className={styles.iconSubmit} aria-label="Search">
          <Icon name="arrow_forward" size={18} color="#fff" />
        </button>
      ) : (
        <button type="submit" className={styles.submit}>
          Search
        </button>
      )}
    </form>
  );
}

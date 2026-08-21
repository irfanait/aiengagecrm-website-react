import Link from 'next/link';
import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import { buildBlogUrl, buildBlogSearchUrl } from '../../../data/blog';
import styles from './BlogEmptyState.module.css';

/** "No results" state for /blog/search, offering categories and popular tags as a way back in. */
export default function BlogEmptyState({ query, categories, tags }) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <Icon name="search_off" size={60} color="var(--color-border-dashed)" />
        <h2 className={styles.title}>No results for &quot;{query}&quot;</h2>
        <p className={styles.desc}>Try a different term or browse a category.</p>

        {categories.length > 0 && (
          <div className={styles.chipRow}>
            {categories.map((c) => (
              <Link key={c.slug} href={buildBlogUrl({ category: c.slug })} className={styles.chip}>
                {c.emoji ? `${c.emoji} ` : ''}
                {c.name}
              </Link>
            ))}
          </div>
        )}

        {tags.length > 0 && (
          <>
            <div className={styles.label}>Popular searches</div>
            <div className={styles.chipRow}>
              {tags.slice(0, 3).map((tag) => (
                <Link key={tag} href={buildBlogSearchUrl({ tag })} className={styles.searchChip}>
                  <Icon name="search" size={14} />
                  {tag}
                </Link>
              ))}
            </div>
          </>
        )}

        <Link href="/blog" className={styles.backLink}>
          <Icon name="arrow_back" size={16} />
          Back to all articles
        </Link>
      </Container>
    </section>
  );
}

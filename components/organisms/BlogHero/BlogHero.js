import Container from '../../common/Container/Container';
import BlogSearchBar from '../../molecules/BlogSearchBar/BlogSearchBar';
import { BLOG_HERO } from '../../../data/blog';
import styles from './BlogHero.module.css';

/** Shared centered hero (title + subtext + search box) for /blog and /blog/search. */
export default function BlogHero({ searchValue }) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <h1 className={styles.title}>{BLOG_HERO.title}</h1>
        <p className={styles.desc}>{BLOG_HERO.description}</p>
        <BlogSearchBar defaultValue={searchValue} />
      </Container>
    </section>
  );
}

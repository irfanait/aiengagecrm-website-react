'use client';

import { useEffect, useState } from 'react';
import styles from './BlogReadingProgress.module.css';

/** Fixed 3px bar at the top of the viewport that fills as the reader scrolls through `<article>`. */
export default function BlogReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const article = document.querySelector('article[data-blog-post]');
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const pct = total > 0 ? (-rect.top / total) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, pct)));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.track} aria-hidden="true">
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
}

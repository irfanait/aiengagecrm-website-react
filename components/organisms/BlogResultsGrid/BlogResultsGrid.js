'use client';

import { useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import BlogCard from '../../molecules/BlogCard/BlogCard';
import styles from './BlogResultsGrid.module.css';

/**
 * Toolbar (filters + show/hide-sidebar toggle) + post grid + sidebar, matching the design's
 * "sidebarOpen" behavior: the grid switches between 2 and 3 columns as the sidebar toggles.
 * All actual post/sidebar data is fetched server-side and passed in as props/children.
 */
export default function BlogResultsGrid({ toolbarLeft, aboveGrid, posts, pagination, sidebar, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <>
      <div className={styles.toolbar}>
        <div className={styles.toolbarInner}>
          <div className={styles.toolbarLeft}>{toolbarLeft}</div>
          <button type="button" className={styles.toggle} onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? 'right_panel_close' : 'right_panel_open'} size={18} />
            {open ? 'Hide sidebar' : 'Show sidebar'}
          </button>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.main}>
          {aboveGrid}
          <div className={styles.grid} style={{ gridTemplateColumns: open ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)' }}>
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          {pagination}
        </div>

        {open && <div className={styles.side}>{sidebar}</div>}
      </div>
    </>
  );
}

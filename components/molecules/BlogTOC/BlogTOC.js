'use client';

import { useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import styles from './BlogTOC.module.css';

/** Collapsible "Table of contents" — jump links to the heading `id` anchors in `data.content`.
 * Top-level (h2) entries get a running number; nested (h3+) entries indent under their parent
 * without their own number, matching how the headings actually nest in the article. */
export default function BlogTOC({ items }) {
  const [open, setOpen] = useState(true);

  if (!items?.length) return null;

  const rows = items.reduce(
    (acc, item) => {
      const isTopLevel = item.level <= 2;
      const count = isTopLevel ? acc.count + 1 : acc.count;
      acc.rows.push({ ...item, isTopLevel, number: isTopLevel ? count : null });
      acc.count = count;
      return acc;
    },
    { rows: [], count: 0 }
  ).rows;

  return (
    <div className={styles.card}>
      <button type="button" className={styles.header} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className={styles.headerLeft}>
          <Icon name="toc" size={18} color="var(--color-primary)" />
          Table of contents
        </span>
        <Icon
          name="expand_more"
          size={20}
          color="var(--color-text-muted)"
          className={styles.chevron}
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {open && (
        <ul className={styles.list}>
          {rows.map((item) => (
            <li key={item.id} className={item.isTopLevel ? styles.itemTop : styles.itemNested}>
              <a href={`#${item.id}`} className={styles.link}>
                {item.isTopLevel ? <span className={styles.index}>{item.number}</span> : <span className={styles.dash} />}
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

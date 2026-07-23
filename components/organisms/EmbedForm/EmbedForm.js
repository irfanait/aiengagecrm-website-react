'use client';

import { useEffect, useRef } from 'react';
import styles from './EmbedForm.module.css';

/**
 * Embeds an AiTrillion CRM web form (book-a-demo, contact-us, ...) and listens for its
 * `ait-webform-resize` postMessage so the iframe grows to fit the form's real content height
 * instead of clipping or leaving dead space.
 */
export default function EmbedForm({ slug, title }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    function handleResize(e) {
      if (e.data && e.data.type === 'ait-webform-resize' && e.data.slug === slug && iframeRef.current) {
        iframeRef.current.style.height = `${e.data.height}px`;
      }
    }
    window.addEventListener('message', handleResize);
    return () => window.removeEventListener('message', handleResize);
  }, [slug]);

  return (
    <div className={styles.card}>
      <iframe
        ref={iframeRef}
        id={`ait-form-${slug}`}
        src={`https://crm.aitrillion.com/forms/${slug}?embed=true`}
        width="100%"
        height="800"
        frameBorder="0"
        style={{ border: 'none', display: 'block' }}
        title={title}
      />
    </div>
  );
}

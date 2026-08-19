'use client';

import { useEffect, useRef } from 'react';
import styles from './EmbedForm.module.css';

/**
 * Embeds an AiTrillion CRM web form (book-a-demo, contact-us, partner-registration, ...).
 * Listens for the form's `ait-webform-resize` postMessage so the iframe grows to fit the
 * form's real content height instead of clipping or leaving dead space, and answers its
 * `ait-webform-request-url` message with the current page URL so submissions record this
 * page rather than the iframe's own address — replied only to the form's own origin, never
 * '*', so the address is never broadcast to other frames.
 */
export default function EmbedForm({ slug, title, height = 800 }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    function handleMessage(e) {
      if (!e.data || e.data.slug !== slug || !iframeRef.current) return;

      if (e.data.type === 'ait-webform-resize') {
        iframeRef.current.style.height = `${e.data.height}px`;
      }

      if (e.data.type === 'ait-webform-request-url' && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          { type: 'ait-webform-url', slug, url: window.location.href },
          'https://app.aiengagecrm.com'
        );
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [slug]);

  return (
    <div className={styles.card}>
      <iframe
        ref={iframeRef}
        id={`ait-form-${slug}`}
        src={`https://app.aiengagecrm.com/forms/${slug}?embed=true`}
        width="100%"
        height={height}
        frameBorder="0"
        style={{ border: 'none', display: 'block' }}
        title={title}
      />
    </div>
  );
}

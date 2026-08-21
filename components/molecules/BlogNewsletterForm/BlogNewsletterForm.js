'use client';

import { useRef } from 'react';
import Icon from '../../atoms/Icon/Icon';
import styles from './BlogNewsletterForm.module.css';

// Same constants/endpoint the CRM's own embed script (newsletter.html) posts to — this is that
// script ported almost verbatim, trimmed to the single `email` field this design calls for, and
// switched from raw DOM lookups to refs since it now lives inside a React component.
const API_URL = 'https://app.aiengagecrm.com/cback/api';
const SLUG = 'aiengage-crm-website-newsletter-signup-1';
const REDIRECT_URL = '';
const REDIRECT_TARGET = 'parent';

/** Vanilla-JS twin of redirect-after-submit.js, ported as-is:
 *   'blank'  -> new tab, falling back to this window if a popup blocker vetoes it
 *   'parent' -> if this page is framed, send the TOP window instead of loading
 *               the target site inside the frame
 *   'self'   -> plain same-window navigation
 * Every window.top access is guarded: reading it throws on a cross-origin parent (which itself
 * proves we are framed), and assigning top.location is rejected by a frame sandboxed without
 * allow-top-navigation — both fall back to this window rather than raising an uncaught error. */
function aitRedirect(url) {
  if (!url) return;
  if (REDIRECT_TARGET === 'blank') {
    let opened = null;
    try {
      opened = window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      // popup blocked — fall through to same-window navigation
    }
    if (opened) return;
    window.location.href = url;
    return;
  }
  if (REDIRECT_TARGET === 'parent') {
    let framed = false;
    try {
      framed = window.self !== window.top;
    } catch {
      framed = true;
    }
    if (framed) {
      try {
        window.top.location.href = url;
        return;
      } catch {
        // sandboxed without allow-top-navigation — fall through
      }
    }
  }
  window.location.href = url;
}

/** Referral/attribution capture, ported as-is from the embed script. Wrapped in try/catch: a
 * tracking failure must never block a submission. */
function aitTracking() {
  try {
    const here = window.location.href;
    const t = { form_submitted_url: here };
    if (document.referrer) t.http_referrer = document.referrer;

    const qs = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((k) => {
      const v = qs.get(k);
      if (v) t[k] = v;
    });
    const clickIds = ['gclid', 'fbclid', 'msclkid', 'ttclid', 'li_fat_id'];
    for (const id of clickIds) {
      const c = qs.get(id);
      if (c) {
        t.click_id = c;
        break;
      }
    }

    try {
      const prev = JSON.parse(sessionStorage.getItem('ait_webform_tracking') || 'null');
      t.first_visit_url = prev?.first_visit_url || here;
      t.last_visit_url = here;
      t.landing_page = t.first_visit_url;
      sessionStorage.setItem('ait_webform_tracking', JSON.stringify({ first_visit_url: t.first_visit_url, last_visit_url: here }));
    } catch {
      // storage blocked — skip visit history
    }

    return t;
  } catch {
    return {};
  }
}

/** Email-only newsletter signup — the CRM's newsletter.html embed script ported almost verbatim
 * (same endpoint, payload shape, tracking capture and success/error DOM-toggle behavior), just
 * trimmed to the single email field and restyled to match the site instead of the generic embed CSS. */
export default function BlogNewsletterForm() {
  const formRef = useRef(null);
  const successRef = useRef(null);
  const errorRef = useRef(null);
  const emailRef = useRef(null);
  const btnRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const errEl = errorRef.current;
    errEl.style.display = 'none';

    const btn = btnRef.current;
    const data = { email: emailRef.current.value };
    const payload = { data, tracking: aitTracking() };

    btn.disabled = true;
    btn.textContent = 'Submitting…';

    fetch(`${API_URL}/public/forms/${SLUG}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((r) => r.json().then((d) => ({ ok: r.ok, data: d })))
      .then((res) => {
        btn.disabled = false;
        btn.textContent = 'Subscribe';

        if (res.ok && res.data.status === 'success') {
          if (REDIRECT_URL) {
            aitRedirect(REDIRECT_URL);
            return;
          }
          formRef.current.style.display = 'none';
          successRef.current.style.display = 'flex';
        } else {
          errEl.textContent = res.data?.message || 'Submission failed. Please try again.';
          errEl.style.display = 'block';
        }
      })
      .catch(() => {
        btn.disabled = false;
        btn.textContent = 'Subscribe';
        errEl.textContent = 'Network error. Please try again.';
        errEl.style.display = 'block';
      });

    return false;
  }

  return (
    <div>
      <div ref={errorRef} className={styles.error} style={{ display: 'none' }} />

      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          className={styles.input}
          aria-label="Email address"
        />
        <button ref={btnRef} type="submit" className={styles.button}>
          Subscribe
        </button>
      </form>

      <div ref={successRef} className={styles.success} style={{ display: 'none' }}>
        <Icon name="check_circle" size={28} color="var(--color-primary)" filled />
        <p>Thank you for subscribing!</p>
      </div>
    </div>
  );
}

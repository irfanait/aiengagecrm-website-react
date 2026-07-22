import { NextResponse } from 'next/server';

// Common headers CDNs/hosts inject with the visitor's IP-derived country (ISO 3166-1 alpha-2).
// Next.js dropped its built-in `request.geo` in v15, so this is read manually — whichever of
// these the current host happens to set (Vercel, Cloudflare, etc.) wins; if none are present
// (e.g. local dev, or an unsupported host) no cookie is set and the client-side fallback in
// PricingPlansSection takes over.
const COUNTRY_HEADER_CANDIDATES = ['x-vercel-ip-country', 'cf-ipcountry', 'x-country-code', 'x-appengine-country'];

export function proxy(request) {
  const response = NextResponse.next();

  for (const header of COUNTRY_HEADER_CANDIDATES) {
    const value = request.headers.get(header);
    // "XX"/"T1" are Vercel/Cloudflare's own "unknown" placeholders, not a real country.
    if (value && value !== 'XX' && value !== 'T1') {
      response.cookies.set('aie_country', value.toUpperCase(), {
        path: '/',
        maxAge: 60 * 60 * 24,
        sameSite: 'lax',
      });
      break;
    }
  }

  return response;
}

export const config = {
  matcher: '/pricing',
};

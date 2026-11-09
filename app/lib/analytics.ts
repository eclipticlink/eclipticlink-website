/**
 * GA4 event helper. Events used for conversion tracking:
 *  - generate_lead        contact form submitted successfully
 *  - phone_click          tel: link clicked
 *  - email_click          mailto: link clicked
 *  - cta_click            link to /contact clicked
 *  - under_attack_click   link to incident response clicked
 * Mark generate_lead (and optionally phone_click) as Key Events in GA4 Admin.
 */
type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: GtagParams) => void;
  }
}

export function trackEvent(name: string, params: GtagParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, { page_path: window.location.pathname, ...params });
}

/**
 * GA4 event helper. Events used for conversion tracking:
 *  - generate_lead        contact form submitted successfully
 *  - phone_click          tel: link clicked
 *  - email_click          mailto: link clicked
 *  - whatsapp_click       wa.me link clicked (floating button or footer)
 *  - cta_click            link to /contact clicked
 *  - under_attack_click   link to incident response clicked
 * Mark generate_lead and whatsapp_click as Key Events in GA4 Admin.
 *
 * Internal traffic: open any page with ?internal=1 once on each team device/browser
 * (?internal=0 undoes it). Those visits are sent with traffic_type=internal and
 * dropped by the GA4 "Internal Traffic" data filter.
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

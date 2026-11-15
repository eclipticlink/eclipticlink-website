import { COMPANY_WHATSAPP_URL } from "../lib/config";

const PREFILL = encodeURIComponent("Hi EclipticLink, I'd like to book a free security assessment.");

/**
 * Floating WhatsApp button. Sits bottom-left so it never overlaps the HubSpot
 * chat bubble (bottom-right). Clicks are tracked as `whatsapp_click` by
 * AnalyticsEvents.
 */
export function WhatsAppButton() {
  return (
    <a
      href={`${COMPANY_WHATSAPP_URL}?text=${PREFILL}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-location="floating"
      className="fixed bottom-5 left-5 z-50 flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-4 font-semibold text-white shadow-lg shadow-black/30 transition hover:scale-105 hover:bg-[#1ebe5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.3.6 4.54 1.74 6.52L3 29l6.65-1.74A12.94 12.94 0 0 0 16.04 29C23.2 29 29 23.18 29 16S23.2 3 16.04 3Zm0 23.8c-2.02 0-4-.54-5.72-1.57l-.41-.24-3.95 1.03 1.05-3.85-.27-.4A10.73 10.73 0 0 1 5.24 16c0-5.96 4.85-10.8 10.8-10.8 5.95 0 10.78 4.84 10.78 10.8 0 5.95-4.83 10.8-10.78 10.8Zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.32-.84 1.06-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.15-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.11 1.31 3.32c.16.22 2.26 3.45 5.48 4.84.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.92-.78 2.19-1.54.27-.76.27-1.4.19-1.54-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}

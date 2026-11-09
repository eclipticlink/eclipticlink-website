"use client";

import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

/** One delegated listener that turns key link clicks into GA4 events. */
export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      const link_text = (a.textContent ?? "").trim().slice(0, 80);
      const location =
        a.closest("header") ? "header" : a.closest("footer") ? "footer" : a.closest("section")?.getAttribute("aria-labelledby") ?? "body";

      if (href.startsWith("tel:")) trackEvent("phone_click", { link_text, location });
      else if (href.startsWith("mailto:")) trackEvent("email_click", { link_text, location });
      else if (href === "/contact" || href.startsWith("/contact?")) trackEvent("cta_click", { link_text, location });
      else if (href === "/services/incident-response" && /attack|help now/i.test(link_text))
        trackEvent("under_attack_click", { link_text, location });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}

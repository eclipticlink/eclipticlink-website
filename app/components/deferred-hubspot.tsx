"use client";

import { useEffect } from "react";

const PORTAL_ID = String(process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "245439892");
const EVENTS = ["pointerdown", "keydown", "scroll", "touchstart", "mousemove"] as const;
const FALLBACK_MS = 5000;

/**
 * Loads HubSpot (tracking + chat) after the first user interaction, or after a
 * short delay if the visitor doesn't interact. HubSpot's script is the largest
 * main-thread cost on first load, so deferring it keeps the page fast.
 */
export function DeferredHubSpot() {
  useEffect(() => {
    let done = false;
    const load = () => {
      if (done) return;
      done = true;
      cleanup();
      if (document.getElementById("hs-script-loader")) return;
      const s = document.createElement("script");
      s.id = "hs-script-loader";
      s.async = true;
      s.defer = true;
      s.src = `https://js-na2.hs-scripts.com/${PORTAL_ID}.js`;
      document.body.appendChild(s);
    };
    const timer = window.setTimeout(load, FALLBACK_MS);
    const cleanup = () => {
      window.clearTimeout(timer);
      EVENTS.forEach((e) => window.removeEventListener(e, load));
    };
    EVENTS.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    return cleanup;
  }, []);

  return null;
}

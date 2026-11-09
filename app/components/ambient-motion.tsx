"use client";

import { useEffect } from "react";

const EVENTS = ["pointerdown", "keydown", "scroll", "touchstart", "mousemove"] as const;
const DELAY_AFTER_LOAD_MS = 4000;

/**
 * Adds `ambient` to <html> shortly after the page has loaded (or on first interaction),
 * which switches on purely decorative CSS animations. Keeping them off during load
 * gives a visually stable first paint (better Speed Index / CLS).
 */
export function AmbientMotion() {
  useEffect(() => {
    let timer: number | undefined;
    const enable = () => {
      document.documentElement.classList.add("ambient");
      cleanup();
    };
    const arm = () => {
      timer = window.setTimeout(enable, DELAY_AFTER_LOAD_MS);
    };
    const cleanup = () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", arm);
      EVENTS.forEach((e) => window.removeEventListener(e, enable));
    };

    if (document.readyState === "complete") arm();
    else window.addEventListener("load", arm, { once: true });
    EVENTS.forEach((e) => window.addEventListener(e, enable, { once: true, passive: true }));
    return cleanup;
  }, []);

  return null;
}

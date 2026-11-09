"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "../icons";

/*
 * OWASP Top 10 for LLM Applications, tested live.
 *
 * A test cursor walks down the six risks: each row goes queued > testing >
 * passed, the counter climbs, and a scan line follows the cursor. After a
 * full pass it holds, then runs again. Only runs on screen; reduced motion
 * shows every row passed.
 */

type Risk = { id: string; name: string; body: string };
const ROW_MS = 1300;
const HOLD_MS = 2600;

export function LlmCoverage({ risks }: { risks: Risk[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(risks.length); // rows < step are passed; row === step is testing
  const [onScreen, setOnScreen] = useState(false);
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setMotionOk(!q.matches);
    set();
    q.addEventListener("change", set);
    return () => q.removeEventListener("change", set);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        setOnScreen(e.isIntersecting);
        if (e.isIntersecting) setStep(0); // each visit starts from the top
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!motionOk || !onScreen) return;
    const done = step >= risks.length;
    const t = window.setTimeout(() => setStep((s) => (s >= risks.length ? 0 : s + 1)), done ? HOLD_MS : ROW_MS);
    return () => window.clearTimeout(t);
  }, [step, motionOk, onScreen, risks.length]);

  const passed = Math.min(step, risks.length);
  const running = motionOk && step < risks.length;

  return (
    <div ref={ref} className="card relative overflow-hidden rounded-2xl p-2 shadow-[0_40px_80px_-50px_rgb(11_32_27/0.5)]">
      <div className="flex items-center justify-between rounded-xl bg-navy px-4 py-3">
        <p className="font-mono text-xs text-white/75">owasp-llm-top-10 · coverage</p>
        <span className="flex items-center gap-2 font-mono text-xs font-medium text-white">
          <span className={`live-dot ${running ? "" : ""}`} aria-hidden="true" />
          <span className="tabular-nums">
            {passed}/{risks.length}
          </span>{" "}
          {running ? "testing" : "tested"}
        </span>
      </div>
      <div className="mx-2 mt-2 h-1 overflow-hidden rounded-full bg-tint" aria-hidden="true">
        <div
          className="h-full origin-left rounded-full bg-brand-strong transition-transform duration-500 ease-out"
          style={{ transform: `scaleX(${passed / risks.length})` }}
        />
      </div>
      <ul className="mt-1 divide-y divide-line" role="list">
        {risks.map((r, i) => {
          const state = i < step ? "passed" : i === step && motionOk ? "testing" : motionOk ? "queued" : "passed";
          return (
            <li
              key={r.id}
              className={`relative flex items-start gap-4 rounded-xl px-4 py-4 transition-colors duration-300 ${
                state === "testing" ? "bg-tint" : ""
              }`}
            >
              {state === "testing" ? <span className="llm-scan" aria-hidden="true" /> : null}
              <span
                className={`mt-0.5 rounded border px-2 py-0.5 font-mono text-[0.68rem] transition-colors duration-300 ${
                  state === "queued" ? "border-line text-subtle" : "border-brand-strong/30 bg-surface text-accent"
                }`}
              >
                {r.id}
              </span>
              <div className="min-w-0 flex-1">
                <p className={`font-medium transition-colors duration-300 ${state === "queued" ? "text-muted" : "text-ink"}`}>{r.name}</p>
                <p className="mt-0.5 text-sm text-muted">{r.body}</p>
              </div>
              <span className="mt-0.5 flex w-20 shrink-0 justify-end">
                {state === "passed" ? (
                  <span className="check-pop flex items-center gap-1.5 rounded-full bg-brand-strong px-2.5 py-1 font-mono text-[0.62rem] font-medium text-white">
                    <Icon name="check" className="h-3 w-3" />
                    passed
                  </span>
                ) : state === "testing" ? (
                  <span className="flex items-center gap-1.5 rounded-full border border-brand-strong/40 px-2.5 py-1 font-mono text-[0.62rem] text-accent">
                    <span className="spinner" aria-hidden="true" />
                    testing
                  </span>
                ) : (
                  <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.62rem] text-subtle">queued</span>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

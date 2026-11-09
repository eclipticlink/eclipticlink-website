"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Icon, type Icons } from "../icons";

/*
 * Cards on the left, a live panel on the right.
 *
 * One clock drives everything: a requestAnimationFrame loop advances `p`
 * (0 to 1) for the open card and writes it to `--p` on the panel, so bars,
 * the "now" line and the clock move together without re-rendering React per
 * frame. Markers and checklist ticks re-render only when p crosses them. At
 * p = 1 the next card opens. Hover or focus pauses; off-screen it stops.
 * Reduced motion: every panel is shown finished and nothing advances.
 *
 * Panel content is illustrative sample data, and the panel says so.
 */

type IconKey = keyof typeof Icons;
const STEP_MS = 9000;

export type TimelineVisual = {
  kind: "timeline";
  title: string;
  chip: string;
  without: { label: string; sub: string; bar: string };
  with: { label: string; sub: string; marks: { at: number; label: string }[] };
  measure: { label: string; without: string; withoutPct: number; with: string; withPct: number };
};

export type ChecklistVisual = {
  kind: "checklist";
  title: string;
  chip: string;
  chips: string[];
  items: string[];
  score: { label: string; pct: number };
};

export type SwitchItem = {
  key: string;
  icon: IconKey;
  title: string;
  sub: string;
  body?: string;
  checks: string[];
  link?: { href: string; label: string };
  visual: TimelineVisual | ChecklistVisual;
};

function clock(p: number) {
  const mins = Math.round(9 * 60 + p * 8 * 60);
  return `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(mins % 60).padStart(2, "0")}`;
}

function Timeline({ v, p }: { v: TimelineVisual; p: number }) {
  return (
    <div>
      <div className="flex items-end justify-between">
        <p className="text-xs text-subtle">One working day</p>
        <p className="font-mono text-base font-semibold tabular-nums text-ink" data-clock>
          {clock(p)}
        </p>
      </div>
      <div className="mt-3 grid grid-cols-[6.5rem_1fr] gap-x-4 sm:grid-cols-[8rem_1fr]">
        <span />
        <div className="flex justify-between font-mono text-[0.62rem] text-subtle">
          {["09:00", "11:00", "13:00", "15:00", "17:00"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        {/* Without */}
        <div className="mt-5">
          <p className="text-[0.72rem] font-semibold text-ink">{v.without.label}</p>
          <p className="text-[0.66rem] leading-snug text-subtle">{v.without.sub}</p>
        </div>
        <div className="tl-track relative mt-5 h-9 rounded-lg bg-surface-2">
          <div className="tl-fill tl-stripes absolute inset-y-0 left-0 w-full rounded-lg" />
          <span className="tl-label absolute inset-y-0 left-3 flex items-center gap-1.5 text-[0.66rem] font-semibold text-white">
            <Icon name="alert" className="h-3.5 w-3.5" />
            {v.without.bar}
          </span>
          <span className="tl-now absolute -inset-y-2 left-0 w-0.5 bg-ink" />
        </div>

        {/* With */}
        <div className="mt-8">
          <p className="text-[0.72rem] font-semibold text-ink">{v.with.label}</p>
          <p className="text-[0.66rem] leading-snug text-subtle">{v.with.sub}</p>
        </div>
        <div className="tl-track relative mt-8 h-9 rounded-lg bg-surface-2">
          {v.with.marks.map((m) =>
            p >= m.at ? (
              <span
                key={m.at}
                className="tl-mark absolute inset-y-1 flex w-2.5 -translate-x-1/2 rounded-full bg-brand-strong"
                style={{ left: `${m.at * 100}%` }}
              >
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[0.6rem] font-semibold text-accent">
                  {m.label}
                </span>
              </span>
            ) : null
          )}
          <span className="tl-now absolute -inset-y-2 left-0 w-0.5 bg-ink" />
        </div>
      </div>

      {/* Measure */}
      <div className="mt-10 grid grid-cols-[6.5rem_1fr_auto] items-center gap-x-4 gap-y-3 sm:grid-cols-[8rem_1fr_auto]">
        <p className="text-[0.7rem] text-subtle">{v.measure.label}</p>
        <div className="h-3.5 overflow-hidden rounded-full bg-surface-2">
          <div
            className="tl-grow h-full rounded-full bg-threat"
            style={{ "--max": v.measure.withoutPct } as CSSProperties}
          />
        </div>
        <p className="w-20 font-mono text-sm font-semibold text-threat">{v.measure.without}</p>
        <p className="text-[0.7rem] text-subtle">With EclipticLink</p>
        <div className="h-3.5 overflow-hidden rounded-full bg-surface-2">
          <div
            className="tl-grow h-full min-w-3.5 rounded-full bg-brand-strong"
            style={{ "--max": v.measure.withPct } as CSSProperties}
          />
        </div>
        <p className="w-20 font-mono text-sm font-semibold text-accent">{v.measure.with}</p>
      </div>
    </div>
  );
}

function LiveLog({ v, p }: { v: TimelineVisual | ChecklistVisual; p: number }) {
  const entries =
    v.kind === "timeline"
      ? v.with.marks.filter((m) => p >= m.at).map((m) => ({ t: clock(m.at), what: m.label, who: v.with.sub }))
      : v.items
          .map((it, i) => ({ at: (i + 1) / (v.items.length + 1), it }))
          .filter((e) => p >= e.at)
          .map((e) => ({ t: clock(e.at), what: "done", who: e.it }));
  return (
    <div className="mt-7 flex min-h-[7.5rem] flex-1 flex-col rounded-2xl border border-line bg-bg-elevated p-4">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-subtle">Live log</p>
        <span className="flex items-center gap-1.5 font-mono text-[0.62rem] text-accent">
          <span className="live-dot" aria-hidden="true" />
          streaming
        </span>
      </div>
      <ul className="mt-3 space-y-2" role="list">
        <li className="flex items-center gap-3 font-mono text-[0.7rem] text-subtle">
          <span className="tabular-nums">09:00</span>
          <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
          Monitoring started
        </li>
        {entries.map((e) => (
          <li key={e.t + e.who} className="check-pop flex items-center gap-3 font-mono text-[0.7rem] text-ink">
            <span className="tabular-nums text-subtle">{e.t}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-strong" />
            <span className="truncate">
              <span className="font-semibold text-accent">{e.what}</span> · {e.who}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Checklist({ v, p }: { v: ChecklistVisual; p: number }) {
  const done = Math.min(v.items.length, Math.floor(p * (v.items.length + 1)));
  return (
    <div>
      <ul className="flex flex-wrap gap-2" role="list">
        {v.chips.map((c) => (
          <li key={c} className="rounded-full bg-navy px-3 py-1 font-mono text-[0.68rem] font-medium text-white">
            {c}
          </li>
        ))}
      </ul>
      <ul className="mt-6 space-y-2.5" role="list">
        {v.items.map((it, i) => {
          const ok = i < done;
          return (
            <li
              key={it}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-colors duration-300 ${
                ok ? "border-brand-strong/35 bg-tint" : "border-line bg-surface"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                  ok ? "bg-brand-strong text-white" : "border border-line-strong text-transparent"
                }`}
              >
                <Icon name="check" className="h-3.5 w-3.5" />
              </span>
              <span className={`text-sm font-medium ${ok ? "text-ink" : "text-subtle"}`}>{it}</span>
              <span className={`ml-auto font-mono text-[0.62rem] ${ok ? "text-accent" : "text-subtle"}`}>
                {ok ? "done" : "queued"}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="mt-7 flex items-center gap-4">
        <p className="w-28 shrink-0 text-[0.72rem] text-subtle">{v.score.label}</p>
        <div className="h-3.5 flex-1 overflow-hidden rounded-full bg-surface-2">
          <div className="tl-grow h-full rounded-full bg-brand-strong" style={{ "--max": v.score.pct } as CSSProperties} />
        </div>
        <p className="w-12 text-right font-mono text-sm font-semibold tabular-nums text-accent" data-score={v.score.pct}>
          {Math.round(v.score.pct * 100 * Math.min(1, p))}%
        </p>
      </div>
    </div>
  );
}

export function CardSwitcher({ items, label }: { items: SwitchItem[]; label: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [p, setP] = useState(1);
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [motionOk, setMotionOk] = useState(false);
  const pRef = useRef(0);

  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setMotionOk(!q.matches);
    set();
    q.addEventListener("change", set);
    return () => q.removeEventListener("change", set);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Restart the clock whenever a card opens */
  useEffect(() => {
    pRef.current = motionOk ? 0 : 1;
    panelRef.current?.style.setProperty("--p", String(pRef.current));
    setP(pRef.current);
  }, [active, motionOk]);

  /* The one clock */
  useEffect(() => {
    if (!motionOk || !onScreen || paused) return;
    let raf = 0;
    let last = 0;
    let lastBucket = -1;
    const tick = (ts: number) => {
      if (!last) last = ts;
      pRef.current = Math.min(1, pRef.current + (ts - last) / STEP_MS);
      last = ts;
      const panel = panelRef.current;
      if (panel) {
        panel.style.setProperty("--p", pRef.current.toFixed(4));
        const c = panel.querySelector<HTMLElement>("[data-clock]");
        if (c) c.textContent = clock(pRef.current);
      }
      // Re-render ~20 times per step: enough for markers and ticks, cheap
      const bucket = Math.floor(pRef.current * 20);
      if (bucket !== lastBucket) {
        lastBucket = bucket;
        setP(pRef.current);
      }
      if (pRef.current >= 1) {
        window.setTimeout(() => setActive((a) => (a + 1) % items.length), 900);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [motionOk, onScreen, paused, active, items.length]);

  const item = items[active];
  const v = item.visual;

  return (
    <div
      ref={rootRef}
      className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 [&>*]:min-w-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <ul className="space-y-3" role="list" aria-label={label}>
        {items.map((it, i) => {
          const on = i === active;
          return (
            <li key={it.key}>
              <div
                className={`relative overflow-hidden rounded-2xl border bg-surface transition-[border-color,box-shadow] duration-300 ${
                  on
                    ? "border-brand-strong/40 shadow-[0_24px_50px_-34px_rgb(18_162_115/0.55)]"
                    : "border-line hover:border-line-strong"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-brand-strong transition-transform duration-500 ease-out ${
                    on ? "scale-y-100" : "scale-y-0"
                  }`}
                  aria-hidden="true"
                />
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={on}
                  aria-controls={`${it.key}-detail`}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      on ? "bg-brand-strong text-white" : "bg-tint text-accent"
                    }`}
                  >
                    <Icon name={it.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold tracking-tight text-ink">{it.title}</span>
                    <span className="block text-sm text-muted">{it.sub}</span>
                  </span>
                </button>
                <div id={`${it.key}-detail`} className={`acc ${on ? "is-open" : ""}`}>
                  <div>
                    <div className="px-5 pb-5 sm:pl-[5.25rem]">
                      {it.body ? <p className="text-[0.95rem] leading-relaxed text-muted">{it.body}</p> : null}
                      <ul className="mt-3 space-y-2" role="list">
                        {it.checks.map((c) => (
                          <li key={c} className="flex items-start gap-2.5 text-[0.92rem] text-ink">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-brand-strong text-accent">
                              <Icon name="check" className="h-3 w-3" />
                            </span>
                            {c}
                          </li>
                        ))}
                      </ul>
                      {it.link ? (
                        <Link href={it.link.href} className="link-arrow group mt-4" tabIndex={on ? 0 : -1}>
                          {it.link.label}
                          <Icon name="arrow" className="h-4 w-4" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col">
        <div
          ref={panelRef}
          className="card flex flex-1 flex-col rounded-3xl p-6 shadow-[0_40px_80px_-50px_rgb(11_32_27/0.45)] sm:p-7"
          style={{ "--p": p } as CSSProperties}
        >
          <div key={item.key} className="sc-in flex flex-1 flex-col">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="font-semibold text-ink">{v.title}</p>
              <span className="flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[0.66rem] text-ink">
                <span className={`live-dot ${v.kind === "timeline" ? "" : ""}`} aria-hidden="true" />
                {v.chip}
              </span>
            </div>
            {v.kind === "timeline" ? <Timeline v={v} p={p} /> : <Checklist v={v} p={p} />}
            <LiveLog v={v} p={p} />
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-subtle">Illustrative example. Names, times and figures are sample data.</p>
      </div>
    </div>
  );
}

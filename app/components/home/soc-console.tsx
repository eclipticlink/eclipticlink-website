"use client";

import { useEffect, useState } from "react";

type Verdict = "blocked" | "escalated" | "benign" | "contained";
type Event = {
  sev: "crit" | "high" | "med" | "low";
  title: string;
  source: string;
  verdict: Verdict;
  technique: string;
};

const POOL: Event[] = [
  { sev: "crit", title: "Impossible travel + MFA fatigue", source: "Entra ID", verdict: "escalated", technique: "T1621" },
  { sev: "high", title: "Prompt injection in uploaded PDF", source: "LLM gateway", verdict: "blocked", technique: "AML.T0051" },
  { sev: "low", title: "Admin login from known VPN", source: "Okta", verdict: "benign", technique: "T1078" },
  { sev: "high", title: "Encoded PowerShell from Office macro", source: "EDR", verdict: "contained", technique: "T1059.001" },
  { sev: "med", title: "Public S3 bucket created", source: "AWS CloudTrail", verdict: "blocked", technique: "T1530" },
  { sev: "low", title: "Vulnerability scanner traffic", source: "WAF", verdict: "benign", technique: "T1595" },
  { sev: "crit", title: "Suspicious OAuth app consent", source: "Microsoft 365", verdict: "escalated", technique: "T1528" },
  { sev: "med", title: "Agent tool call outside scope", source: "AI agent audit", verdict: "blocked", technique: "AML.T0053" },
  { sev: "high", title: "Credential dumping attempt (LSASS)", source: "EDR", verdict: "contained", technique: "T1003.001" },
  { sev: "low", title: "Repeated failed logins, single user", source: "Google Workspace", verdict: "benign", technique: "T1110" },
];

const sevStyle: Record<Event["sev"], string> = {
  crit: "bg-threat/15 text-[#ff8f9a] border-threat/40",
  high: "bg-warn-soft text-warn border-warn/40",
  med: "bg-signal-soft text-[#9db6ff] border-signal/40",
  low: "bg-white/5 text-subtle border-line",
};

const verdictStyle: Record<Verdict, string> = {
  blocked: "text-accent",
  contained: "text-accent",
  escalated: "text-[#ff8f9a]",
  benign: "text-subtle",
};

const verdictLabel: Record<Verdict, string> = {
  blocked: "AI: auto-blocked",
  contained: "Contained",
  escalated: "→ Analyst",
  benign: "AI: benign",
};

const VISIBLE = 5;

function stamp(i: number) {
  // Deterministic timestamps so server and client render identically
  const s = 14 * 3600 + 2 * 60 + 11 + i * 7;
  const h = Math.floor(s / 3600) % 24;
  const m = Math.floor(s / 60) % 60;
  const sec = s % 60;
  return [h, m, sec].map((n) => String(n).padStart(2, "0")).join(":");
}

export function SocConsole() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setTick((t) => t + 1), 2200);
    return () => clearInterval(id);
  }, []);

  const rows = Array.from({ length: VISIBLE }, (_, i) => {
    const idx = tick + VISIBLE - 1 - i;
    return { key: idx, time: stamp(idx), ...POOL[idx % POOL.length] };
  });

  const analyzed = 18_420 + tick * 137;
  const suppressed = 18_391 + tick * 136;

  return (
    <div className="card brackets relative overflow-hidden shadow-[0_40px_120px_-40px_rgb(116_210_176/0.35)]">
      <div className="scanline" aria-hidden="true" />
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-threat/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        </div>
        <p className="font-mono text-[0.7rem] text-subtle">soc://eclipticlink/live-triage</p>
        <span className="flex items-center gap-2 font-mono text-[0.7rem] text-accent">
          <span className="live-dot" aria-hidden="true" />
          LIVE
        </span>
      </div>

      <dl className="grid grid-cols-3 divide-x divide-line border-b border-line">
        {[
          { k: "Events analyzed", v: analyzed.toLocaleString("en-US") },
          { k: "AI-resolved", v: suppressed.toLocaleString("en-US") },
          { k: "To analysts", v: String(29 + Math.floor(tick / 3)) },
        ].map((s) => (
          <div key={s.k} className="px-4 py-3">
            <dt className="font-mono text-[0.62rem] uppercase tracking-wider text-subtle">{s.k}</dt>
            <dd className="mt-1 font-mono text-lg font-medium tabular-nums text-ink">{s.v}</dd>
          </div>
        ))}
      </dl>

      <ul className="divide-y divide-line" aria-label="Sample security events (illustrative)">
        {rows.map((r, i) => (
          <li
            key={r.key}
            className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 ${i === 0 ? "feed-in bg-white/[0.02]" : ""}`}
          >
            <span
              className={`w-12 rounded border px-1.5 py-0.5 text-center font-mono text-[0.6rem] font-medium uppercase ${sevStyle[r.sev]}`}
            >
              {r.sev}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[0.82rem] font-medium text-ink">{r.title}</p>
              <p className="truncate font-mono text-[0.65rem] text-subtle">
                {r.time} · {r.source} · {r.technique}
              </p>
            </div>
            <span className={`whitespace-nowrap font-mono text-[0.68rem] ${verdictStyle[r.verdict]}`}>
              {verdictLabel[r.verdict]}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-line bg-bg-elevated/60 px-4 py-2.5">
        <p className="font-mono text-[0.65rem] text-subtle">
          <span className="text-accent">$</span> triage --mode=ai-assisted --human-verify=true
        </p>
        <p className="font-mono text-[0.6rem] uppercase tracking-wider text-subtle">Illustrative</p>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Icon, type Icons } from "../icons";

/*
 * Homepage hero: a live tour of five services inside one product window.
 *
 * - Tabs under the window step through the scenes. The active tab's hairline
 *   is a CSS animation; its `animationend` advances to the next scene, so the
 *   bar and the scene can never drift apart. Hover or focus pauses it, and it
 *   only runs while the hero is on screen.
 * - Two callouts sit above the window. A connector is measured from each
 *   callout to the element it describes inside the scene and drawn in once the
 *   scene has settled; that element gets a teal outline.
 * - Every figure is illustrative sample data, and the window says so.
 *
 * Reduced motion: no auto-advance, no draw-in; tabs still switch scenes.
 */

type IconKey = keyof typeof Icons;
const SCENE_MS = 6500;

type Callout = { title: string; sub: string; icon: IconKey; target: string };
type Scene = {
  key: "soc" | "pentest" | "ai" | "cloud" | "grc";
  tab: string;
  icon: IconKey;
  path: string;
  service: string;
  page: { title: string; sub: string; chip: string };
  title: string;
  body: string;
  callouts: [Callout, Callout];
};

const SCENES: Scene[] = [
  {
    key: "soc",
    tab: "MDR & SOC",
    icon: "radar",
    path: "soc/live-triage",
    service: "managed-detection-response",
    page: { title: "Live triage", sub: "AI-assisted, human-verified", chip: "Monitoring" },
    title: "AI triage on every alert, an analyst on every escalation",
    body: "Continuous monitoring with AI-assisted triage. Far fewer false positives reach your team, and every escalation is reviewed by a human analyst.",
    callouts: [
      { title: "AI-assisted alert triage", sub: "Noise resolved before it reaches you", icon: "brain", target: "soc-ai" },
      { title: "Human-verified escalation", sub: "An analyst reviews every one", icon: "user", target: "soc-analyst" },
    ],
  },
  {
    key: "pentest",
    tab: "Pen testing",
    icon: "target",
    path: "pentest/findings",
    service: "penetration-testing",
    page: { title: "Findings", sub: "Web app and API engagement", chip: "In scope" },
    title: "Proven, exploitable findings instead of scanner noise",
    body: "CVSS-scored, prioritized findings with proof-of-concept steps your developers can act on, and a retest that confirms fixes actually work.",
    callouts: [
      { title: "Proof-of-concept steps", sub: "Exploitable, not theoretical", icon: "terminal", target: "pt-crit" },
      { title: "Retest and attestation", sub: "Confirms the fix actually works", icon: "check", target: "pt-retest" },
    ],
  },
  {
    key: "ai",
    tab: "AI security",
    icon: "brain",
    path: "ai/red-team",
    service: "ai-security",
    page: { title: "LLM red team", sub: "OWASP Top 10 for LLM Applications", chip: "Testing" },
    title: "Red-teaming the AI you ship, before attackers do",
    body: "Reproducible prompts tested against the OWASP Top 10 for LLM Applications, then guardrails and least-privilege agents that hold up in production.",
    callouts: [
      { title: "Indirect prompt injection", sub: "Hidden instructions in a file", icon: "file", target: "ai-inj" },
      { title: "Agents on least privilege", sub: "Out-of-scope tool calls refused", icon: "bot", target: "ai-agent" },
    ],
  },
  {
    key: "cloud",
    tab: "Cloud",
    icon: "cloud",
    path: "cloud/posture",
    service: "cloud-security",
    page: { title: "Cloud posture", sub: "Read-only assessment", chip: "Continuous" },
    title: "Attack paths, not just a list of misconfigurations",
    body: "A complete inventory of cloud assets and exposure, prioritized attack-path findings, and Terraform fixes delivered as pull requests.",
    callouts: [
      { title: "Attack-path findings", sub: "Ranked by exploitability", icon: "alert", target: "cl-path" },
      { title: "IaC fixes as pull requests", sub: "Terraform changes, ready to merge", icon: "git", target: "cl-pr" },
    ],
  },
  {
    key: "grc",
    tab: "Compliance",
    icon: "shield-check",
    path: "grc/readiness",
    service: "compliance-grc",
    page: { title: "Audit readiness", sub: "Gap assessment and evidence", chip: "Mapping" },
    title: "Audit-ready on a defined, predictable timeline",
    body: "Gap assessment, policies your team will actually follow, and an evidence library your auditor can work from.",
    callouts: [
      { title: "SOC 2 readiness", sub: "Gaps closed before the audit", icon: "shield-check", target: "grc-soc2" },
      { title: "Evidence library", sub: "Mapped to every control", icon: "file", target: "grc-evidence" },
    ],
  },
];

/* ── Small parts ─────────────────────────────────────────────────── */

/* Staggered entrance for anything inside a scene */
function In({ k, className = "", children, ...rest }: { k: number; className?: string; children: ReactNode } & Record<string, unknown>) {
  return (
    <div className={`sc-in ${className}`} style={{ "--k": k } as CSSProperties} {...rest}>
      {children}
    </div>
  );
}

const sev = {
  crit: "border-threat/30 bg-threat-soft text-threat",
  high: "border-warn/30 bg-warn-soft text-warn",
  med: "border-signal/30 bg-signal-soft text-signal",
  low: "border-line bg-surface-2 text-subtle",
} as const;

function Sev({ s }: { s: keyof typeof sev }) {
  return (
    <span className={`inline-block w-11 rounded border px-1 py-0.5 text-center font-mono text-[0.58rem] font-medium uppercase ${sev[s]}`}>
      {s}
    </span>
  );
}

function Stat({ k, label, value, sub, target }: { k: number; label: string; value: string; sub: string; target?: string }) {
  return (
    <In k={k} className="rounded-lg border border-line bg-surface px-3 py-2.5" data-target={target}>
      <p className="font-mono text-[0.58rem] uppercase tracking-wider text-subtle">{label}</p>
      <p className="mt-1 text-xl font-semibold tabular-nums tracking-tight text-ink">{value}</p>
      <p className="mt-0.5 truncate text-[0.62rem] text-subtle">{sub}</p>
    </In>
  );
}

function Bar({ k, label, pct, target }: { k: number; label: string; pct: number; target?: string }) {
  return (
    <In k={k} className="rounded-lg border border-line bg-surface px-3 py-2.5" data-target={target}>
      <div className="flex items-center justify-between text-[0.7rem]">
        <span className="font-medium text-ink">{label}</span>
        <span className="font-mono tabular-nums text-accent">{pct}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
        <div className="sc-bar h-full rounded-full bg-brand-strong" style={{ width: `${pct}%`, "--k": k } as CSSProperties} />
      </div>
    </In>
  );
}

/* ── Scenes ──────────────────────────────────────────────────────── */

function SocScene() {
  const feed = [
    { s: "crit" as const, t: "Impossible travel + MFA fatigue", m: "Entra ID · T1621", v: "→ Analyst", tone: "text-threat", target: "soc-analyst" },
    { s: "high" as const, t: "Encoded PowerShell from Office macro", m: "EDR · T1059.001", v: "Contained", tone: "text-secure-ink" },
    { s: "med" as const, t: "Public S3 bucket created", m: "CloudTrail · T1530", v: "AI: auto-blocked", tone: "text-secure-ink" },
    { s: "low" as const, t: "Admin login from known VPN", m: "Okta · T1078", v: "AI: benign", tone: "text-subtle" },
  ];
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-3 gap-3">
        <Stat k={0} label="Events analyzed" value="18,420" sub="Last 24 hours" />
        <Stat k={1} label="AI-resolved" value="18,391" sub="Benign or auto-blocked" target="soc-ai" />
        <Stat k={2} label="To analysts" value="29" sub="Every one reviewed" />
      </div>
      <In k={3} className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface">
        {feed.map((r) => (
          <div key={r.t} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-3 py-1.5" data-target={r.target}>
            <Sev s={r.s} />
            <div className="min-w-0">
              <p className="truncate text-[0.72rem] font-medium text-ink">{r.t}</p>
              <p className="truncate font-mono text-[0.6rem] text-subtle">{r.m}</p>
            </div>
            <span className={`whitespace-nowrap font-mono text-[0.62rem] ${r.tone}`}>{r.v}</span>
          </div>
        ))}
      </In>
    </div>
  );
}

function PentestScene() {
  const rows = [
    { id: "PT-01", t: "SQL injection in search endpoint", s: "crit" as const, c: "9.1", st: "PoC confirmed", tone: "text-threat", target: "pt-crit" },
    { id: "PT-02", t: "IDOR on /api/invoices/{id}", s: "high" as const, c: "8.1", st: "In remediation", tone: "text-warn" },
    { id: "PT-03", t: "JWT accepts the “none” algorithm", s: "crit" as const, c: "9.8", st: "Retest passed", tone: "text-secure-ink", target: "pt-retest" },
    { id: "PT-04", t: "No rate limit on login", s: "med" as const, c: "5.9", st: "Retest passed", tone: "text-secure-ink" },
    { id: "PT-05", t: "Verbose stack traces in errors", s: "low" as const, c: "3.7", st: "In remediation", tone: "text-warn" },
  ];
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-3 gap-3">
        <Stat k={0} label="Findings" value="5" sub="Proven, not scanned" />
        <Stat k={1} label="Critical" value="2" sub="With PoC steps" />
        <Stat k={2} label="Retested" value="2 / 5" sub="Fixes confirmed" />
      </div>
      <In k={3} className="overflow-hidden rounded-lg border border-line bg-surface">
        <div className="grid grid-cols-[3rem_1fr_auto_auto] gap-3 border-b border-line bg-bg-elevated px-3 py-1.5 font-mono text-[0.56rem] uppercase tracking-wider text-subtle sm:grid-cols-[3rem_1fr_auto_2.5rem_auto]">
          <span>ID</span>
          <span>Finding</span>
          <span>Sev</span>
          <span className="hidden sm:block">CVSS</span>
          <span className="w-[5.5rem]">Status</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.id}
            className="grid grid-cols-[3rem_1fr_auto_auto] items-center gap-3 border-b border-line px-3 py-1.5 last:border-b-0 sm:grid-cols-[3rem_1fr_auto_2.5rem_auto]"
            data-target={r.target}
          >
            <span className="font-mono text-[0.62rem] text-subtle">{r.id}</span>
            <span className="truncate text-[0.7rem] font-medium text-ink">{r.t}</span>
            <Sev s={r.s} />
            <span className="hidden font-mono text-[0.66rem] tabular-nums text-ink sm:block">{r.c}</span>
            <span className={`w-[5.5rem] whitespace-nowrap font-mono text-[0.6rem] ${r.tone}`}>{r.st}</span>
          </div>
        ))}
      </In>
    </div>
  );
}

function AiScene() {
  const rows = [
    { id: "LLM01", t: "“Ignore previous instructions…”", v: "Direct", r: "Blocked" },
    { id: "LLM01", t: "Hidden instruction in uploaded PDF", v: "Indirect", r: "Blocked", target: "ai-inj" },
    { id: "LLM02", t: "Extract the system prompt", v: "Direct", r: "Blocked" },
    { id: "LLM06", t: "Agent calls refund tool out of scope", v: "Agent", r: "Refused", target: "ai-agent" },
    { id: "LLM05", t: "Model output rendered as HTML", v: "Output", r: "Sanitized" },
  ];
  return (
    <div className="grid gap-3">
      <In k={0} className="flex items-center justify-between rounded-lg border border-line bg-surface px-3 py-2.5">
        <div>
          <p className="font-mono text-[0.58rem] uppercase tracking-wider text-subtle">Suite</p>
          <p className="text-[0.75rem] font-semibold text-ink">owasp-llm-top-10 · support assistant</p>
        </div>
        <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[0.6rem] text-accent">
          6 / 6 categories
        </span>
      </In>
      <In k={1} className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface">
        {rows.map((r) => (
          <div key={r.t} className="grid grid-cols-[3.2rem_1fr_auto] items-center gap-3 px-3 py-1.5" data-target={r.target}>
            <span className="rounded border border-line bg-bg-elevated px-1.5 py-0.5 text-center font-mono text-[0.58rem] text-signal">
              {r.id}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[0.7rem] font-medium text-ink">{r.t}</p>
              <p className="font-mono text-[0.58rem] text-subtle">{r.v}</p>
            </div>
            <span className="flex items-center gap-1.5 font-mono text-[0.62rem] text-secure-ink">
              <Icon name="check" className="h-3 w-3" />
              {r.r}
            </span>
          </div>
        ))}
      </In>
    </div>
  );
}

function CloudScene() {
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-3 gap-3">
        <Stat k={0} label="Assets" value="1,284" sub="EC2, IAM, S3, EKS" />
        <Stat k={1} label="Public exposures" value="3" sub="Down from 41" />
        <Stat k={2} label="Attack paths" value="1" sub="Ranked critical" />
      </div>
      <In k={3} className="rounded-lg border border-threat/25 bg-threat-soft px-3 py-2.5" data-target="cl-path">
        <p className="font-mono text-[0.58rem] uppercase tracking-wider text-threat">Attack path · critical</p>
        <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[0.66rem] font-medium text-ink">
          {["Public EC2", "IAM role", "S3 bucket (PII)"].map((n, i) => (
            <span key={n} className="flex items-center gap-1.5">
              {i > 0 ? <Icon name="arrow" className="h-3 w-3 text-threat" /> : null}
              <span className="rounded border border-line bg-surface px-2 py-0.5">{n}</span>
            </span>
          ))}
        </div>
      </In>
      <In k={4} className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-surface">
        <div className="flex items-center justify-between px-3 py-2 text-[0.7rem]">
          <span className="font-medium text-ink">Over-privileged CI role</span>
          <Sev s="high" />
        </div>
        <div className="flex items-center justify-between px-3 py-2 text-[0.7rem]" data-target="cl-pr">
          <span className="flex items-center gap-2 font-medium text-ink">
            <Icon name="git" className="h-3.5 w-3.5 text-accent" />
            PR #142 · terraform: restrict bucket policy
          </span>
          <span className="font-mono text-[0.6rem] text-secure-ink">Ready</span>
        </div>
      </In>
    </div>
  );
}

function GrcScene() {
  return (
    <div className="grid gap-3 sm:grid-cols-[1.15fr_1fr]">
      <div className="grid gap-3">
        <Bar k={0} label="SOC 2 Type II" pct={92} target="grc-soc2" />
        <Bar k={1} label="ISO 27001" pct={78} />
        <Bar k={2} label="HIPAA" pct={64} />
      </div>
      <In k={3} className="rounded-lg border border-line bg-surface p-3" data-target="grc-evidence">
        <p className="font-mono text-[0.58rem] uppercase tracking-wider text-subtle">Evidence library</p>
        <p className="mt-1 text-xl font-semibold tabular-nums tracking-tight text-ink">214 / 236</p>
        <ul className="mt-2 space-y-1.5 text-[0.64rem] text-muted">
          {["CC6.1 Access reviews", "CC7.2 Monitoring alerts", "CC8.1 Change approvals", "A.5.24 IR plan"].map((e) => (
            <li key={e} className="flex items-center gap-1.5">
              <Icon name="check" className="h-3 w-3 shrink-0 text-secure-ink" />
              <span className="truncate">{e}</span>
            </li>
          ))}
        </ul>
      </In>
    </div>
  );
}

const SCENE_VIEWS: Record<Scene["key"], () => ReactNode> = {
  soc: SocScene,
  pentest: PentestScene,
  ai: AiScene,
  cloud: CloudScene,
  grc: GrcScene,
};

/* ── The showcase ────────────────────────────────────────────────── */

type Wire = { d: string; x: number; y: number };

export function HeroShowcase() {
  const rootRef = useRef<HTMLDivElement>(null);
  const calloutRefs = useRef<(HTMLDivElement | null)[]>([]);
  const windowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [motionOk, setMotionOk] = useState(false);
  const [wires, setWires] = useState<{ k: number; list: Wire[] }>({ k: -1, list: [] });
  const scene = SCENES[active];
  const View = SCENE_VIEWS[scene.key];

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
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Connectors: callout bottom-centre to the centre-top of its target */
  const measure = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const R = root.getBoundingClientRect();
    const next: Wire[] = [];
    root.querySelectorAll<HTMLElement>("[data-target]").forEach((el) => el.classList.remove("sc-hl"));
    SCENES[active].callouts.forEach((c, i) => {
      const from = calloutRefs.current[i];
      const to = root.querySelector<HTMLElement>(`[data-target="${c.target}"]`);
      if (!from || !to || from.offsetParent === null) return;
      to.classList.add("sc-hl");
      const a = from.getBoundingClientRect();
      const b = to.getBoundingClientRect();
      const win = windowRef.current?.getBoundingClientRect();
      const x1 = a.left - R.left + a.width / 2;
      const y1 = a.bottom - R.top;
      const x2 = Math.min(Math.max(x1, b.left - R.left + 24), b.right - R.left - 24);
      const y2 = (win ? win.top : b.top) - R.top;
      const my = y1 + (y2 - y1) * 0.5;
      next.push({ d: `M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`, x: x2, y: y2 });
    });
    setWires({ k: active, list: next });
  }, [active]);

  useLayoutEffect(() => {
    // Wait for the scene's entrance (transforms skew measurement) before drawing
    const t = window.setTimeout(measure, 650);
    return () => window.clearTimeout(t);
  }, [measure]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(root);
    return () => ro.disconnect();
  }, [measure]);

  const next = () => setActive((a) => (a + 1) % SCENES.length);
  const running = motionOk && onScreen && !paused;

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Callouts */}
      <div className="mb-7 hidden grid-cols-2 gap-5 sm:grid" aria-hidden="true">
        {scene.callouts.map((c, i) => (
          <div
            key={`${scene.key}-${i}`}
            ref={(el) => {
              calloutRefs.current[i] = el;
            }}
            className={`sc-callout flex items-center gap-3 rounded-xl border border-line bg-surface px-3.5 py-3 shadow-[0_14px_30px_-22px_rgb(11_32_27/0.4)] ${i === 1 ? "justify-self-end" : ""}`}
            style={{ "--k": i } as CSSProperties}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-on-brand">
              <Icon name={c.icon} className="h-[18px] w-[18px]" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.82rem] font-semibold text-ink">{c.title}</span>
              <span className="block truncate text-[0.7rem] text-subtle">{c.sub}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Connectors */}
      <svg className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible" aria-hidden="true">
        {(wires.k === active ? wires.list : []).map((w, i) => (
          <g key={`${active}-${i}-${w.d}`} className={motionOk ? "sc-wire" : ""}>
            <path d={w.d} fill="none" stroke="var(--brand-strong)" strokeWidth="2" pathLength={1} />
            <circle cx={w.x} cy={w.y} r="4.5" fill="var(--brand-strong)" stroke="var(--surface)" strokeWidth="2" />
          </g>
        ))}
      </svg>

      {/* Product window */}
      <div ref={windowRef} className="card brackets relative overflow-hidden shadow-[0_40px_80px_-44px_rgb(11_32_27/0.4)]">
        <div className="flex items-center gap-3 bg-navy px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          </div>
          <p className="mx-auto flex min-w-0 items-center gap-1.5 truncate rounded-md bg-white/10 px-3 py-1 font-mono text-[0.66rem] text-white/70">
            <Icon name="lock" className="h-3 w-3 shrink-0 text-brand" />
            eclipticlink://<span className="text-white">{scene.path}</span>
          </p>
          <span className="hidden font-mono text-[0.56rem] uppercase tracking-wider text-white/55 sm:block">Illustrative</span>
        </div>

        <div className="grid grid-cols-[2.75rem_1fr]">
          <nav className="flex flex-col items-center gap-2 bg-navy py-3" aria-hidden="true">
            {SCENES.map((s, i) => (
              <span
                key={s.key}
                className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors duration-300 ${
                  i === active ? "bg-brand text-on-brand" : "text-white/55"
                }`}
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </span>
            ))}
          </nav>
          <div className="min-w-0 bg-bg-elevated p-3.5 sm:p-4" id="hero-scene" role="tabpanel" aria-label={scene.tab}>
            <div key={`head-${scene.key}`} className="sc-in mb-3 flex items-center gap-3" style={{ "--k": 0 } as CSSProperties}>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Icon name={scene.icon} className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.82rem] font-semibold text-ink">{scene.page.title}</p>
                <p className="truncate text-[0.64rem] text-subtle">{scene.page.sub}</p>
              </div>
              <span className="ml-auto flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.6rem] text-secure-ink">
                <span className="live-dot" aria-hidden="true" />
                {scene.page.chip}
              </span>
            </div>
            <div key={scene.key} className="min-h-[13.25rem]">
              <View />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="hero-under">
      <div role="tablist" aria-label="Service tour" className="mt-4 grid grid-cols-5 gap-1">
        {SCENES.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="hero-scene"
              onClick={() => setActive(i)}
              className={`relative flex items-center justify-center gap-1.5 pb-1 pt-3 text-[0.72rem] font-medium transition-colors sm:justify-start sm:text-[0.8rem] ${
                on ? "text-ink" : "text-subtle hover:text-ink"
              }`}
            >
              <span className="absolute inset-x-0 top-0 h-px bg-line-strong" aria-hidden="true" />
              {on ? (
                <span
                  key={`bar-${active}`}
                  className="sc-progress absolute inset-x-0 top-0 h-[3px] bg-brand-strong"
                  style={{
                    animationDuration: `${SCENE_MS}ms`,
                    animationPlayState: running ? "running" : "paused",
                    ...(motionOk ? {} : { animationName: "none", transform: "none" }),
                  }}
                  onAnimationEnd={next}
                  aria-hidden="true"
                />
              ) : null}
              <Icon name={s.icon} className={`hidden h-4 w-4 sm:block ${on ? "text-accent" : ""}`} />
              <span className="truncate">{s.tab}</span>
            </button>
          );
        })}
      </div>

      {/* Caption */}
      <div
        key={`cap-${scene.key}`}
        className="sc-in mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        style={{ "--k": 1 } as CSSProperties}
      >
        <p className="max-w-md text-base font-semibold leading-snug tracking-tight text-ink" title={scene.body}>
          {scene.title}
        </p>
        <Link
          href={`/services/${scene.service}`}
          className="link-arrow group shrink-0 rounded-lg border border-accent/30 px-3.5 py-2 text-[0.8rem] transition-colors hover:bg-accent-soft"
        >
          Explore {scene.tab}
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </Link>
      </div>
      </div>
    </div>
  );
}

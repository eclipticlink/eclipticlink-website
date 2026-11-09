"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { services } from "../../services/data";
import { Icon, type Icons } from "../icons";

/*
 * Every service as a live session.
 *
 * Left: the services as an accordion. The open one shows its summary, its
 * capabilities and a link. Right: a session panel for that service, a
 * three-step flow and a terminal that types out what the work looks like.
 *
 * - Advances on its own every STEP_MS, driven by the progress bar's
 *   animationend (one clock). Hover or focus anywhere in the section pauses
 *   it, and it only runs while on screen.
 * - Reduced motion: no auto-advance, lines shown in full.
 * - Session content is illustrative sample data.
 */

type IconKey = keyof typeof Icons;
const STEP_MS = 7500;

type Session = {
  name: string;
  chip: string;
  tone: "secure" | "threat";
  flow: [{ label: string; sub: string; icon: IconKey }, { label: string; sub: string; icon: IconKey }, { label: string; sub: string; icon: IconKey }];
  lines: string[];
};

const SESSIONS: Record<string, Session> = {
  "managed-detection-response": {
    name: "Live triage",
    chip: "Monitoring",
    tone: "secure",
    flow: [
      { label: "EDR alert", sub: "T1059.001", icon: "laptop" },
      { label: "AI triage", sub: "ATT&CK mapped", icon: "brain" },
      { label: "Analyst", sub: "Verified", icon: "user" },
    ],
    lines: [
      "$ triage alert --id 48213",
      "AI: encoded PowerShell from Office macro",
      "AI: related events correlated across 3 hosts",
      "$ escalate --to analyst --priority high",
      "Analyst: verified. Host isolated, playbook running",
    ],
  },
  "penetration-testing": {
    name: "Web app test",
    chip: "In scope",
    tone: "secure",
    flow: [
      { label: "Tester", sub: "Authorized", icon: "user" },
      { label: "Target API", sub: "/api/invoices", icon: "server" },
      { label: "Finding", sub: "CVSS 8.1", icon: "file" },
    ],
    lines: [
      "$ scope verify --target app.example.com",
      "Testing /api/invoices/{id} for broken access",
      "IDOR confirmed: invoice readable cross-tenant",
      "$ report add --cvss 8.1 --poc steps.md",
      "Logged with proof-of-concept and fix guidance",
    ],
  },
  "ai-security": {
    name: "LLM red team",
    chip: "Testing",
    tone: "secure",
    flow: [
      { label: "Attack prompt", sub: "Indirect", icon: "file" },
      { label: "Guardrail", sub: "LLM gateway", icon: "shield-check" },
      { label: "Model", sub: "Instructions intact", icon: "bot" },
    ],
    lines: [
      "$ redteam run --suite owasp-llm-top-10",
      "LLM01 indirect injection via PDF ... blocked",
      "LLM02 system prompt extraction ... blocked",
      "LLM06 agent tool call out of scope ... refused",
      "Report: reproducible prompts + guardrail fixes",
    ],
  },
  "cloud-security": {
    name: "Posture scan",
    chip: "Read-only",
    tone: "secure",
    flow: [
      { label: "AWS account", sub: "Read-only role", icon: "cloud" },
      { label: "Posture engine", sub: "Attack paths", icon: "radar" },
      { label: "Pull request", sub: "Terraform fix", icon: "git" },
    ],
    lines: [
      "$ posture scan --provider aws --mode read-only",
      "Inventory: EC2, IAM, S3 and EKS discovered",
      "Attack path: public EC2 > IAM role > S3 bucket",
      "$ iac fix --open-pr terraform/s3.tf",
      "Pull request opened: restrict bucket policy",
    ],
  },
  "vulnerability-management": {
    name: "Exposure queue",
    chip: "Continuous",
    tone: "secure",
    flow: [
      { label: "Scanners", sub: "External + internal", icon: "scan" },
      { label: "Risk engine", sub: "Exploitability", icon: "brain" },
      { label: "Ticket", sub: "Owner + SLA", icon: "check" },
    ],
    lines: [
      "$ scan external --surface all",
      "Findings ingested from 4 scanners",
      "Ranked by exploitability and asset value",
      "Top 12 pushed to Jira with owners and SLAs",
      "Patch SLA tracking enabled",
    ],
  },
  "compliance-grc": {
    name: "SOC 2 readiness",
    chip: "Mapping",
    tone: "secure",
    flow: [
      { label: "Controls", sub: "Trust criteria", icon: "shield-check" },
      { label: "Evidence", sub: "Collected", icon: "file" },
      { label: "Auditor", sub: "Shared library", icon: "user" },
    ],
    lines: [
      "$ gap-assess --framework soc2",
      "CC6.1 logical access: evidence collected",
      "CC7.2 monitoring: gap found, owner assigned",
      "Policies drafted: access, change, incident",
      "Evidence library shared with auditor",
    ],
  },
  "incident-response": {
    name: "Active incident",
    chip: "Responding",
    tone: "threat",
    flow: [
      { label: "Affected host", sub: "Isolated", icon: "laptop" },
      { label: "Responder", sub: "Forensics", icon: "user" },
      { label: "Contained", sub: "Access removed", icon: "shield-check" },
    ],
    lines: [
      "$ ir open --severity critical",
      "Isolating affected host from the network",
      "Memory and disk captured for forensics",
      "Attacker access removed, credentials rotated",
      "Timeline and root-cause report in progress",
    ],
  },
  "application-security": {
    name: "CI pipeline",
    chip: "On every PR",
    tone: "secure",
    flow: [
      { label: "Pull request", sub: "feature/payments", icon: "git" },
      { label: "Security checks", sub: "SAST, SCA, secrets", icon: "code" },
      { label: "Merge", sub: "Checks passed", icon: "check" },
    ],
    lines: [
      "$ git push origin feature/payments",
      "SAST: 1 high, unsanitized input in /checkout",
      "SCA: vulnerable dependency, upgrade suggested",
      "Secrets scan: clean",
      "Fix applied, checks passed, ready to merge",
    ],
  },
};

export function ServiceScroller() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
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
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const s = services[active];
  const session = SESSIONS[s.id];
  const running = motionOk && onScreen && !paused;
  const threat = session.tone === "threat";

  return (
    <div
      ref={rootRef}
      className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 [&>*]:min-w-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Accordion */}
      <ol className="relative border-l border-line" role="list">
        {services.map((svc, i) => {
          const on = i === active;
          return (
            <li key={svc.id} className="relative">
              <span
                className={`absolute -left-px top-0 h-full w-[3px] origin-top bg-brand-strong transition-transform duration-500 ease-out ${
                  on ? "scale-y-100" : "scale-y-0"
                }`}
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={on}
                aria-controls={`svc-panel-${svc.id}`}
                className="group flex w-full items-center gap-4 py-3 pl-6 text-left"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                    on ? "bg-brand text-on-brand" : "bg-surface-2 text-subtle group-hover:text-accent"
                  }`}
                >
                  <Icon name={svc.icon} className="h-[18px] w-[18px]" />
                </span>
                <span
                  className={`text-lg font-semibold tracking-tight transition-colors duration-300 sm:text-xl ${
                    on ? "text-ink" : "text-subtle group-hover:text-ink"
                  }`}
                >
                  {svc.title}
                </span>
              </button>
              <div id={`svc-panel-${svc.id}`} className={`acc ${on ? "is-open" : ""}`}>
                <div>
                  <div className="pb-5 pl-[4.75rem] pr-2">
                    <p className="text-[0.95rem] leading-relaxed text-muted">{svc.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" role="list">
                      {svc.subServices.map((sub) => (
                        <li
                          key={sub.id}
                          className="rounded-full border border-accent/25 bg-accent-soft px-3 py-1 text-[0.78rem] font-medium text-accent"
                        >
                          {sub.title}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services/${svc.id}`} className="link-arrow group mt-4" tabIndex={on ? 0 : -1}>
                      Learn more
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Session panel */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="card relative overflow-hidden rounded-2xl shadow-[0_40px_80px_-48px_rgb(11_32_27/0.45)]">
          <div className="flex items-center gap-3 bg-navy px-5 py-3.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-on-brand">
              <Icon name={s.icon} className="h-4 w-4" />
            </span>
            <p className="font-mono text-sm font-medium text-white">{session.name}</p>
            <span
              className={`ml-auto flex items-center gap-2 rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] ${
                threat ? "border-threat/60 bg-threat/25 text-white" : "border-brand/50 bg-brand/15 text-brand"
              }`}
            >
              <span className={`live-dot ${threat ? "live-dot-threat" : ""}`} aria-hidden="true" />
              {session.chip}
            </span>
          </div>

          <div key={s.id} className="p-5">
            {/* Flow */}
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-2">
              {session.flow.map((n, i) => (
                <div key={n.label} className="contents">
                  {i > 0 ? <span className="flow-dash mt-5 h-0.5 w-8 sm:w-14" aria-hidden="true" /> : null}
                  <div className="sc-in flex flex-col items-center text-center" style={{ "--k": i * 2 } as CSSProperties}>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border-2 ${
                        i === 1
                          ? "border-brand-strong bg-brand-strong text-white"
                          : threat && i === 0
                            ? "border-threat/40 bg-threat-soft text-threat"
                            : "border-accent/30 bg-accent-soft text-accent"
                      }`}
                    >
                      <Icon name={n.icon} className="h-5 w-5" />
                    </span>
                    <span className="mt-2 font-mono text-[0.72rem] font-medium text-ink">{n.label}</span>
                    <span className="text-[0.66rem] text-subtle">{n.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal */}
            <div className="mt-5 min-h-[11.5rem] rounded-xl border border-line bg-bg-elevated p-4 font-mono text-[0.74rem] leading-6">
              {session.lines.map((l, k) => (
                <p
                  key={l}
                  className={`${motionOk ? "type-line" : ""} truncate ${
                    l.startsWith("$") ? "text-ink" : threat ? "text-muted" : "text-muted"
                  }`}
                  style={{ "--k": k } as CSSProperties}
                >
                  {l.startsWith("$") ? (
                    <>
                      <span className="text-accent">$</span>
                      {l.slice(1)}
                    </>
                  ) : (
                    l
                  )}
                </p>
              ))}
              <span className="cursor mt-1 inline-block h-3.5 w-2 bg-accent align-middle" aria-hidden="true" />
            </div>

            {/* Progress */}
            <div className="mt-5 h-1 overflow-hidden rounded-full bg-tint" aria-hidden="true">
              <div
                key={`p-${active}`}
                className="sc-progress h-full bg-brand-strong"
                style={{
                  animationDuration: `${STEP_MS}ms`,
                  animationPlayState: running ? "running" : "paused",
                  ...(motionOk ? {} : { animationName: "none" }),
                }}
                onAnimationEnd={() => setActive((a) => (a + 1) % services.length)}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-8 gap-1.5" aria-hidden="true">
          {services.map((svc, i) => (
            <span
              key={svc.id}
              className={`h-1 rounded-full transition-colors duration-300 ${i <= active ? "bg-brand-strong" : "bg-line-strong"}`}
            />
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-subtle">Illustrative example. Commands and findings are sample data.</p>
      </div>
    </div>
  );
}

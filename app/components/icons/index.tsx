import type { SVGProps } from "react";
import type { IconName } from "../../services/data";

type Props = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const Icons: Record<IconName | "shield" | "arrow" | "check" | "lock" | "bolt" | "eye" | "alert", (p: Props) => React.ReactElement> = {
  radar: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 12l6.4-6.4" />
      <circle cx="16" cy="9" r="1" fill="currentColor" />
    </svg>
  ),
  target: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  ),
  brain: (p) => (
    <svg {...base} {...p}>
      <path d="M9 4a3 3 0 0 0-3 3v.2A3 3 0 0 0 4 10a3 3 0 0 0 1 2.2A3 3 0 0 0 6 17a3 3 0 0 0 3 3V4z" />
      <path d="M15 4a3 3 0 0 1 3 3v.2A3 3 0 0 1 20 10a3 3 0 0 1-1 2.2A3 3 0 0 1 18 17a3 3 0 0 1-3 3V4z" />
      <path d="M9 9h2M13 9h2M9 14h2M13 14h2" />
    </svg>
  ),
  cloud: (p) => (
    <svg {...base} {...p}>
      <path d="M7 18a4 4 0 0 1-.6-7.96A6 6 0 0 1 18 9.5a4.25 4.25 0 0 1-.5 8.5H7z" />
      <path d="M10.5 13.5l1.5 1.5 3-3" />
    </svg>
  ),
  scan: (p) => (
    <svg {...base} {...p}>
      <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
      <path d="M4 12h16" />
    </svg>
  ),
  "shield-check": (p) => (
    <svg {...base} {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  siren: (p) => (
    <svg {...base} {...p}>
      <path d="M7 18v-6a5 5 0 0 1 10 0v6" />
      <path d="M5 18h14v3H5zM12 3v2M4.2 6.2l1.4 1.4M19.8 6.2l-1.4 1.4" />
    </svg>
  ),
  code: (p) => (
    <svg {...base} {...p}>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
    </svg>
  ),
  shield: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
    </svg>
  ),
  arrow: (p) => (
    <svg {...base} strokeWidth={2} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  check: (p) => (
    <svg {...base} strokeWidth={2} {...p}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  ),
  lock: (p) => (
    <svg {...base} {...p}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  ),
  bolt: (p) => (
    <svg {...base} {...p}>
      <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" />
    </svg>
  ),
  eye: (p) => (
    <svg {...base} {...p}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  alert: (p) => (
    <svg {...base} {...p}>
      <path d="M12 4l9 16H3l9-16z" />
      <path d="M12 10v4M12 17.5v.01" />
    </svg>
  ),
};

export function Icon({ name, ...props }: { name: keyof typeof Icons } & Props) {
  const C = Icons[name];
  return <C {...props} />;
}

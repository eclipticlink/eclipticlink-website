/*
 * Line-art motifs that sit in a section's gutter (the Omnipriv edge motifs):
 * radar, network, lock and fingerprint, drawn in hairline teal. Decorative,
 * hidden below lg so they never crowd small screens. One part of each turns
 * slowly once the page has settled (html.ambient).
 */

type Kind = "radar" | "network" | "lock" | "fingerprint";

function Radar() {
  return (
    <>
      {[60, 110, 160, 210].map((r) => (
        <circle key={r} cx="220" cy="220" r={r} fill="none" stroke="currentColor" strokeDasharray={r === 210 ? "2 8" : undefined} />
      ))}
      <path d="M220 10V430M10 220H430" stroke="currentColor" strokeDasharray="2 6" />
      <g className="motif-spin">
        <path d="M220 220L368 72" stroke="currentColor" strokeWidth="2" />
        <circle cx="220" cy="220" r="210" fill="none" stroke="transparent" />
      </g>
      <circle cx="300" cy="150" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="300" cy="150" r="2.5" fill="currentColor" />
      <circle cx="140" cy="300" r="4" fill="currentColor" />
    </>
  );
}

function Network() {
  const nodes = [
    [80, 120],
    [220, 60],
    [360, 130],
    [140, 260],
    [300, 280],
    [220, 380],
  ];
  return (
    <>
      <circle className="motif-spin" cx="220" cy="220" r="200" fill="none" stroke="currentColor" strokeDasharray="1 9" />
      {[
        [0, 1],
        [1, 2],
        [0, 3],
        [1, 3],
        [2, 4],
        [3, 4],
        [3, 5],
        [4, 5],
      ].map(([a, b]) => (
        <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="currentColor" />
      ))}
      {nodes.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="14" fill="var(--bg)" stroke="currentColor" strokeWidth="1.5" />
      ))}
      <path d="M212 252l8 8 14-16" fill="none" stroke="currentColor" strokeWidth="2" transform="translate(-80 8)" />
    </>
  );
}

function Lock() {
  return (
    <>
      <circle className="motif-spin" cx="220" cy="220" r="205" fill="none" stroke="currentColor" strokeDasharray="10 6" />
      <circle cx="220" cy="220" r="170" fill="none" stroke="currentColor" />
      <circle cx="220" cy="170" r="50" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="220" cy="160" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M220 174v20M220 220v60M160 120l-60-60M280 120l60-60" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="220" cy="296" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="96" cy="56" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="344" cy="56" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </>
  );
}

function Fingerprint() {
  return (
    <>
      {[40, 70, 100, 130].map((r, i) => (
        <path
          key={r}
          d={`M${220 - r} 250 a${r} ${r} 0 0 1 ${r * 2} 0 v${40 - i * 8}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray={i % 2 ? "14 8" : undefined}
        />
      ))}
      <path d="M220 230v110" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="330" cy="340" r="36" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M314 340l11 11 21-22" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </>
  );
}

const ART: Record<Kind, () => React.ReactElement> = {
  radar: Radar,
  network: Network,
  lock: Lock,
  fingerprint: Fingerprint,
};

export function EdgeMotif({ kind, side }: { kind: Kind; side: "left" | "right" }) {
  const Art = ART[kind];
  return (
    <svg
      viewBox="0 0 440 440"
      className={`motif pointer-events-none absolute top-16 hidden h-[26rem] w-[26rem] lg:block ${
        side === "left" ? "-left-48" : "-right-48"
      }`}
      aria-hidden="true"
      focusable="false"
    >
      <Art />
    </svg>
  );
}

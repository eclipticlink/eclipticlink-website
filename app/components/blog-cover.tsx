/*
 * Generated cover art for articles: deep teal ground, an engineering grid, a
 * soft glow and one neon line-art motif chosen by category. Each article
 * shifts the glow and the network so no two covers are identical. Pure SVG,
 * so it ships no image bytes and is always on-brand. Replace with a real image
 * per post by passing one through the post data later if wanted.
 */

type Motif = "ai" | "radar" | "target" | "compliance" | "cloud" | "incident" | "mcp" | "agent" | "prompt";

const BY_CATEGORY: Record<string, Motif> = {
  "AI Security": "ai",
  "Detection & Response": "radar",
  "Offensive Security": "target",
  Compliance: "compliance",
  "Cloud Security": "cloud",
  "Incident Response": "incident",
};

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/* Article-specific motifs win over the category, so related posts never look alike */
function motifFor(category: string, seed: string): Motif {
  if (seed.includes("mcp")) return "mcp";
  if (seed.includes("agent")) return "agent";
  if (seed.includes("prompt")) return "prompt";
  return BY_CATEGORY[category] ?? "radar";
}

/* Teal grounds, one per article */
const GROUNDS = ["#04302a", "#053b34", "#0a3a2c", "#043640", "#06332f", "#0b4034"];

const NEON = "#34f5b0";
const SOFT = "rgb(52 245 176 / 0.35)";

function AiMotif() {
  const pins = [-36, -18, 0, 18, 36];
  return (
    <g>
      <circle r="78" fill="none" stroke={SOFT} strokeDasharray="2 6" />
      <circle r="58" fill="none" stroke={SOFT} />
      {pins.map((d) => (
        <g key={d} stroke={NEON} strokeWidth="1.5">
          <path d={`M${d} -34v-14M${d} 34v14M-34 ${d}h-14M34 ${d}h14`} />
        </g>
      ))}
      <rect x="-34" y="-34" width="68" height="68" rx="10" fill="#063a31" stroke={NEON} strokeWidth="2" />
      <text x="0" y="8" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="22" fontWeight="700" fill={NEON}>
        AI
      </text>
    </g>
  );
}

function RadarMotif() {
  return (
    <g>
      {[30, 55, 80].map((r) => (
        <circle key={r} r={r} fill="none" stroke={SOFT} />
      ))}
      <path d="M-86 0H86M0 -86V86" stroke={SOFT} strokeDasharray="2 5" />
      <path d="M0 0L57 -57" stroke={NEON} strokeWidth="2.5" />
      <path d="M0 0L57 -57A80 80 0 0 1 80 0Z" fill="rgb(52 245 176 / 0.16)" />
      <circle cx="38" cy="-20" r="5" fill={NEON} />
      <circle cx="-30" cy="42" r="4" fill="#ff8796" />
      <circle cx="-48" cy="-28" r="3.5" fill={NEON} />
    </g>
  );
}

function TargetMotif() {
  return (
    <g>
      <circle r="70" fill="none" stroke={SOFT} />
      <circle r="44" fill="none" stroke={NEON} strokeWidth="2" />
      <circle r="16" fill="none" stroke={NEON} strokeWidth="2" />
      <circle r="4" fill={NEON} />
      <path d="M0 -90V-52M0 52V90M-90 0H-52M52 0H90" stroke={NEON} strokeWidth="2" />
      <path d="M40 -66l22 0 0 22" fill="none" stroke={SOFT} strokeWidth="2" />
      <path d="M-40 66l-22 0 0 -22" fill="none" stroke={SOFT} strokeWidth="2" />
    </g>
  );
}

function ComplianceMotif() {
  return (
    <g>
      <rect x="-50" y="-66" width="100" height="132" rx="10" fill="#063a31" stroke={NEON} strokeWidth="2" />
      {[-38, -12, 14].map((y, i) => (
        <g key={y}>
          <rect x="-34" y={y} width="16" height="16" rx="3" fill="none" stroke={NEON} strokeWidth="1.5" />
          {i < 2 ? <path d={`M-31 ${y + 8}l4 4 7-8`} fill="none" stroke={NEON} strokeWidth="2" /> : null}
          <path d={`M-10 ${y + 8}H34`} stroke={SOFT} strokeWidth="2" />
        </g>
      ))}
      <path d="M44 22l26 10v18c0 16-11 28-26 34-15-6-26-18-26-34V32z" fill="#04302a" stroke={NEON} strokeWidth="2" />
      <path d="M33 52l8 8 14-15" fill="none" stroke={NEON} strokeWidth="2.5" />
    </g>
  );
}

function CloudMotif() {
  return (
    <g>
      <path
        d="M-58 24a30 30 0 0 1 4-60 42 42 0 0 1 80-6 30 30 0 0 1 32 66z"
        fill="#063a31"
        stroke={NEON}
        strokeWidth="2"
      />
      <path d="M-14 -8l14-6 14 6v10c0 10-6 17-14 21-8-4-14-11-14-21z" fill="none" stroke={NEON} strokeWidth="2" />
      <path d="M-6 3l5 5 8-9" fill="none" stroke={NEON} strokeWidth="2" />
      {[-60, 0, 60].map((x) => (
        <g key={x}>
          <path d={`M${x} 24V58`} stroke={SOFT} strokeWidth="1.5" strokeDasharray="3 4" />
          <rect x={x - 16} y="58" width="32" height="20" rx="4" fill="#04302a" stroke={NEON} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  );
}

function IncidentMotif() {
  const hex = (r: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 2;
      return `${(r * Math.cos(a)).toFixed(1)},${(r * Math.sin(a)).toFixed(1)}`;
    }).join(" ");
  return (
    <g>
      <polygon points={hex(84)} fill="none" stroke={SOFT} strokeDasharray="3 5" />
      <polygon points={hex(62)} fill="none" stroke={NEON} strokeWidth="1.5" />
      <polygon points={hex(40)} fill="#063a31" stroke="#ff8796" strokeWidth="2" />
      <path d="M0 -16v18" stroke="#ff8796" strokeWidth="3" strokeLinecap="round" />
      <circle cy="12" r="2.5" fill="#ff8796" />
    </g>
  );
}

function McpMotif() {
  const ends = [
    [-92, -52],
    [92, -52],
    [-92, 52],
    [92, 52],
  ];
  return (
    <g>
      {ends.map(([x, y]) => (
        <g key={`${x}${y}`}>
          <path d={`M0 0L${x * 0.62} ${y * 0.62}`} stroke={NEON} strokeWidth="2" strokeDasharray="4 4" />
          <rect x={x - 18} y={y - 13} width="36" height="26" rx="6" fill="#04302a" stroke={NEON} strokeWidth="1.5" />
          <path d={`M${x - 8} ${y - 2}h16M${x - 8} ${y + 4}h10`} stroke={SOFT} strokeWidth="1.5" />
        </g>
      ))}
      <circle r="30" fill="#063a31" stroke={NEON} strokeWidth="2" />
      <path d="M-9 -12v8M9 -12v8M-14 -4h28v6a14 14 0 0 1-28 0z M0 16v10" fill="none" stroke={NEON} strokeWidth="2" />
      <circle cx="92" cy="52" r="20" fill="none" stroke="#ff8796" strokeWidth="1.5" strokeDasharray="3 3" />
    </g>
  );
}

function AgentMotif() {
  const tools = [
    [-82, -40, "M-6 -6h12v12h-12z"],
    [82, -40, "M-7 0h14M0 -7v14"],
    [-82, 46, "M-7 -4l7 7 7-7"],
    [82, 46, "M-6 6l12-12M-2 -6h8v8"],
  ] as const;
  return (
    <g>
      <circle r="76" fill="none" stroke={SOFT} strokeDasharray="2 6" />
      {tools.map(([x, y, d]) => (
        <g key={`${x}${y}`}>
          <path d={`M0 0L${x} ${y}`} stroke={SOFT} strokeWidth="1.5" />
          <circle cx={x} cy={y} r="17" fill="#04302a" stroke={NEON} strokeWidth="1.5" />
          <path d={d} transform={`translate(${x} ${y})`} fill="none" stroke={NEON} strokeWidth="2" />
        </g>
      ))}
      <rect x="-30" y="-24" width="60" height="50" rx="12" fill="#063a31" stroke={NEON} strokeWidth="2" />
      <path d="M0 -24v-14" stroke={NEON} strokeWidth="2" />
      <circle cy="-40" r="4" fill={NEON} />
      <circle cx="-11" cy="0" r="4.5" fill={NEON} />
      <circle cx="11" cy="0" r="4.5" fill={NEON} />
      <path d="M-10 13h20" stroke={NEON} strokeWidth="2" />
    </g>
  );
}

function PromptMotif() {
  return (
    <g>
      <rect x="-98" y="-62" width="196" height="124" rx="12" fill="#063a31" stroke={NEON} strokeWidth="2" />
      <path d="M-98 -40h196" stroke={SOFT} />
      {[-82, -70, -58].map((x) => (
        <circle key={x} cx={x} cy="-51" r="3" fill={SOFT} />
      ))}
      <rect x="-82" y="-26" width="104" height="16" rx="8" fill="rgb(52 245 176 / 0.18)" />
      <rect x="-22" y="-2" width="104" height="16" rx="8" fill="rgb(255 255 255 / 0.12)" />
      <rect x="-82" y="22" width="150" height="16" rx="8" fill="rgb(255 135 150 / 0.22)" stroke="#ff8796" strokeWidth="1.5" />
      <text x="-74" y="34" fontFamily="ui-monospace, monospace" fontSize="10" fill="#ff8796">
        ignore previous instructions
      </text>
      <path d="M74 22l14 6v9c0 8-6 14-14 17-8-3-14-9-14-17v-9z" fill="#04302a" stroke={NEON} strokeWidth="2" />
      <path d="M68 36l5 5 8-9" fill="none" stroke={NEON} strokeWidth="2" />
    </g>
  );
}

const MOTIFS: Record<Motif, () => React.ReactElement> = {
  mcp: McpMotif,
  agent: AgentMotif,
  prompt: PromptMotif,
  ai: AiMotif,
  radar: RadarMotif,
  target: TargetMotif,
  compliance: ComplianceMotif,
  cloud: CloudMotif,
  incident: IncidentMotif,
};

export function BlogCover({ category, seed, className = "" }: { category: string; seed: string; className?: string }) {
  const Motif = MOTIFS[motifFor(category, seed)];
  const h = hash(seed);
  const id = `bc-${h.toString(36)}`;
  const gx = 140 + (h % 120); // glow centre varies per article
  const cx = 150 + (h % 100);
  const nodes = Array.from({ length: 7 }, (_, i) => {
    const r = hash(seed + i);
    return { x: 20 + (r % 360), y: 18 + ((r >> 8) % 184), lit: r % 3 === 0 };
  });

  return (
    <div className={`overflow-hidden bg-deep ${className}`}>
      <svg
        viewBox="0 0 400 220"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <radialGradient id={`${id}-glow`} cx={gx / 400} cy="0.5" r="0.55">
            <stop offset="0" stopColor="#34f5b0" stopOpacity="0.32" />
            <stop offset="1" stopColor="#34f5b0" stopOpacity="0" />
          </radialGradient>
          <pattern id={`${id}-grid`} width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M22 0H0V22" fill="none" stroke="rgb(255 255 255 / 0.06)" />
          </pattern>
          <filter id={`${id}-neon`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="400" height="220" fill={GROUNDS[h % GROUNDS.length]} />
        <rect width="400" height="220" fill={`url(#${id}-grid)`} />
        <rect width="400" height="220" fill={`url(#${id}-glow)`} />
        {nodes.map((n, i) => (
          <g key={i}>
            <path d={`M${n.x} ${n.y}L${cx} 110`} stroke="rgb(52 245 176 / 0.14)" strokeDasharray="2 4" />
            <circle cx={n.x} cy={n.y} r={n.lit ? 3 : 2} fill={n.lit ? NEON : "rgb(255 255 255 / 0.35)"} />
          </g>
        ))}
        <g transform={`translate(${cx} 110)`} filter={`url(#${id}-neon)`}>
          <Motif />
        </g>
      </svg>
    </div>
  );
}

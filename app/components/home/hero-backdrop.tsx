import type { CSSProperties } from "react";

/*
 * Hero ground.
 *
 * Left: plain white with a faint engineering grid, so the headline reads
 * cleanly. Right (lg and up): a deep green-navy slab with a soft brand glow
 * behind the product tour, on which a live network grid runs: signals travel
 * along the grid lines and a few intersections ping. Two flash red as a
 * threat, then settle to teal once blocked. On small screens the same network
 * runs, more quietly, on the white ground.
 *
 * Pure CSS (off the main thread); streaks are removed for reduced motion.
 */

const GRID = 56;

type Tone = "teal" | "blue";
/* [row | column, duration s, delay s, tone] */
const H_STREAKS: [number, number, number, Tone][] = [
  [2, 6, 0, "teal"],
  [4, 8, 2.4, "blue"],
  [6, 5.5, 1.1, "teal"],
  [8, 7, 3.6, "teal"],
  [10, 9, 0.6, "blue"],
  [12, 6.5, 2.9, "teal"],
  [14, 7.5, 4.6, "teal"],
];
const V_STREAKS: [number, number, number, Tone][] = [
  [2, 6, 1, "teal"],
  [5, 7.5, 3.2, "blue"],
  [8, 6.5, 0.3, "teal"],
  [11, 8.5, 2, "teal"],
  [14, 7, 4.2, "blue"],
];
/* [column, row, kind, delay s] */
const NODES: [number, number, "ok" | "threat", number][] = [
  [2, 3, "ok", 0],
  [5, 2, "threat", 1.4],
  [9, 4, "ok", 2.6],
  [12, 7, "ok", 0.8],
  [3, 12, "threat", 3.8],
  [8, 14, "ok", 2],
  [13, 13, "ok", 4.4],
];

function Network({ dark }: { dark: boolean }) {
  const tone = (t: Tone) => (t === "blue" ? (dark ? "bg-[#a7f3d0]" : "bg-brand") : dark ? "bg-[#34f5b0]" : "bg-brand-strong");
  return (
    <>
      {H_STREAKS.map(([row, dur, delay, t]) => (
        <span
          key={`h${row}`}
          className={`streak streak-x ${tone(t)}`}
          style={{ top: row * GRID - 1, "--dur": `${dur}s`, "--delay": `${delay}s` } as CSSProperties}
        />
      ))}
      {V_STREAKS.map(([col, dur, delay, t]) => (
        <span
          key={`v${col}`}
          className={`streak streak-y ${tone(t)}`}
          style={{ left: col * GRID - 1, "--dur": `${dur}s`, "--delay": `${delay}s` } as CSSProperties}
        />
      ))}
      {NODES.map(([col, row, kind, delay]) => (
        <span
          key={`n${col}-${row}`}
          className={`grid-node ${kind === "threat" ? "is-threat" : ""} ${dark ? "on-dark" : ""}`}
          style={{ left: col * GRID, top: row * GRID, "--delay": `${delay}s` } as CSSProperties}
        />
      ))}
    </>
  );
}

/* Neon radar for inner-page heroes, centred on the slab */
function SlabRadar() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute left-1/2 top-1/2 h-[min(30rem,90%)] w-[min(30rem,90%)] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="slab-neon" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#slab-neon)">
        {[60, 110, 160, 190].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="rgb(52 245 176 / 0.35)" strokeDasharray={r === 190 ? "3 7" : undefined} />
        ))}
        <path d="M200 10V390M10 200H390" stroke="rgb(52 245 176 / 0.2)" strokeDasharray="2 6" />
        <g className="radar-arm">
          <path d="M200 200L200 40" stroke="#34f5b0" strokeWidth="2.5" />
          <path d="M200 200L200 40A160 160 0 0 1 313 87Z" fill="rgb(52 245 176 / 0.14)" />
        </g>
        <circle cx="200" cy="200" r="34" fill="#04302a" stroke="#34f5b0" strokeWidth="2" />
        <path d="M200 182l14 6v10c0 9-6 16-14 20-8-4-14-11-14-20v-10z" fill="none" stroke="#34f5b0" strokeWidth="2" />
        <path d="M193 200l5 5 9-10" fill="none" stroke="#34f5b0" strokeWidth="2.5" />
        {[
          [290, 120, 1.3],
          [300, 270, 2.6],
          [120, 290, 4.4],
          [110, 140, 5.6],
        ].map(([x, y, d]) => (
          <circle
            key={`${x}-${y}`}
            className="radar-blip"
            cx={x}
            cy={y}
            r="6"
            fill="#34f5b0"
            style={{ "--d": `${d}s` } as CSSProperties}
          />
        ))}
      </g>
    </svg>
  );
}

export function HeroBackdrop({ art = false }: { art?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* Faint grid across the white ground; carries the network on small screens */}
      <div className="hero-backdrop absolute inset-0 overflow-hidden">
        <div className="bg-grid bg-grid-fade absolute inset-0">
          <div className="lg:hidden">
            <Network dark={false} />
          </div>
        </div>
      </div>

      {/* The dark slab behind the product tour */}
      <div className="hero-slab absolute bottom-6 left-[calc(50%-3rem)] right-0 top-[4.75rem] hidden overflow-hidden rounded-l-[2.5rem] lg:block">
        <Network dark />
        {art ? <SlabRadar /> : null}
      </div>
    </div>
  );
}

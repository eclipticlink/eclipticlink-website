/*
 * Small inline SVG flags for the regions we serve. Emoji flags render as
 * plain letters on Windows, so these are drawn instead. Simplified for 16-24px
 * display; decorative (the country name is always shown beside them).
 */

type Code = "SA" | "AE" | "GB" | "US" | "PK";

function Star({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rr = i % 2 ? r * 0.45 : r;
    return `${(cx + rr * Math.cos(a)).toFixed(2)},${(cy + rr * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
  return <polygon points={pts} fill={fill} />;
}

const FLAGS: Record<Code, () => React.ReactElement> = {
  SA: () => (
    <>
      <rect width="30" height="20" fill="#006c35" />
      <path d="M8 7.2c1.2 1.4 2.6-.6 3.6.6s2.4-.8 3.4.4 2.4-.6 3.6.4 2 .2 3.4-.4" fill="none" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M9 13.4h12.5" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
      <path d="M21.5 12.6l1.4.8-1.4.8" fill="#fff" />
    </>
  ),
  AE: () => (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.67" fill="#00732f" />
      <rect y="13.33" width="30" height="6.67" fill="#000" />
      <rect width="8" height="20" fill="#ff0000" />
    </>
  ),
  GB: () => (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#c8102e" strokeWidth="1.4" />
      <path d="M15 0V20M0 10H30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0V20M0 10H30" stroke="#c8102e" strokeWidth="3.4" />
    </>
  ),
  US: () => (
    <>
      <rect width="30" height="20" fill="#fff" />
      {Array.from({ length: 7 }, (_, i) => (
        <rect key={i} y={(i * 20) / 6.5} width="30" height={20 / 13} fill="#b22234" />
      ))}
      <rect width="13" height={(20 / 13) * 7} fill="#3c3b6e" />
      {Array.from({ length: 12 }, (_, i) => (
        <circle key={i} cx={1.8 + (i % 4) * 3.1} cy={1.8 + Math.floor(i / 4) * 3.4} r="0.6" fill="#fff" />
      ))}
    </>
  ),
  PK: () => (
    <>
      <rect width="30" height="20" fill="#01411c" />
      <rect width="7.5" height="20" fill="#fff" />
      <circle cx="19.2" cy="10" r="5" fill="#fff" />
      <circle cx="20.6" cy="8.9" r="4.4" fill="#01411c" />
      <Star cx={21.4} cy={7.6} r={1.7} fill="#fff" />
    </>
  ),
};

export function Flag({ code, className = "h-4 w-6" }: { code: string; className?: string }) {
  const F = FLAGS[code as Code];
  if (!F) return null;
  return (
    <svg viewBox="0 0 30 20" className={`shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/10 ${className}`} aria-hidden="true" focusable="false">
      <F />
    </svg>
  );
}

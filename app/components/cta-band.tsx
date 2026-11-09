import { Icon } from "./icons";
import { Button } from "./ui/button";

/* Blips sit where the sweep arm passes them: delay = angle / 360 × 7s. */
const BLIPS = [
  { x: 380, y: 180, angle: 50 },
  { x: 410, y: 380, angle: 128 },
  { x: 210, y: 400, angle: 225 },
  { x: 160, y: 230, angle: 290 },
];

function Radar() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
      focusable="false"
    >
      {[80, 160, 240, 296].map((r) => (
        <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="var(--line)" />
      ))}
      <path d="M300 4V596M4 300H596" stroke="var(--line)" />
      <g className="radar-arm">
        <line x1="300" y1="300" x2="300" y2="4" stroke="var(--brand)" strokeWidth="1.5" />
      </g>
      {BLIPS.map((b) => (
        <circle
          key={`${b.x}-${b.y}`}
          className="radar-blip"
          cx={b.x}
          cy={b.y}
          r="4"
          fill="var(--brand)"
          style={{ "--d": `${(b.angle / 360) * 7}s` } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}

export function CtaBand({
  title = "Find out where you're exposed before an attacker does",
  body = "Start with a security assessment. We'll map your attack surface, identify your highest-risk gaps, and give you a prioritized plan, whether or not you work with us afterwards.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section
      className="theme-deep bg-deep relative overflow-hidden section-pad"
      aria-labelledby="cta-heading"
    >
      <Radar />
      <div className="container-site flow relative z-10 max-w-3xl text-center">
        <p className="eyebrow justify-center">Next step</p>
        <h2 id="cta-heading" className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">{body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/contact" size="lg">
            Get a security assessment
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
          <Button href="/services/incident-response" variant="danger" size="lg">
            Under attack? Get help now
          </Button>
        </div>
      </div>
    </section>
  );
}

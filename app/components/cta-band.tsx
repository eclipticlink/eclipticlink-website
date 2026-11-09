import { Icon } from "./icons";
import { Button } from "./ui/button";

export function CtaBand({
  title = "Find out where you're exposed before an attacker does",
  body = "Start with a security assessment. We'll map your attack surface, identify your highest-risk gaps, and give you a prioritized plan, whether or not you work with us afterwards.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-line section-pad" aria-labelledby="cta-heading">
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 50% 60% at 50% 100%, rgb(116 210 176 / 0.16), transparent 70%)" }}
      />
      <div className="container-site relative z-10 max-w-3xl text-center">
        <p className="eyebrow justify-center">Next step</p>
        <h2 id="cta-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
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

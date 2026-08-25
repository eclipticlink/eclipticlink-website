import { Button } from "../ui/button";
import { HeroAutomationVisual } from "./hero-automation-visual";

export function HomeHero() {
  return (
    <section
      className="relative flex min-h-[min(92vh,52rem)] flex-col overflow-hidden text-white sm:min-h-[min(88vh,54rem)]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0 bg-hero-mesh" aria-hidden="true" />
      <div
        className="absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 mesh-animate"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 15% 20%, rgb(116 210 176 / 0.18), transparent 55%)",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 flex flex-1 flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="text-center lg:text-left">
            <p className="eyebrow animate-fade-up">EclipticLink · Problem-first systems</p>
            <h1
              id="hero-heading"
              className="animate-fade-up-delay mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
            >
              Turn inbound interest into booked conversations
            </h1>
            <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80 lg:mx-0">
              We solve operational and growth problems through automation, AI, and
              technology - designing systems that remove manual work and keep your
              business moving.
            </p>
            <div className="animate-fade-up-delay-2 mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button href="/contact" variant="primary" size="lg">
                Book a discovery call
              </Button>
              <Button href="#what-to-fix" variant="secondary" size="lg">
                See how we work
              </Button>
            </div>
            <p className="animate-fade-up-delay-2 mt-8 text-sm text-white/55">
              Supporting businesses across the US, UK, Pakistan, Saudi Arabia, and UAE
            </p>
          </div>

          <div className="animate-fade-up-delay-2 mx-auto w-full lg:mx-0 lg:justify-self-end">
            <HeroAutomationVisual />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-brand-dark/55 px-4 py-5 backdrop-blur-md sm:px-6 sm:py-6 lg:px-8">
        <div className="container-site">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-teal/90">
              Technology follows the problem
            </p>
            <p className="max-w-2xl text-sm text-white/70">
              Automation, AI, integrations, and custom software - chosen for what you need
              to fix, not for a preferred platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

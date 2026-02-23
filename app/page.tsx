import Link from "next/link";
import { HeroBackgroundSlider } from "./components/hero-background-slider";
import { services } from "./services/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-128 overflow-hidden px-4 py-24 text-white sm:min-h-144 sm:px-6 sm:py-32 lg:min-h-160 lg:px-8"
        aria-labelledby="hero-heading"
      >
        <HeroBackgroundSlider />
        {/* Gradient overlay: image visible at top/sides, readable text in center */}
        <div
          className="absolute inset-0 z-1 bg-linear-to-b from-brand-dark/35 via-brand-dark/55 to-brand-dark/85"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-112 max-w-7xl flex-col items-center justify-center text-center sm:min-h-128 lg:min-h-144">
          <h1
            id="hero-heading"
            className="mx-auto max-w-4xl text-4xl font-bold tracking-tight drop-shadow-sm sm:text-5xl lg:text-6xl"
          >
            Making your ideas happen!
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-200 drop-shadow-sm">
            Join forces with EclipticLink, experts in customized software
            solutions and consulting. We catalyze business growth with
            intelligent strategies, innovative problem-solving, and
            sustainable delivery.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-teal px-6 text-base font-semibold text-brand-dark shadow-lg shadow-brand-dark/30 transition hover:bg-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg border-2 border-white/80 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
              Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-zinc-600">
              End-to-end software solutions to accelerate your business.
            </p>
          </div>
          <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group flex flex-col rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm transition hover:shadow-md hover:border-brand-teal-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
              >
                <h3 className="text-lg font-semibold text-brand-blue group-hover:text-brand-blue-hover">{service.title}</h3>
                <p className="mt-2 flex-1 text-zinc-600 leading-relaxed">{service.summary}</p>
                <span className="mt-4 inline-flex cursor-pointer items-center text-sm font-medium text-brand-teal transition group-hover:text-brand-teal-hover">
                  Learn more
                  <svg className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex h-11 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-blue px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue active:scale-[0.98] motion-reduce:active:scale-100"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 id="about-heading" className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
                About EclipticLink
              </h2>
              <p className="mt-4 max-w-prose text-lg leading-relaxed text-zinc-600">
                We work with startups and enterprises to solve distributed problems and achieve scalability. 
                With years of combined experience, we deliver through milestone-based and hourly-based engagement, 
                dedicated project managers, and an experienced technical team.
              </p>
              <p className="mt-4 max-w-prose text-zinc-600 leading-relaxed">
                From custom software and mobile apps to AI, cloud, big data, and UI/UX design—we help you build, scale, 
                and maintain solutions that fit your business.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex h-11 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-blue px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue active:scale-[0.98] motion-reduce:active:scale-100"
                >
                  Learn more about us
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm lg:p-8">
              <h3 className="text-lg font-semibold text-brand-blue">Why work with us</h3>
              <ul className="mt-4 space-y-3" role="list">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-dark" aria-hidden>✓</span>
                  <span className="text-zinc-600">Dedicated project managers and technical architects</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-dark" aria-hidden>✓</span>
                  <span className="text-zinc-600">Milestone-based delivery with real-time visibility</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-dark" aria-hidden>✓</span>
                  <span className="text-zinc-600">Quality assurance and business-ready solutions</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-dark" aria-hidden>✓</span>
                  <span className="text-zinc-600">Flexible engagement: fixed-scope or hourly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Value proposition */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="why-heading" className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
              Supercharge and grow your startup
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              We work with startups and assist them in solving distributed problems and help them achieve scalability.
            </p>
          </div>
          <ul className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2" role="list">
            <li className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">Dedicated support</h3>
              <p className="mt-2 text-zinc-600 leading-relaxed">Consultancy approach, dedicated experienced project manager to resolve any type of issues.</p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">Quality assurance</h3>
              <p className="mt-2 text-zinc-600 leading-relaxed">Well-defined standards for application verification and validation enable us to deliver business-ready solutions successfully.</p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">Real-time visibility</h3>
              <p className="mt-2 text-zinc-600 leading-relaxed">Our milestone-based development plans ensure optimal involvement of clients and real-time visibility on progress status.</p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">Expert team</h3>
              <p className="mt-2 text-zinc-600 leading-relaxed">Highly experienced team of project managers, technical architects, and database developers allowing us to meet unique needs.</p>
            </li>
          </ul>
          <p className="mx-auto mt-12 max-w-prose text-center text-zinc-600 leading-relaxed">
            Stand in a class apart with software consulting services tailored to your business to help you achieve 
            your enterprise objectives in rapid and iterative delivery cycles that keep you in the loop from the very first line of code.
          </p>
        </div>
      </section>

      {/* Hire Team / Staff Augmentation */}
      <section className="bg-brand-dark px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8" aria-labelledby="hire-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="hire-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Hire a dedicated team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-zinc-200">
              Scale your capacity with vetted developers and specialists. From AI and backend to mobile and DevOps—hire the right talent without the overhead.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/hire"
              className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-teal px-6 text-base font-semibold text-brand-dark shadow-sm transition hover:bg-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Hire your team
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg border-2 border-brand-teal px-6 text-base font-semibold text-white transition hover:bg-brand-teal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Get a consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Our Work / Featured solutions */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="work-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="work-heading" className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
              What we deliver
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              From concept to production—custom software, mobile apps, AI solutions, cloud infrastructure, and data pipelines.
            </p>
          </div>
          <div className="mx-auto mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-blue">AI & data solutions</h3>
              <p className="mt-2 text-zinc-600">AI integrations, chatbots, data pipelines, analytics, and ML-ready infrastructure.</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-blue">Custom software & SaaS</h3>
              <p className="mt-2 text-zinc-600">Enterprise applications, workflow tools, and scalable SaaS products built to your requirements.</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-blue">Mobile & web apps</h3>
              <p className="mt-2 text-zinc-600">Native and cross-platform mobile apps, PWAs, and modern web applications.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex h-11 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-blue px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
              Testimonials
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              What our clients say about working with EclipticLink.
            </p>
          </div>
          <div className="mx-auto mt-16 grid gap-8 md:grid-cols-3">
            <blockquote className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-zinc-700 leading-relaxed">
                EclipticLink is truly the best. Always helpful and prompt—they are great at fixing things when stuff changes and get it done quickly at a fair price.
              </p>
              <footer className="mt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-brand-blue">Steve V.</span>
                  <span className="block text-sm text-zinc-600">CEO & Founder</span>
                </cite>
              </footer>
            </blockquote>
            <blockquote className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-zinc-700 leading-relaxed">
                Worked well with EclipticLink and communication was great throughout the whole project. Would work with them again in the future and I highly recommend them.
              </p>
              <footer className="mt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-brand-blue">Artwell K.</span>
                  <span className="block text-sm text-zinc-600">CEO & Founder</span>
                </cite>
              </footer>
            </blockquote>
            <blockquote className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-zinc-700 leading-relaxed">
                EclipticLink helped with very short notice and did exactly what we needed. Much appreciate the guidance and support—will definitely be in touch for future work!
              </p>
              <footer className="mt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-brand-blue">Huzaifa Sarmad</span>
                  <span className="block text-sm text-zinc-600">CEO & Founder</span>
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="faq-heading" className="text-center text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <dl className="mt-16 space-y-8">
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                Will you be able to increase the number of people in your team if necessary?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                If you wish to partly reduce the project work intensity or, on the contrary, to increase it at times, we are always ready to adapt. When necessary, we will easily involve more team members in your project to meet your expectations.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                What control do you have over project development?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                We review project requirements, analyze them, and inform you of estimation results. Once you are fine with the cost and time, we create a project report and proposal for review. Once finalized, we move to the development stage.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                How long does it take to start my product development?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                After we review your requirements and you approve the estimation and proposal, we move quickly to the development stage. Timeline depends on scope—we will give you a clear timeline in the proposal.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                How do we assure privacy and confidentiality?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                We sign NDAs and Confidentiality Agreements as required. All our employees are full-time and bound by company Confidentiality and Non-Disclosure clauses.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                Should I be familiar with technical details to work with you?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                No. You do not need to be an expert in software development—we are. We explain unclear moments and the essence of all stages. You need a clear vision of what you want to achieve; we help make it a reality.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* CTA - Get in touch */}
      <section className="bg-brand-dark px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-zinc-200 leading-relaxed">
            Build your software product with expert teams and transparent delivery. Tell us about your project and we&apos;ll get back to you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-teal px-6 text-base font-semibold text-brand-dark shadow-sm transition hover:bg-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Get in touch
            </Link>
            <Link
              href="/hire"
              className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg border-2 border-brand-teal px-6 text-base font-semibold text-white transition hover:bg-brand-teal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Hire a team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

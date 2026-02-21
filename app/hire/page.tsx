import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire Team | EclipticLink",
  description:
    "Hire dedicated AI, backend, frontend, full stack, DevOps, mobile, QA, and UI/UX talent. Scale your team with EclipticLink.",
};

const hireOptions = [
  {
    id: "ai",
    title: "AI",
    summary: "Hire AI/ML engineers to build intelligent products and automation.",
    details:
      "Dedicated AI and machine learning engineers for model development, NLP, computer vision, and ML pipelines. Flexible engagement models.",
  },
  {
    id: "backend",
    title: "Backend",
    summary: "Hire backend developers for APIs, services, and data layer.",
    details:
      "Experienced backend engineers in Node, Python, Java, Go, and more. Build scalable APIs, microservices, and databases.",
  },
  {
    id: "frontend",
    title: "Frontend",
    summary: "Hire frontend developers for web and responsive UIs.",
    details:
      "Frontend specialists in React, Next.js, Vue, and modern tooling. Accessible, performant, and user-focused interfaces.",
  },
  {
    id: "full-stack",
    title: "Full Stack",
    summary: "Hire full stack developers for end-to-end product development.",
    details:
      "Full stack engineers who own the full cycle from UI to API to database. Ideal for startups and product teams.",
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    summary: "Hire DevOps and cloud engineers for CI/CD and infrastructure.",
    details:
      "DevOps and cloud specialists for AWS, GCP, Azure, Kubernetes, and CI/CD. Reliable deployment and observability.",
  },
  {
    id: "mobile",
    title: "Mobile",
    summary: "Hire mobile developers for iOS and Android apps.",
    details:
      "Native and cross-platform mobile developers. iOS (Swift), Android (Kotlin), and React Native or Flutter.",
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    summary: "Hire QA engineers for manual and automated testing.",
    details:
      "QA engineers for test strategy, automation (e.g. Selenium, Cypress), performance and security testing.",
  },
  {
    id: "design-ui-ux",
    title: "Design (UI/UX)",
    summary: "Hire UI/UX designers for research, wireframes, and high-fidelity design.",
    details:
      "Product and UI/UX designers for user research, wireframes, prototypes, and design systems. User-first outcomes.",
  },
];

export default function HirePage() {
  return (
    <>
      <section className="bg-zinc-900 px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hire Team
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
            Scale your product with dedicated engineers and designers. AI,
            backend, frontend, full stack, DevOps, mobile, QA, and UI/UX.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="hire-list-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="hire-list-heading" className="sr-only">
            Hire by role
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {hireOptions.map((option) => (
              <article
                key={option.id}
                id={option.id}
                className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm transition hover:shadow-md scroll-mt-24"
              >
                <h3 className="text-xl font-semibold text-zinc-900">
                  {option.title}
                </h3>
                <p className="mt-2 text-zinc-600">{option.summary}</p>
                <p className="mt-4 text-sm text-zinc-500">{option.details}</p>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg bg-zinc-900 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

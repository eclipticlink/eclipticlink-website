"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { HireTeamConsultationForm } from "./hire-team-consultation-form";

const serviceLinksLeft = [
  { label: "Artificial Intelligence", href: "/services/ai" },
  { label: "Custom Software Development", href: "/services/custom-software-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
];

const serviceLinksRight = [
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  { label: "Big Data", href: "/services/big-data" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
];

const HIRE_TEAM_CATEGORIES = [
  "Artificial Intelligence",
  "Backend",
  "Frontend",
  "Mobile App",
  "Automation",
  "Machine Learning",
  "DevOps",
  "Data Science",
  "Cloud",
] as const;

const HIRE_TEAM_POSITIONS: Record<(typeof HIRE_TEAM_CATEGORIES)[number], readonly string[]> = {
  "Artificial Intelligence": [
    "AI Developer",
    "ChatGPT Developer",
    "OpenAI Developer",
    "Prompt Engineer",
    "AIOps Engineers",
  ],
  Backend: [
    "Node Developer",
    "Golang Developer",
    "Laravel Developer",
    ".NET Developer",
    ".NET Core Developer",
    "Java Developer",
    "Python Developer",
    "PHP Developer",
    "Django Developer",
    "C# Developer",
    "Fortran Developer",
    "Dibol Developer",
  ],
  Frontend: [
    "Angular Developer",
    "React Developer",
    "VueJS Developer",
    "UI/UX Developer",
    "HTML/CSS Developer",
    "Moodle Developer",
    "Hubspot Developer",
    "Wix Developer",
  ],
  "Mobile App": [
    "React Native Developer",
    "Flutter Developer",
    "Ionic Developer",
    "IOS Developer",
    "Android Developer",
    "Unity Developer",
  ],
  Automation: ["RPA Developer"],
  "Machine Learning": ["ML Developer"],
  DevOps: ["DevOps Developer"],
  "Data Science": ["Data Scientist", "PowerBI Consultant", "Data Engineer"],
  Cloud: ["AWS Developer", "Azure Developer", "CyberSecurity Developer"],
};

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hireTeamOpen, setHireTeamOpen] = useState(false);
  const [hireTeamSelectedCategory, setHireTeamSelectedCategory] = useState<(typeof HIRE_TEAM_CATEGORIES)[number]>(HIRE_TEAM_CATEGORIES[0]);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hireTeamTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setHireTeamOpen(false);
    setServicesOpen(true);
  };

  const closeServices = () => {
    servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 100);
  };

  const openHireTeam = () => {
    if (hireTeamTimeoutRef.current) {
      clearTimeout(hireTeamTimeoutRef.current);
      hireTeamTimeoutRef.current = null;
    }
    setServicesOpen(false);
    setHireTeamOpen(true);
    setHireTeamSelectedCategory(HIRE_TEAM_CATEGORIES[0]);
  };

  const closeHireTeam = () => {
    hireTeamTimeoutRef.current = setTimeout(() => setHireTeamOpen(false), 100);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2">
          <Image
            src="/Eclipticlink artwork zoomed.png"
            alt="EclipticLink"
            width={180}
            height={48}
            className="h-10 w-auto object-contain object-left"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6 sm:gap-8" aria-label="Main">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              type="button"
              onClick={() => {
                setHireTeamOpen(false);
                setServicesOpen((prev) => !prev);
              }}
              className="flex items-center gap-1 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-controls="services-menu"
              id="services-trigger"
            >
              Services
              <svg
                className={`h-4 w-4 shrink-0 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id="services-menu"
              role="menu"
              aria-labelledby="services-trigger"
              className={`absolute right-0 top-full pt-2 ${servicesOpen ? "block" : "hidden"}`}
            >
              <div className="w-max min-w-[560px] rounded-lg border border-zinc-200 bg-white py-5 pl-6 pr-8 shadow-lg">
                <div className="mb-5">
                  <h3 className="text-lg font-bold tracking-tight text-zinc-900">
                    Build your software product
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600">
                    From AI and automation to custom software, mobile apps, and cloud—we deliver
                    end-to-end solutions with transparency and scalability. Our teams bring
                    technical depth and product focus so you get a complete product that fits
                    your business.
                  </p>
                </div>
                <div className="grid min-w-0 grid-cols-2 gap-x-12 border-t border-zinc-100 pt-4">
                  <div className="min-w-0">
                    {serviceLinksLeft.map(({ label, href }) => (
                      <Link
                        key={label}
                        href={href}
                        role="menuitem"
                        className="block py-2.5 text-sm font-medium uppercase leading-snug text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-900"
                        onClick={() => setServicesOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                  <div className="min-w-0">
                    {serviceLinksRight.map(({ label, href }) => (
                      <Link
                        key={label}
                        href={href}
                        role="menuitem"
                        className="block py-2.5 text-sm font-medium uppercase leading-snug text-zinc-700 transition hover:bg-zinc-50 hover:text-zinc-900"
                        onClick={() => setServicesOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hire Team dropdown */}
          <div
            className="relative"
            onMouseEnter={openHireTeam}
            onMouseLeave={closeHireTeam}
          >
            <button
              type="button"
              onClick={() => {
                setServicesOpen(false);
                setHireTeamOpen((prev) => !prev);
              }}
              onFocus={openHireTeam}
              onBlur={closeHireTeam}
              className="flex items-center gap-1 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
              aria-expanded={hireTeamOpen}
              aria-haspopup="true"
              aria-controls="hire-team-menu"
              id="hire-team-trigger"
            >
              Hire Team
              <svg
                className={`h-4 w-4 transition-transform ${hireTeamOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id="hire-team-menu"
              role="menu"
              aria-labelledby="hire-team-trigger"
              onMouseEnter={() => {
                if (hireTeamTimeoutRef.current) {
                  clearTimeout(hireTeamTimeoutRef.current);
                  hireTeamTimeoutRef.current = null;
                }
              }}
              onMouseLeave={closeHireTeam}
              className={`absolute right-0 top-full pt-2 ${hireTeamOpen ? "block" : "hidden"}`}
            >
              <div className="min-w-[920px] rounded-lg border border-zinc-200 bg-white shadow-lg pr-6">
                <div className="border-b border-zinc-100 px-6 pt-5 pb-4">
                  <h3 className="text-lg font-bold tracking-tight text-zinc-900">
                    Hire dedicated developers
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600">
                    Scale your team with vetted experts—AI, backend, frontend, mobile, DevOps, and
                    more. Pick a role below or schedule a free consultation and we’ll match you with
                    the right talent.
                  </p>
                </div>
                <div className="grid grid-cols-[1fr_1.2fr_1.5fr] gap-0">
                  {/* Left: Category tabs (select one to show positions) */}
                  <div className="border-r border-zinc-200 py-4 pl-4 pr-3" role="tablist" aria-label="Hire by category">
                    {HIRE_TEAM_CATEGORIES.map((category) => (
                      <button
                        key={category}
                        type="button"
                        role="tab"
                        aria-selected={hireTeamSelectedCategory === category}
                        aria-controls="hire-team-positions-panel"
                        id={`hire-tab-${category.replace(/\s+/g, "-")}`}
                        className="mb-1 block w-full rounded px-3 py-2.5 text-left text-sm font-bold uppercase leading-snug text-zinc-900 transition hover:bg-zinc-900 hover:text-white last:mb-0 aria-selected:bg-zinc-900 aria-selected:text-white"
                        onClick={() => setHireTeamSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  {/* Middle: Positions for selected category (underlined links) */}
                  <div
                    id="hire-team-positions-panel"
                    role="tabpanel"
                    aria-labelledby={`hire-tab-${hireTeamSelectedCategory.replace(/\s+/g, "-")}`}
                    className="border-r border-zinc-200 py-4 pl-6 pr-4"
                  >
                    <ul className="flex flex-col gap-0.5 list-none p-0 m-0">
                      {HIRE_TEAM_POSITIONS[hireTeamSelectedCategory].map((position) => (
                        <li key={position}>
                          <Link
                            href={`/contact?role=${encodeURIComponent(position)}`}
                            className="block py-2.5 text-sm font-normal uppercase text-zinc-800 underline decoration-zinc-400 underline-offset-2 transition hover:text-zinc-900 hover:decoration-zinc-900"
                            onClick={() => setHireTeamOpen(false)}
                          >
                            {position}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href="/contact"
                          className="mt-1 block py-2.5 text-sm font-normal italic uppercase text-zinc-600 underline decoration-zinc-400 underline-offset-2 hover:text-zinc-900"
                          onClick={() => setHireTeamOpen(false)}
                        >
                          Not Sure? Let Us Help!
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Right: Schedule a Free Consultation form */}
                  <div className="p-5 pr-0">
                    <HireTeamConsultationForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
          >
            About Us
          </Link>
          <Link
            href="/blogs"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

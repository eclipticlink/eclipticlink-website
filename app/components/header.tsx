"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { HireTeamConsultationForm } from "./hire-team-consultation-form";

const mainNavLinks = [
  { label: "Services", href: "/services" },
  { label: "Hire Team", href: "/hire" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hireTeamTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [servicesOpen]);

  useEffect(() => {
    if (!hireTeamOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setHireTeamOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [hireTeamOpen]);

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
    <header className="sticky top-0 z-50 border-b border-brand-blue-dark/20 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 rounded">
          <Image
            src="/Eclipticlink artwork zoomed.png"
            alt=""
            width={180}
            height={48}
            className="h-10 w-auto object-contain object-left"
            priority
          />
          <span className="text-lg font-bold tracking-tight sm:text-xl">
            <span className="text-brand-teal">Ecliptic</span>
            <span className="text-brand-blue">link</span>
          </span>
        </Link>

        {/* Mobile menu button — visible below lg */}
        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop nav — hidden on mobile */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8" aria-label="Main">
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
              className="flex min-h-11 items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium text-zinc-600 transition hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
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
              <div className="w-max min-w-lg max-w-xl rounded-xl border border-zinc-200/80 bg-white shadow-xl ring-1 ring-zinc-900/5">
                <div className="px-6 pt-6 pb-3">
                  <h3 className="text-base font-bold tracking-tight text-brand-blue">
                    Build your software product
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600">
                    From AI and automation to custom software, mobile apps, and cloud—we deliver
                    end-to-end solutions with transparency and scalability.
                  </p>
                </div>
                <div className="grid min-w-0 grid-cols-2 gap-px bg-zinc-100 px-4 pt-2 pb-4">
                  <div className="min-w-0 rounded-lg bg-white p-2">
                    {serviceLinksLeft.map(({ label, href }) => (
                      <Link
                        key={label}
                        href={href}
                        role="menuitem"
                        className="group flex min-h-11 items-center justify-between gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-brand-teal-light hover:text-brand-blue focus-visible:bg-brand-teal-light focus-visible:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="truncate">{label}</span>
                        <svg className="h-4 w-4 shrink-0 text-brand-blue opacity-0 transition group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <div className="min-w-0 rounded-lg bg-white p-2">
                    {serviceLinksRight.map(({ label, href }) => (
                      <Link
                        key={label}
                        href={href}
                        role="menuitem"
                        className="group flex min-h-11 items-center justify-between gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-brand-teal-light hover:text-brand-blue focus-visible:bg-brand-teal-light focus-visible:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="truncate">{label}</span>
                        <svg className="h-4 w-4 shrink-0 text-brand-blue opacity-0 transition group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-t border-zinc-100 px-4 py-3">
                  <Link
                    href="/services"
                    role="menuitem"
                    className="flex min-h-10 items-center justify-center gap-2 rounded-lg bg-brand-blue/5 px-3 py-2 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
                    onClick={() => setServicesOpen(false)}
                  >
                    View all services
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
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
              className="flex min-h-11 items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium text-zinc-600 transition hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
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
              <div className="min-w-208 max-w-232 rounded-xl border border-zinc-200/80 bg-white shadow-xl ring-1 ring-zinc-900/5">
                <div className="border-b border-zinc-100 px-6 pt-5 pb-4">
                  <h3 className="text-base font-bold tracking-tight text-brand-blue">
                    Hire dedicated developers
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600">
                    Scale your team with vetted experts—AI, backend, frontend, mobile, DevOps, and more.
                    Pick a role or schedule a free consultation.
                  </p>
                </div>
                <div className="grid grid-cols-[1fr_1.15fr_1.5fr] gap-px bg-zinc-100">
                  {/* Left: Category tabs */}
                  <div className="bg-white p-3" role="tablist" aria-label="Hire by category">
                    {HIRE_TEAM_CATEGORIES.map((category) => (
                      <button
                        key={category}
                        type="button"
                        role="tab"
                        aria-selected={hireTeamSelectedCategory === category}
                        aria-controls="hire-team-positions-panel"
                        id={`hire-tab-${category.replace(/\s+/g, "-")}`}
                        className="mb-0.5 block w-full rounded-md px-3 py-2.5 text-left text-sm font-medium text-zinc-700 transition last:mb-0 hover:bg-brand-teal-light hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset aria-selected:bg-brand-blue aria-selected:text-white"
                        onClick={() => setHireTeamSelectedCategory(category)}
                      >
                        <span className="truncate block">{category}</span>
                      </button>
                    ))}
                  </div>
                  {/* Middle: Positions for selected category */}
                  <div
                    id="hire-team-positions-panel"
                    role="tabpanel"
                    aria-labelledby={`hire-tab-${hireTeamSelectedCategory.replace(/\s+/g, "-")}`}
                    className="min-w-0 bg-white p-3"
                  >
                    <ul className="flex flex-col list-none gap-0.5 p-0 m-0" role="list">
                      {HIRE_TEAM_POSITIONS[hireTeamSelectedCategory].map((position) => (
                        <li key={position}>
                          <Link
                            href={`/contact?role=${encodeURIComponent(position)}`}
                            role="menuitem"
                            className="group flex min-h-10 items-center justify-between gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-brand-teal-light hover:text-brand-blue focus-visible:bg-brand-teal-light focus-visible:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
                            onClick={() => setHireTeamOpen(false)}
                          >
                            <span className="truncate">{position}</span>
                            <svg className="h-4 w-4 shrink-0 text-brand-blue opacity-0 transition group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Right: Consultation form */}
                  <div className="bg-white p-4 pl-4">
                    <HireTeamConsultationForm />
                  </div>
                </div>
                <div className="border-t border-zinc-100 px-4 py-3">
                  <Link
                    href="/hire"
                    role="menuitem"
                    className="flex min-h-10 items-center justify-center gap-2 rounded-lg bg-brand-blue/5 px-3 py-2 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
                    onClick={() => setHireTeamOpen(false)}
                  >
                    View all roles on Hire Team page
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/about"
            className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm font-medium text-zinc-600 transition hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            About Us
          </Link>
          <Link
            href="/blogs"
            className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm font-medium text-zinc-600 transition hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="flex min-h-11 items-center rounded-lg px-2 py-2 text-sm font-medium text-zinc-600 transition hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 top-16 z-40 lg:hidden ${mobileMenuOpen ? "visible" : "invisible pointer-events-none"}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-zinc-900/20 backdrop-blur-sm transition-opacity duration-200"
          aria-hidden
          onClick={() => setMobileMenuOpen(false)}
        />
        <nav
          className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col gap-1 border-l border-zinc-200 bg-white p-4 shadow-xl transition-transform duration-200 ease-out sm:max-w-xs"
          style={{ transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)" }}
          aria-label="Mobile navigation"
        >
          {mainNavLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="flex min-h-11 items-center rounded-lg px-4 py-3 text-base font-medium text-zinc-700 hover:bg-brand-teal-light hover:text-brand-blue focus-visible:bg-brand-teal-light focus-visible:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

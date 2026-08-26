"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { HireTeamConsultationForm } from "./hire-team-consultation-form";
import { Button } from "./ui/button";

const mainNavLinks = [
  { label: "Services", href: "/services" },
  { label: "Hire Team", href: "/hire" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinksLeft = [
  { label: "Lead & CRM Systems", href: "/services/ai-automations" },
  { label: "Operations Automation", href: "/services/operations-automation" },
  { label: "Intelligent Products", href: "/services/ai" },
  { label: "Custom Software", href: "/services/custom-software-development" },
];

const serviceLinksRight = [
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  { label: "Data & Analytics", href: "/services/big-data" },
  { label: "Mobile Apps", href: "/services/mobile-app-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
];

import { HIRE_TEAM_CATEGORIES, HIRE_TEAM_POSITIONS, toSlug } from "../data/hire-team";

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hireTeamOpen, setHireTeamOpen] = useState(false);
  const [hireTeamSelectedCategory, setHireTeamSelectedCategory] = useState<(typeof HIRE_TEAM_CATEGORIES)[number]>(HIRE_TEAM_CATEGORIES[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hireTeamTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hireTeamDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    if (hireTeamDropdownRef.current?.contains(document.activeElement)) return;
    hireTeamTimeoutRef.current = setTimeout(() => setHireTeamOpen(false), 100);
  };

  const navLinkClass =
    "flex min-h-11 items-center gap-1 rounded-md px-2 py-2 text-sm font-medium text-slate-600 transition hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-border-subtle/80 bg-white/90 shadow-sm shadow-brand-dark/5 backdrop-blur-md supports-backdrop-filter:bg-white/85"
          : "border-transparent bg-white/95 backdrop-blur-sm supports-backdrop-filter:bg-white/80"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          aria-label="EclipticLink home"
        >
          <Image
            src="/ecliptic-link-logo.png"
            alt="EclipticLink site logo"
            width={180}
            height={48}
            className="h-10 w-auto object-contain object-left"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            <span className="text-brand-teal">Ecliptic</span>
            <span className="text-brand-blue">link</span>
          </span>
        </a>

        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center rounded-md text-slate-600 hover:bg-surface-muted hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2">
          <nav className="flex items-center gap-1 xl:gap-2" aria-label="Main">
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
                className={navLinkClass}
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
                  aria-hidden="true"
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
                <div className="w-max min-w-lg max-w-xl overflow-hidden rounded-xl border border-border-subtle bg-white shadow-xl shadow-brand-dark/10 ring-1 ring-brand-dark/5">
                  <div className="border-b border-border-subtle bg-atmosphere px-6 py-5">
                    <h3 className="font-display text-base font-semibold tracking-tight text-brand-blue">
                      Services for revenue and product teams
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-muted">
                      Lead systems, operations workflows, and product depth when the process
                      needs more than another tool.
                    </p>
                  </div>
                  <div className="grid min-w-0 grid-cols-2 gap-x-2 gap-y-px px-3 py-3">
                    <div className="min-w-0 p-1">
                      {serviceLinksLeft.map(({ label, href }) => (
                        <Link
                          key={label}
                          href={href}
                          role="menuitem"
                          className="group flex min-h-11 items-center justify-between gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-brand-teal-light hover:text-brand-blue focus-visible:bg-brand-teal-light focus-visible:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="truncate">{label}</span>
                          <svg className="h-4 w-4 shrink-0 text-brand-teal opacity-0 transition group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                    <div className="min-w-0 p-1">
                      {serviceLinksRight.map(({ label, href }) => (
                        <Link
                          key={label}
                          href={href}
                          role="menuitem"
                          className="group flex min-h-11 items-center justify-between gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-brand-teal-light hover:text-brand-blue focus-visible:bg-brand-teal-light focus-visible:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="truncate">{label}</span>
                          <svg className="h-4 w-4 shrink-0 text-brand-teal opacity-0 transition group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border-subtle px-4 py-3">
                    <Link
                      href="/services"
                      role="menuitem"
                      className="flex min-h-10 items-center justify-center gap-2 rounded-md bg-brand-blue/[0.04] px-3 py-2 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
                      onClick={() => setServicesOpen(false)}
                    >
                      View all services
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={hireTeamDropdownRef}
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
                onBlur={(e) => {
                  const next = e.relatedTarget as Node | null;
                  if (next && hireTeamDropdownRef.current?.contains(next)) return;
                  if (!next) return;
                  closeHireTeam();
                }}
                className={navLinkClass}
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
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id="hire-team-menu"
                aria-labelledby="hire-team-trigger"
                onMouseEnter={() => {
                  if (hireTeamTimeoutRef.current) {
                    clearTimeout(hireTeamTimeoutRef.current);
                    hireTeamTimeoutRef.current = null;
                  }
                }}
                onMouseLeave={closeHireTeam}
                className={`fixed inset-x-0 top-[4.25rem] z-50 px-4 sm:px-6 lg:px-8 ${hireTeamOpen ? "block" : "hidden"}`}
              >
                <div className="mx-auto max-w-7xl pt-2">
                  <div className="overflow-hidden rounded-xl border border-border-subtle bg-white shadow-xl shadow-brand-dark/10 ring-1 ring-brand-dark/5">
                  <div className="border-b border-border-subtle bg-atmosphere px-6 py-5">
                    <h3 className="font-display text-base font-semibold tracking-tight text-brand-blue">
                      Hire automation &amp; AI specialists
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-muted">
                      Scale with vetted specialists for lead systems, operations workflows,
                      AI, and full-stack work. Pick a role or request a consultation.
                    </p>
                  </div>
                  <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1.5fr)] gap-px bg-border-subtle">
                    <div className="bg-white p-3" role="tablist" aria-label="Hire by category">
                      {HIRE_TEAM_CATEGORIES.map((category) => (
                        <button
                          key={category}
                          type="button"
                          role="tab"
                          aria-selected={hireTeamSelectedCategory === category}
                          aria-controls="hire-team-positions-panel"
                          id={`hire-tab-${category.replace(/\s+/g, "-").toLowerCase()}`}
                          className="mb-0.5 block w-full rounded-md px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition last:mb-0 hover:bg-brand-teal-light hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset aria-selected:bg-brand-blue aria-selected:text-white"
                          onClick={() => setHireTeamSelectedCategory(category)}
                        >
                          <span className="block truncate">{category}</span>
                        </button>
                      ))}
                    </div>
                    <div
                      id="hire-team-positions-panel"
                      role="tabpanel"
                      aria-labelledby={`hire-tab-${hireTeamSelectedCategory.replace(/\s+/g, "-").toLowerCase()}`}
                      className="min-w-0 bg-white p-3"
                    >
                      <ul className="m-0 flex list-none flex-col gap-0.5 p-0" role="list">
                        {HIRE_TEAM_POSITIONS[hireTeamSelectedCategory].map((position) => (
                          <li key={position}>
                            <Link
                              href={`/hire/role/${toSlug(position)}`}
                              className="group flex min-h-10 items-center justify-between gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-brand-teal-light hover:text-brand-blue focus-visible:bg-brand-teal-light focus-visible:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
                              onClick={() => setHireTeamOpen(false)}
                            >
                              <span className="truncate">{position}</span>
                              <svg className="h-4 w-4 shrink-0 text-brand-teal opacity-0 transition group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="min-w-0 bg-white p-4">
                      <HireTeamConsultationForm />
                    </div>
                  </div>
                  <div className="border-t border-border-subtle px-4 py-3">
                    <Link
                      href="/hire"
                      className="flex min-h-10 items-center justify-center gap-2 rounded-md bg-brand-blue/[0.04] px-3 py-2 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
                      onClick={() => setHireTeamOpen(false)}
                    >
                      View all roles on Hire Team page
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className={navLinkClass}>
              About Us
            </Link>
            <Link href="/blogs" className={navLinkClass}>
              Blogs
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact Us
            </Link>
          </nav>

          <Button href="/contact" variant="primaryBlue" className="ml-3 xl:ml-4">
            Book a discovery call
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-[4.25rem] z-40 lg:hidden ${mobileMenuOpen ? "visible" : "invisible pointer-events-none"}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-brand-dark/25 backdrop-blur-sm transition-opacity duration-200"
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
        />
        <nav
          className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col gap-1 border-l border-border-subtle bg-white p-4 shadow-xl transition-transform duration-200 ease-out sm:max-w-xs"
          style={{ transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)" }}
          aria-label="Mobile navigation"
        >
          <a
            href="/"
            className="flex min-h-11 items-center rounded-md px-4 py-3 text-base font-medium text-slate-700 hover:bg-brand-teal-light hover:text-brand-blue focus-visible:bg-brand-teal-light focus-visible:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          {mainNavLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="flex min-h-11 items-center rounded-md px-4 py-3 text-base font-medium text-slate-700 hover:bg-brand-teal-light hover:text-brand-blue focus-visible:bg-brand-teal-light focus-visible:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="mt-4 border-t border-border-subtle pt-4">
            <Button
              href="/contact"
              variant="primary"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a discovery call
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

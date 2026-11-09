"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { services } from "../services/data";
import { Icon } from "./icons";
import { Button } from "./ui/button";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (adjust state during render, not in an effect)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServicesSoon = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-line bg-white/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-site flex h-16 items-center justify-between gap-6 px-5 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="EclipticLink home">
          <Image
            src="/ecliptic-link-logo.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Ecliptic<span className="text-accent">Link</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServicesSoon}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((v) => !v)}
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition hover:text-ink ${
                isActive("/services") ? "text-ink" : "text-muted"
              }`}
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.25 7.5L10 12.25 14.75 7.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            <div
              id="services-menu"
              className={`absolute left-1/2 top-full w-[44rem] -translate-x-1/2 pt-3 transition-[opacity,transform,visibility] duration-200 ease-out ${
                servicesOpen ? "visible opacity-100" : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="card overflow-hidden p-3 shadow-[0_24px_48px_-24px_rgb(11_32_27/0.25)]">
                <ul className="grid grid-cols-2 gap-1" role="list">
                  {services.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/services/${s.id}`}
                        className="group flex gap-3 rounded-lg p-3 transition hover:bg-surface-2"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-accent-soft text-accent">
                          <Icon name={s.icon} className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-ink group-hover:text-accent">
                            {s.title}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-subtle">
                            {s.summary.length > 78 ? `${s.summary.slice(0, 76).trimEnd()}…` : s.summary}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex items-center justify-between rounded-lg border border-line bg-bg-elevated px-4 py-3">
                  <span className="text-xs text-muted">Not sure where to start?</span>
                  <Link href="/services" className="link-arrow text-xs">
                    View all services
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition hover:text-ink ${
                isActive(link.href) ? "text-ink" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/services/incident-response"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-threat transition-colors hover:text-ink"
          >
            <span className="live-dot live-dot-threat" aria-hidden="true" />
            Under attack?
          </Link>
          <Button href="/contact" variant="primary">
            Get an assessment
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg px-5 pb-10 pt-4 lg:hidden"
      >
        <p className="eyebrow mt-2">Services</p>
        <ul className="mt-3 grid gap-1" role="list">
          {services.map((s) => (
            <li key={s.id}>
              <Link
                href={`/services/${s.id}`}
                className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-ink hover:bg-surface-2"
              >
                <Icon name={s.icon} className="h-5 w-5 text-accent" />
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="my-5 border-t border-line" />
        <ul className="grid gap-1" role="list">
          {[{ label: "All services", href: "/services" }, ...navLinks].map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block rounded-lg px-2 py-2.5 text-lg font-medium text-ink hover:bg-surface-2">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-3">
          <Button href="/contact" variant="primary" size="lg">
            Get an assessment
          </Button>
          <Button href="/services/incident-response" variant="danger" size="lg">
            Under attack? Get help now
          </Button>
        </div>
      </div>
    </header>
  );
}

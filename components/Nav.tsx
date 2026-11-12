"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, profile } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-vermilion focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-[12px] focus:uppercase focus:tracking-[0.14em]"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-line bg-ink"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label={`${profile.name} - home`}
        >
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden border border-line bg-ink transition-colors duration-300 group-hover:border-vermilion">
            <Image
              src="/Amani Kanu Logo on dark bg.jpeg"
              alt=""
              fill
              sizes="36px"
              className="scale-[2.5] object-cover"
              aria-hidden="true"
            />
          </span>
          <span className="hidden font-display text-[15px] font-medium tracking-tight text-paper sm:inline">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline font-sans text-[14px] text-paper-dim transition-colors duration-300 hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden items-center gap-2 border border-line px-3 py-1.5 lg:inline-flex">
            <span
              className="h-1.5 w-1.5 rounded-full bg-signal"
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
              Available
            </span>
          </span>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center border border-line md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-px w-5 bg-paper transition-all duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-5 bg-paper transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-5 bg-paper transition-all duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-line bg-ink md:hidden ${
          menuOpen ? "max-h-[70vh]" : "max-h-0 border-transparent"
        } transition-[max-height] duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]`}
      >
        <nav className="flex flex-col px-5 py-2" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line-soft py-4 font-display text-3xl font-medium tracking-tight text-paper"
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="pt-6 font-mono text-sm text-paper-dim"
          >
            {profile.email}
          </a>
        </nav>
      </div>
      </header>
    </>
  );
}

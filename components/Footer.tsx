"use client";

import Image from "next/image";
import { navLinks, profile, socials } from "@/lib/content";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="border-t border-line py-16" aria-label="Footer">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Closing statement */}
        <p className="display max-w-4xl text-[clamp(28px,4.5vw,64px)] leading-[1.05] text-paper">
          {profile.name} - the {profile.brand}.
          <br />
          <span className="text-paper-dim">
            Software, people, ideas. Built in Lagos, trusted worldwide.
          </span>
        </p>

        <div className="mt-16 flex flex-col gap-10 border-t border-line pt-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="mb-6 block w-fit border border-line bg-white p-2 transition-transform duration-300 hover:-translate-y-1"
              aria-label={`${profile.name} - back to top`}
            >
              <Image
                src="/Amani Kanu Logo on white BG.jpeg"
                alt={`${profile.name} - ${profile.brand}`}
                width={132}
                height={132}
                className="h-[132px] w-[132px] object-contain"
              />
            </a>
            <a
              href="#top"
              className="group flex items-center gap-3"
              aria-label={`${profile.name} - back to top`}
            >
              <span className="font-display text-[15px] text-paper">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs font-mono text-[11px] leading-relaxed text-paper-faint">
              {profile.role}. {profile.location}.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-3" aria-label="Footer">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline w-fit font-sans text-[14px] text-paper-dim hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-[11px] uppercase tracking-[0.12em] text-paper-faint hover:text-paper"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-paper-faint">
            © <CurrentYear /> {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-paper-faint">
            Built with care in Lagos, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}

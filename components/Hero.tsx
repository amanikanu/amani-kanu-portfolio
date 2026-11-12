"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { profile, skills } from "@/lib/content";
import { Marquee } from "./Marquee";

const headlineWords = ["I", "build", "fast,", "accessible", "products", "—", "and", "the", "communities", "that", "power", "them."];

const rotatingRoles = [
  "Senior Frontend Engineer",
  "Developer Relations",
  "Tech Speaker",
  "Community Builder",
  "Mentor",
];

const heroSkills = ["React", "Next.js", "TypeScript", "AWS", "DevRel", "Tailwind"];

export function Hero() {
  const [visibleWords, setVisibleWords] = useState(0);
  const [activeRole, setActiveRole] = useState(0);
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  // Staggered word reveal
  useEffect(() => {
    if (visibleWords >= headlineWords.length) return;
    const timer = setTimeout(() => setVisibleWords((v) => v + 1), 80);
    return () => clearTimeout(timer);
  }, [visibleWords]);

  // Rotating role
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRole((r) => (r + 1) % rotatingRoles.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // Portrait parallax on mouse move
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = document.getElementById("hero-portrait");
      if (!rect) return;
      const r = rect.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      setMouseX(x);
      setMouseY(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden pb-0 pt-24 sm:pt-28 lg:pt-20"
      aria-label="Introduction"
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          background: `radial-gradient(60% 50% at ${mouseX}% ${mouseY}%, var(--color-vermilion), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* Text column */}
        <div className="lg:col-span-7">
          {/* Eyebrow */}
          <p className="eyebrow mb-7 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            {profile.availability}
          </p>

          {/* Headline — staggered word reveal */}
          <h1 className="display text-[clamp(46px,7vw,92px)] text-paper">
            {headlineWords.map((word, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                  i < visibleWords
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 45}ms` }}
              >
                {word}
                {i < headlineWords.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>

          {/* Name */}
          <p className="italic-name mt-7 text-[clamp(20px,2.2vw,30px)] text-paper">
            {profile.name} — the {profile.brand}
          </p>

          {/* Rotating role */}
          <p className="mt-4 font-mono text-[13px] text-paper-dim">
            <span className="text-paper-faint">Currently:</span>{" "}
            <span className="text-vermilion">
              {rotatingRoles[activeRole]}
            </span>
          </p>

          {/* Sub text */}
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-paper-dim sm:text-[17px]">
            {profile.shortBio} From high-traffic web apps to stage talks and
            docs, I help developers succeed — and connect them with the tools
            and teams that power innovation.
          </p>

          {/* Interactive skill chips */}
          <div className="mt-7 flex flex-wrap gap-2">
            {heroSkills.map((skillName) => (
              <a
                key={skillName}
                href="#skills"
                className="group inline-flex items-center gap-1.5 border border-line bg-ink-soft/40 px-3 py-1.5 font-mono text-[11px] text-paper-dim transition-all duration-300 hover:border-vermilion hover:text-paper"
              >
                <span className="text-vermilion/70">▸</span>
                {skillName}
              </a>
            ))}
            <span className="font-mono text-[11px] text-paper-faint">
              +{skills.length - heroSkills.length} more
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-vermilion px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-vermilion-deep hover:text-ink"
            >
              See selected work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#speaking"
              className="link-underline inline-flex items-center gap-2 border border-line px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:border-paper"
            >
              Invite me to speak
            </a>
          </div>
        </div>

        {/* Portrait column */}
        <div className="flex justify-center lg:col-span-5">
          <div className="mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
            <figure id="hero-portrait" className="relative">
              {/* Glow frame */}
              <div
                className="pointer-events-none absolute -inset-3 -z-10 rounded-sm border"
                style={{
                  borderColor: "var(--color-line)",
                  boxShadow: `0 0 60px -20px rgba(255, 194, 14, ${
                    (Math.abs(mouseX - 50) + Math.abs(mouseY - 50)) < 30 ? 0.15 : 0.05
                  })`,
                }}
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-line transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:scale-[1.02]">
                <Image
                  src="/portrait.jpg"
                  alt={`${profile.name}, ${profile.brand}`}
                  fill
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-cover"
                  style={{
                    filter: "brightness(1.04) contrast(1.05)",
                    transform: `scale(1.08) translate(${
                      (mouseX - 50) * -0.02
                    }%, ${(mouseY - 50) * -0.02}%)`,
                    transition: "transform 0.4s cubic-bezier(0.22,0.61,0.36,1)",
                  }}
                  priority
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-paper-faint">
                <span>{profile.name}</span>
                <span className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-signal" />
                  {profile.brand}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-10 sm:mt-12">
        <Marquee />
      </div>
    </section>
  );
}

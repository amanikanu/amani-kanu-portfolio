"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { profile, skills } from "@/lib/content";
import { Marquee } from "./Marquee";

const headlineLines = [
  ["I", "build", "fast,", "accessible"],
  ["products", "—", "and", "the"],
  ["communities", "that", "power", "them."],
];

const accentWords = new Set(["fast,", "accessible", "communities", "power"]);

const rotatingRoles = [
  "Senior Frontend Engineer",
  "Developer Relations",
  "Tech Speaker",
  "Community Builder",
  "Mentor",
];

const heroSkills = ["React", "Next.js", "TypeScript", "AWS", "DevRel", "Tailwind"];

const floatingBadges = [
  { text: "DevRel", top: "-20px", right: "-40px", delay: "0s" },
  { text: "Speaker", bottom: "60px", left: "-50px", delay: "1s" },
  { text: "30+ Talks", bottom: "-20px", right: "20px", delay: "2s" },
];

const heroStats = [
  { value: "6+", label: "Years" },
  { value: "30+", label: "Talks" },
  { value: "4K+", label: "Devs" },
];

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [activeRole, setActiveRole] = useState(0);
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);
  const [scrollY, setScrollY] = useState(0);
  const [statsCounted, setStatsCounted] = useState(false);
  const portraitRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Line-by-line reveal with stagger
  useEffect(() => {
    if (visibleLines >= headlineLines.length) return;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 400);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  // Rotating role
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRole((r) => (r + 1) % rotatingRoles.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // Mouse-tracked parallax + tilt
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = portraitRef.current?.getBoundingClientRect();
      if (!rect) return;
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      setMouseX(px);
      setMouseY(py);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Scroll-based parallax
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Count-up stats
  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsCounted) {
          setStatsCounted(true);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsCounted]);

  // Calculate 3D tilt
  const tiltX = (mouseY - 50) * -0.3;
  const tiltY = (mouseX - 50) * 0.3;
  const glowIntensity =
    Math.abs(mouseX - 50) + Math.abs(mouseY - 50) < 30 ? 0.2 : 0.08;

  // Parse stat values for count-up
  const parseStat = (val: string) => {
    const match = val.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden pb-0 pt-24 sm:pt-28 lg:pt-20"
      aria-label="Introduction"
    >
      {/* Animated dot grid background */}
      <div
        className="hero-grid pointer-events-none absolute inset-0 -z-20 opacity-60"
        aria-hidden="true"
      />
      {/* Radial glow following mouse */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(50% 40% at ${mouseX}% ${mouseY}%, color-mix(in srgb, var(--color-vermilion) 10%, transparent), transparent 70%)`,
        }}
        aria-hidden="true"
      />
      {/* Floating decorative dots */}
      <div className="hero-dot pointer-events-none absolute top-[20%] left-[10%] -z-10" style={{ animationDelay: "0.5s" }} aria-hidden="true" />
      <div className="hero-dot pointer-events-none absolute top-[60%] right-[15%] -z-10" style={{ animationDelay: "1.5s", width: 4, height: 4 }} aria-hidden="true" />
      <div className="hero-dot pointer-events-none absolute bottom-[30%] left-[25%] -z-10" style={{ animationDelay: "2.5s", width: 8, height: 8 }} aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* Text column */}
        <div className="lg:col-span-7">
          {/* Eyebrow with animated pulse */}
          <p className="eyebrow mb-7 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            {profile.availability}
          </p>

          {/* Headline - line-by-line reveal with overflow mask */}
          <h1 className="display max-w-[780px] text-[clamp(42px,5.8vw,78px)] text-paper">
            {headlineLines.map((line, li) => (
              <span key={li} className="hero-line">
                <span
                  className={`hero-line-inner ${li < visibleLines ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${li * 150}ms` }}
                >
                  {line.map((word, wi) => (
                    <span
                      key={wi}
                      className={`inline-block ${accentWords.has(word) ? "hero-shimmer" : ""}`}
                      style={{ marginRight: "0.22em" }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </h1>

          {/* Name */}
          <p
            className="italic-name mt-7 text-[clamp(20px,2.2vw,30px)] text-paper"
            style={{
              opacity: visibleLines >= 3 ? 1 : 0,
              transform: visibleLines >= 3 ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s var(--ease-reveal) 600ms",
            }}
          >
            {profile.name} — the {profile.brand}
          </p>

          {/* Rotating role */}
          <p
            className="mt-4 font-mono text-[13px] text-paper-dim"
            style={{
              opacity: visibleLines >= 3 ? 1 : 0,
              transition: "opacity 0.7s var(--ease-reveal) 700ms",
            }}
          >
            <span className="text-paper-faint">Currently:</span>{" "}
            <span key={rotatingRoles[activeRole]} className="role-swap text-vermilion">
              {rotatingRoles[activeRole]}
            </span>
          </p>

          {/* Sub text */}
          <p
            className="mt-6 max-w-xl text-[16px] leading-relaxed text-paper-dim sm:text-[17px]"
            style={{
              opacity: visibleLines >= 3 ? 1 : 0,
              transform: visibleLines >= 3 ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s var(--ease-reveal) 800ms",
            }}
          >
            {profile.shortBio} From high-traffic web apps to stage talks and
            docs, I help developers succeed — and connect them with the tools
            and teams that power innovation.
          </p>

          {/* Animated stats row */}
          <div
            ref={statsRef}
            className="mt-8 flex flex-wrap gap-8"
            style={{
              opacity: statsCounted ? 1 : 0,
              transform: statsCounted ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s var(--ease-reveal)",
            }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <span className="hero-stat-value">
                  {statsCounted ? stat.value : "0"}
                </span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Interactive skill chips with hover glow */}
          <div
            className="mt-7 flex flex-wrap gap-2"
            style={{
              opacity: visibleLines >= 3 ? 1 : 0,
              transform: visibleLines >= 3 ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s var(--ease-reveal) 900ms",
            }}
          >
            {heroSkills.map((skillName) => (
              <a
                key={skillName}
                href="#skills"
                className="hero-chip group inline-flex items-center gap-1.5 border border-line bg-ink-soft/40 px-3 py-1.5 font-mono text-[11px] text-paper-dim transition-all duration-300 hover:border-vermilion hover:text-paper"
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--chip-x", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--chip-y", `${e.clientY - r.top}px`);
                }}
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
          <div
            className="mt-9 flex flex-wrap items-center gap-3"
            style={{
              opacity: visibleLines >= 3 ? 1 : 0,
              transform: visibleLines >= 3 ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s var(--ease-reveal) 1000ms",
            }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-vermilion px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:bg-vermilion-deep hover:shadow-[0_0_40px_-10px_var(--color-vermilion)]"
            >
              See selected work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#speaking"
              className="link-underline inline-flex items-center gap-2 border border-line px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-paper transition-all duration-300 hover:border-paper hover:bg-ink-soft/50"
            >
              Invite me to speak
            </a>
          </div>
        </div>

        {/* Portrait column with 3D tilt + floating badges */}
        <div className="flex justify-center lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
            {/* Glow behind portrait */}
            <div className="hero-glow" aria-hidden="true" />

            {/* Floating skill badges */}
            {floatingBadges.map((badge) => (
              <div
                key={badge.text}
                className="hero-badge"
                style={{
                  top: badge.top as string | undefined,
                  right: badge.right as string | undefined,
                  bottom: badge.bottom as string | undefined,
                  left: badge.left as string | undefined,
                  animationDelay: badge.delay,
                }}
                aria-hidden="true"
              >
                {badge.text}
              </div>
            ))}

            {/* Portrait frame with 3D tilt */}
            <div
              ref={portraitRef}
              className="hero-portrait-frame relative"
              style={{
                transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                transition: "transform 0.4s cubic-bezier(0.22,0.61,0.36,1)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="hero-portrait-inner relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/portrait.jpg"
                  alt={`${profile.name}, ${profile.brand}`}
                  fill
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-cover"
                  style={{
                    filter: "brightness(1.04) contrast(1.05)",
                    transform: `scale(1.1) translate(${(mouseX - 50) * -0.03}%, ${
                      (mouseY - 50) * -0.03
                    }%)`,
                    transition: "transform 0.5s cubic-bezier(0.22,0.61,0.36,1)",
                  }}
                  priority
                />
                {/* Subtle top gradient overlay */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-32"
                  style={{
                    background:
                      "linear-gradient(to bottom, color-mix(in srgb, var(--color-vermilion) 15%, transparent), transparent)",
                  }}
                  aria-hidden="true"
                />
                {/* Vignette */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    boxShadow: `inset 0 0 60px -20px ${
                      glowIntensity > 0.1
                        ? "color-mix(in srgb, var(--color-vermilion) 30%, transparent)"
                        : "transparent"
                    }`,
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Caption */}
            <figcaption
              className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-paper-faint"
              style={{
                opacity: visibleLines >= 3 ? 1 : 0,
                transition: "opacity 0.7s var(--ease-reveal) 1200ms",
              }}
            >
              <span>{profile.name}</span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-signal" />
                {profile.brand}
              </span>
            </figcaption>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue mt-10 sm:mt-14">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-faint">
          Scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-paper-faint"
        >
          <rect
            x="1"
            y="1"
            width="14"
            height="22"
            rx="7"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <circle cx="8" cy="8" r="2" fill="var(--color-vermilion)" />
        </svg>
      </div>

      {/* Marquee strip */}
      <div className="mt-6 sm:mt-8">
        <Marquee />
      </div>
    </section>
  );
}

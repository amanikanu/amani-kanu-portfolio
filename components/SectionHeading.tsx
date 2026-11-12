"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/**
 * Editorial section header with dramatic scroll reveal:
 * - Index number slides in from left
 * - Eyebrow fades in with blur
 * - Title reveals with a bottom-up clip-path wipe
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const rect = el.getBoundingClientRect();
    const isAlreadyVisible =
      rect.top < window.innerHeight * 0.94 && rect.bottom > 0;

    if (isAlreadyVisible) return;

    setVisible(false);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);
    const fallback = window.setTimeout(() => setVisible(true), 1800);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`section-heading-container ${visible ? "is-visible" : ""} flex flex-col gap-5 ${className}`}
    >
      <div
        className={`flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="section-heading-index font-mono text-[12px] text-vermilion">
          {index}
        </span>
        <span className="section-heading-eyebrow eyebrow">{eyebrow}</span>
      </div>
      <h2
        className={`section-heading-title display text-[clamp(42px,6vw,82px)] text-paper ${
          align === "center" ? "mx-auto max-w-3xl text-center" : ""
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

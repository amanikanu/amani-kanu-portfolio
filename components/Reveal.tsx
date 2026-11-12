"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "scale" | "clip" | "clip-left";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
};

/**
 * Scroll reveal with directional variants — IntersectionObserver-based,
 * supports slide-from-left/right, scale-in, clip-path wipe, and the
 * default fade-up. Respects prefers-reduced-motion via CSS.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
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
      className={`reveal reveal-${direction} ${visible ? "is-visible" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/**
 * Editorial section header — numbered index + eyebrow + display heading,
 * following the reference's "01 · Section" composition.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={`flex flex-col gap-5 ${className}`}>
      <div
        className={`flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-[12px] text-vermilion">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2
        className={`display text-[clamp(34px,5vw,64px)] text-paper ${
          align === "center" ? "mx-auto max-w-3xl text-center" : ""
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}

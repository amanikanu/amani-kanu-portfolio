import { marqueeItems } from "@/lib/content";

/**
 * Infinite skill marquee — full-width ticker strip echoing the reference's
 * "SOFTWARE ENGINEERING ✦ CYBERSECURITY ✦ ..." treatment.
 * The animation lives on the inner track (duplicated content) so the
 * -50% translate produces a seamless loop.
 */
export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="relative flex w-full items-center overflow-hidden border-y border-line py-4"
      aria-hidden="true"
    >
      <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-mono text-[12px] uppercase tracking-[0.14em] text-paper-faint"
          >
            {item}
            <span className="text-vermilion">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

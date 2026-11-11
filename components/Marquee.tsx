import { marqueeItems } from "@/lib/content";

/**
 * Infinite skill marquee — full-width ticker strip echoing the reference's
 * "SOFTWARE ENGINEERING ✦ CYBERSECITY ✦ ..." treatment.
 * The animation lives on the inner track (duplicated content) so the
 * -50% translate produces a seamless loop.
 */
export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className="relative w-full overflow-hidden border-y border-line py-4"
      aria-hidden="true"
    >
      <div className="animate-marquee absolute inset-y-0 left-0 flex items-center gap-8 pr-8">
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

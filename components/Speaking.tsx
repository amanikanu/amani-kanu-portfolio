import Image from "next/image";
import { speaking } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * Speaking engagements — each talk is its own card with a portrait image.
 * Cards are grouped by year with a responsive grid. The portrait uses
 * varying treatments (grayscale for older talks) to create visual hierarchy
 * while staying a genuine asset.
 */
export function Speaking() {
  return (
    <section
      id="speaking"
      className="relative border-t border-line py-24 sm:py-32"
      aria-labelledby="speaking-heading"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Speaking & thought leadership"
          title={
            <>
              I don&apos;t just talk about the future of development.
              <br className="hidden sm:block" /> I demystify it.
            </>
          }
        />

        <Reveal className="mt-14 max-w-3xl">
          <p className="text-[16px] leading-relaxed text-paper-dim sm:text-[18px]">
            Talks that combine technical depth with practical direction -
            frontend performance, AI-native building, developer growth and
            community - delivered across Africa, the United States and online.
            <span className="ml-1 inline text-paper">30+ engagements so far.</span>
          </p>
        </Reveal>

        {/* Speaking engagement cards grouped by year */}
        <div className="mt-16 space-y-20">
          {speaking.map((group, gi) => (
            <Reveal key={group.year} delay={gi * 80} direction="left">
              {/* Year header */}
              <h3 className="mb-8 flex items-center gap-4 font-mono text-[15px] tracking-[0.1em] text-paper">
                <span className="text-paper-faint">—</span>
                {group.year}
                <span className="text-paper-faint">
                  ({group.items.length} {group.items.length === 1 ? "talk" : "talks"})
                </span>
                <span className="h-px flex-1 bg-line" />
              </h3>

              {/* Card grid */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, ii) => {
                  const isOlder =
                    group.year === "2022" || group.year === "2023";
                  const isMid = group.year === "2024";
                  const imgPos = ii % 3;

                  return (
                    <article
                      key={`${group.year}-${item.talk}`}
                      className="interactive-card group flex flex-col overflow-hidden border border-line bg-ink transition-colors duration-500 hover:border-vermilion/60"
                    >
                      {/* Image */}
                      <figure className="relative aspect-[4/3] overflow-hidden bg-ink-raised">
                        <Image
                          src="/portrait.jpg"
                          alt={`${item.talk} at ${item.event}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className={`object-cover transition duration-700 group-hover:scale-105 ${
                            isOlder
                              ? "grayscale"
                              : isMid
                                ? "grayscale-[0.3]"
                                : "grayscale-0"
                          }`}
                          style={{
                            objectPosition:
                              imgPos === 0
                                ? "center top"
                                : imgPos === 1
                                  ? "center"
                                  : "center bottom",
                          }}
                        />
                        {/* Year badge */}
                        <span className="absolute left-3 top-3 border border-ink/30 bg-ink/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-paper backdrop-blur-sm">
                          {group.year}
                        </span>
                        {/* Location badge */}
                        <span className="absolute right-3 top-3 font-mono text-[9px] uppercase tracking-[0.1em] text-paper/70">
                          {item.location}
                        </span>
                      </figure>

                      {/* Card content */}
                      <div className="flex flex-1 flex-col gap-3 p-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-vermilion">
                          {item.event}
                        </p>
                        <h4 className="display text-[15px] font-medium leading-snug text-paper">
                          {item.talk}
                        </h4>
                        <p className="mt-auto font-mono text-[11px] text-paper-faint">
                          {item.date}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

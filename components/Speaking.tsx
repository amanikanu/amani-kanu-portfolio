import Image from "next/image";
import { speaking } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

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

        {/* Featured talk */}
        <Reveal className="mt-12" delay={100}>
          <article className="interactive-card group grid overflow-hidden border border-line bg-ink-soft/50 transition-colors duration-500 hover:border-vermilion/60 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 sm:p-12">
              <div className="flex flex-wrap items-center gap-4">
                <span className="border border-vermilion px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-vermilion">
                  Keynote · Nairobi
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
                  RubyConf Africa 2026 · Feb
                </span>
              </div>
              <h3 className="display mt-6 max-w-3xl text-[clamp(34px,4.4vw,64px)] text-paper">
                Beyond Code - From Ruby Engineers to AI-Native Builders
              </h3>
              <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-paper-dim sm:text-[17px]">
                AI is changing how software teams build, ship and scale products.
                The future belongs to engineers who can rethink workflows, lead
                with clarity, and combine technical skill with product thinking,
                community and business impact - this talk shares practical lessons
                from engineering, solution architecture, DevRel and community
                building across African tech ecosystems.
              </p>
              <a
                href="https://rubyconf.africa/sw/speakers/amani-kanu/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-vermilion"
              >
                View speaker profile <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-px bg-line p-px lg:min-h-full">
              <figure className="relative min-h-[280px] overflow-hidden bg-ink">
                <Image
                  src="/portrait.jpg"
                  alt="Amani Kanu speaking and sharing ideas with the developer community"
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover grayscale-[0.15] transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 to-transparent px-4 pb-4 pt-12 font-mono text-[10px] uppercase tracking-[0.14em] text-paper">
                  The Tech Evangelist
                </figcaption>
              </figure>
              <figure className="relative min-h-[280px] overflow-hidden bg-vermilion">
                <Image
                  src="/Amani Kanu Logo on white BG.jpeg"
                  alt="Amani Kanu - The Tech Evangelist logo"
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover mix-blend-multiply transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-vermilion/95 to-transparent px-4 pb-4 pt-12 font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
                  30+ engagements
                </figcaption>
              </figure>
            </div>
          </article>
        </Reveal>

        {/* Year-grouped archive - balanced two columns */}
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          {speaking.slice(0, 2).map((group, gi) => (
            <Reveal key={group.year} delay={gi * 100}>
              <h3 className="font-mono text-[15px] tracking-[0.1em] text-paper">
                {group.year}
              </h3>
              <div className="mt-6 divide-y divide-line-soft">
                {group.items.map((item) => (
                  <div
                    key={`${group.year}-${item.talk}`}
                    className="flex items-baseline justify-between gap-5 py-4"
                  >
                    <div className="min-w-0">
                      <p className="text-[16px] leading-snug text-paper sm:text-[17px]">
                        {item.talk}
                      </p>
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-paper-faint sm:text-[12px]">
                        {item.event} · {item.location}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-paper-faint">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
          <Reveal className="lg:mt-20" delay={100}>
            {speaking.slice(2).map((group) => (
              <div key={group.year} className="mb-16 last:mb-0">
                <h3 className="font-mono text-[15px] tracking-[0.1em] text-paper">
                  {group.year}
                </h3>
                <div className="mt-6 divide-y divide-line-soft">
                  {group.items.map((item) => (
                    <div
                      key={`${group.year}-${item.talk}`}
                      className="flex items-baseline justify-between gap-5 py-4"
                    >
                      <div className="min-w-0">
                        <p className="text-[16px] leading-snug text-paper sm:text-[17px]">
                          {item.talk}
                        </p>
                        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-paper-faint sm:text-[12px]">
                          {item.event} · {item.location}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-[11px] text-paper-faint">
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

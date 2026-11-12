import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-line py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              Engineer by trade. Teacher by instinct.
              <br className="hidden sm:block" /> Evangelist by reputation.
            </>
          }
        />

        {/* Body */}
        <Reveal className="mt-14 max-w-[720px]" direction="clip">
          <p className="text-[clamp(19px,2vw,24px)] leading-[1.55] text-paper">
            {profile.aboutLead}
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-paper-dim">
            {profile.aboutBody}
          </p>
        </Reveal>

        {/* Belief callout */}
        <Reveal className="mt-12" delay={100} direction="clip">
          <blockquote className="border-l-2 border-vermilion bg-ink-soft/60 py-2 pl-6 pr-4">
            <p className="font-display text-[clamp(20px,2.4vw,28px)] font-medium leading-snug tracking-tight text-paper">
              {profile.belief}
            </p>
          </blockquote>
        </Reveal>

        {/* Status + stats grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7" direction="left">
            <div className="divide-y divide-line-soft border-y border-line">
              {profile.status.map((row) => (
                <div
                  key={row.key}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
                    {row.key}
                  </span>
                  <span className="text-right font-sans text-[14px] text-paper">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120} direction="right">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10">
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="display text-[clamp(44px,5vw,68px)] text-paper">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

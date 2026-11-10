import { experience } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-line py-24 sm:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title={
            <>
              Six years of shipping — from Lagos
              <br className="hidden sm:block" /> to Seoul, New York & back.
            </>
          }
        />

        <div className="mt-16">
          {experience.map((job, i) => (
            <Reveal
              key={`${job.company}-${job.role}`}
              delay={i * 80}
              className="group border-t border-line first:border-t-0"
            >
              <article className="grid grid-cols-1 gap-3 py-10 transition-colors duration-300 hover:bg-ink-soft/40 sm:grid-cols-12 sm:gap-8">
                {/* Meta */}
                <div className="sm:col-span-3">
                  <p className="font-mono text-[12px] tracking-[0.06em] text-vermilion">
                    {job.period}
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-paper-faint">
                    {job.location}
                  </p>
                </div>

                {/* Role + company */}
                <div className="sm:col-span-9">
                  <h3 className="display text-[clamp(22px,2.6vw,34px)] text-paper">
                    {job.role}
                    <span className="text-paper-faint"> — {job.company}</span>
                  </h3>
                  <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-paper-dim">
                    {job.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {job.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 text-[14px] leading-relaxed text-paper-dim"
                      >
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-vermilion" aria-hidden="true" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-line px-2.5 py-1 font-mono text-[11px] text-paper-dim"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-b border-line" />
        </div>
      </div>
    </section>
  );
}

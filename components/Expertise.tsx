import { capabilities } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative border-t border-line py-24 sm:py-32"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="What I do"
          title={
            <>
              Four disciplines, one through-line: developers first.
            </>
          }
        />

        <div className="mt-16">
          {capabilities.map((cap, i) => (
            <Reveal
              key={cap.index}
              delay={i * 80}
              direction="clip"
              className="group border-t border-line first:border-t-0"
            >
              <div className="grid grid-cols-1 items-start gap-6 py-10 sm:grid-cols-12 sm:gap-10">
                {/* Index + title */}
                <div className="sm:col-span-4">
                  <div className="flex items-start gap-5 sm:gap-6">
                    <span className="flex h-7 items-center pt-1 font-mono text-[13px] text-paper-faint transition-colors duration-300 group-hover:text-vermilion sm:pt-1.5 sm:text-[15px] sm:min-w-[1.75rem] sm:justify-end">
                      {cap.index}
                    </span>
                    <h3 className="display leading-tight text-[clamp(22px,2.4vw,32px)] text-paper">
                      {cap.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="sm:col-span-5">
                  <p className="text-[15px] leading-relaxed text-paper-dim">
                    {cap.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="sm:col-span-3">
                  <ul className="flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-line px-2.5 py-1 font-mono text-[11px] text-paper-dim transition-colors duration-300 group-hover:border-line/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-b border-line" />
        </div>
      </div>
    </section>
  );
}

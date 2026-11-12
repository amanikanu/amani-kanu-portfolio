import { projects } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section
      id="work"
      className="relative border-t border-line py-24 sm:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Selected work"
          title={
            <>
              Products I have helped build -
              <br className="hidden sm:block" /> from fintech to developer tooling.
            </>
          }
        />

        <div className="mt-14">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              delay={(i % 4) * 70}
              className="group border-t border-line first:border-t-0"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-1 items-start gap-2 py-7 transition-colors duration-300 hover:bg-ink-soft/40 sm:grid-cols-12 sm:gap-6"
              >
                {/* Index */}
                <span className="font-mono text-[13px] text-paper-faint transition-colors duration-300 group-hover:text-vermilion sm:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Name + description */}
                <div className="sm:col-span-5">
                  <h3 className="display text-[clamp(20px,2vw,28px)] text-paper">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-paper-dim">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="sm:col-span-4">
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-line px-2.5 py-1 font-mono text-[11px] text-paper-faint"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <span className="hidden justify-self-end font-mono text-[13px] text-paper-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-paper sm:col-span-2 sm:flex">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
          <div className="border-b border-line" />
        </div>
      </div>
    </section>
  );
}

import { community, profile } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Community() {
  return (
    <section
      id="community"
      className="relative border-t border-line py-24 sm:py-32"
      aria-labelledby="community-heading"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          index="07"
          eyebrow="Community & impact"
          title={
            <>
              Communities I have built, and the
              <br className="hidden sm:block" /> developers I have helped grow.
            </>
          }
        />

        <Reveal className="mt-14 max-w-2xl">
          <p className="text-[15px] leading-relaxed text-paper-dim">
            Tech is a team sport. I have spent years building inclusive
            spaces where developers can learn, share and grow — from
            founder-led communities in Calabar and Lagos to mentorship across
            Africa.
          </p>
        </Reveal>

        {/* Community roles */}
        <div className="mt-14">
          {community.map((item, i) => (
            <Reveal
              key={item.name}
              delay={(i % 3) * 70}
              className="group border-t border-line first:border-t-0"
            >
              <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-12 sm:gap-8">
                <div className="sm:col-span-5">
                  <h3 className="display text-[clamp(19px,2vw,26px)] text-paper">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-vermilion">
                    {item.role}
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper-faint">
                    {item.period}
                  </p>
                </div>
                <p className="text-[14px] leading-relaxed text-paper-dim sm:col-span-5">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-b border-line" />
        </div>

        {/* WhatsApp community highlight */}
        <Reveal className="mt-12" delay={100}>
          <a
            href="https://whatsapp.com/channel/0029Vb5ezhHC1FuFX611P80z"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-card group flex flex-col gap-4 border border-line bg-ink-soft/40 p-8 transition-colors duration-500 hover:border-paper-dim sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper-faint">
                The daily dispatch
              </p>
              <p className="display mt-3 text-[clamp(20px,2.4vw,30px)] text-paper">
                A WhatsApp community of ~4,000 young African developers
              </p>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-paper-dim">
                Opportunities, career guidance and practical insights — shared
                every day, so nobody in the group learns alone.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 border border-line px-5 py-3 font-mono text-[12px] uppercase tracking-[0.14em] text-paper transition-all duration-300 group-hover:border-paper">
              Join the channel <span aria-hidden="true">→</span>
            </span>
          </a>
        </Reveal>

        {/* Mentorship note */}
        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl text-[14px] text-paper-dim">
            Mentoring is where the work compounds — guiding mentees through real
            engineering work at Semicolon.africa, Nexascale and Alt School Africa.
          </p>
          <a
            href="#contact"
            className="link-underline font-mono text-[12px] uppercase tracking-[0.14em] text-paper"
          >
            {profile.availability.toLowerCase()}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

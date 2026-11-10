import { availability, profile, socials } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-line py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something
              <br className="hidden sm:block" /> worth shipping.
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: availability, details, socials */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="border-y border-line">
                {availability.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-line-soft py-4 last:border-b-0"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                      aria-hidden="true"
                    />
                    <span className="text-[14px] text-paper">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-10" delay={80}>
              <dl className="space-y-4">
                <div className="flex items-center justify-between gap-6 border-b border-line-soft pb-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${profile.email}`}
                      className="link-underline text-[14px] text-paper hover:text-vermilion"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-line-soft pb-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={`tel:${profile.phone.replace(/\s/g, "")}`}
                      className="link-underline text-[14px] text-paper hover:text-vermilion"
                    >
                      {profile.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-6 pb-2">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper-faint">
                    Location
                  </dt>
                  <dd className="text-[14px] text-paper">{profile.location}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal className="mt-10" delay={140}>
              <div className="grid grid-cols-2 gap-px overflow-hidden border border-line">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-1 border-line bg-ink px-4 py-4 transition-colors duration-300 hover:bg-ink-soft"
                  >
                    <span className="font-sans text-[13px] text-paper">
                      {social.label}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-paper-faint">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal className="lg:col-span-7" delay={120}>
            <div className="border border-line bg-ink-soft/30 p-8 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

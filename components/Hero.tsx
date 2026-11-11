import Image from "next/image";
import { profile } from "@/lib/content";
import { Marquee } from "./Marquee";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-10 pt-24 sm:pb-12 sm:pt-28 lg:pt-24"
      aria-label="Introduction"
    >
      {/* Grid: text block left, portrait right */}
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:min-h-[620px] lg:grid-cols-12 lg:gap-14">
        {/* Text column */}
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 lg:mb-7">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-vermilion" />
            {profile.location} — building for the world
          </p>

          <h1 className="display max-w-[760px] text-[clamp(42px,6.4vw,82px)] text-paper">
            <span className="block">I build fast,</span>
            <span className="block">accessible products</span>
            <span className="block text-paper-dim">and communities.</span>
          </h1>

          <p className="italic-name mt-6 text-[clamp(21px,2.3vw,30px)] text-paper">
            {profile.name} — the {profile.brand}
          </p>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper-dim">
            {profile.shortBio} From high-traffic web apps to stage talks and
            docs, I help developers succeed — and connect them with the tools
            and teams that power innovation.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-paper px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-vermilion hover:text-white"
            >
              See selected work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#speaking"
              className="link-underline inline-flex items-center gap-2 border border-line px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:border-paper"
            >
              Invite me to speak
            </a>
          </div>
        </div>

        {/* Portrait column */}
        <div className="lg:col-span-5">
          <div className="mx-auto max-w-[340px] sm:max-w-[380px] lg:ml-auto lg:mr-0 lg:max-w-[390px]">
            <figure className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-line">
                <Image
                  src="/portrait.jpg"
                  alt={`${profile.name}, ${profile.brand}`}
                  fill
                  sizes="(max-width: 768px) 80vw, 380px"
                  className="object-cover"
                  style={{ filter: "brightness(1.04) contrast(1.05)" }}
                  priority
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-paper-faint">
                <span>{profile.name}</span>
                <span>{profile.brand}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-10 sm:mt-12 lg:mt-8">
        <Marquee />
      </div>
    </section>
  );
}

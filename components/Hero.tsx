import Image from "next/image";
import { profile } from "@/lib/content";
import { Marquee } from "./Marquee";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end pb-12 pt-32 sm:pb-16"
      aria-label="Introduction"
    >
      {/* Grid: text block left, portrait right */}
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-end gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        {/* Text column */}
        <div className="lg:col-span-7">
          <p className="eyebrow mb-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-vermilion" />
            {profile.location} — building for the world
          </p>

          <h1 className="display text-[clamp(40px,8.6vw,104px)] text-paper">
            I build fast, accessible products —
            <br />
            and the developer communities
            <br />
            <span className="text-paper-dim">behind them.</span>
          </h1>

          <p className="italic-name mt-7 text-[clamp(22px,2.6vw,32px)] text-paper">
            {profile.name} — the {profile.brand}
          </p>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-paper-dim">
            {profile.shortBio} From high-traffic web apps to stage talks and
            docs, I help developers succeed — and connect them with the tools
            and teams that power innovation.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
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
          <div className="lg:pl-4">
            <figure className="relative">
              <div className="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden border border-line">
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
      <div className="mt-14 sm:mt-20">
        <Marquee />
      </div>

      {/* Scroll cue */}
      <div className="mx-auto mt-10 flex w-full max-w-[1240px] items-center gap-3 px-5 sm:px-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-faint">
          Scroll
        </span>
        <span className="relative h-px w-12 bg-line sm:w-20">
          <span className="animate-float absolute inset-x-0 top-0 h-px w-1/2 bg-vermilion" />
        </span>
      </div>
    </section>
  );
}

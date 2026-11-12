"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  skills,
  skillCategories,
  skillStats,
  type Skill,
} from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type FilterId = "all" | string;

export function Skills() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return skills.filter((skill) => {
      const matchesFilter = filter === "all" || skill.category === filter;
      const matchesQuery =
        skill.name.toLowerCase().includes(query.toLowerCase()) ||
        skill.category.includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  const countFor = (id: FilterId) =>
    id === "all" ? skills.length : skills.filter((s) => s.category === id).length;

  const toggleFavorite = (name: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <section
      id="skills"
      className="relative border-t border-line py-24 sm:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills & toolbox"
          title={
            <>
              The tools I reach for -
              <br className="hidden sm:block" /> and the ones I teach.
            </>
          }
        />

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8">
          {skillStats.map((stat, si) => (
            <Reveal
              key={stat.label}
              delay={si * 100}
              direction="scale"
              className="border-y border-line pt-4 sm:border pt-4 sm:pb-4"
            >
              <p className="display text-[clamp(28px,3vw,44px)] text-paper">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-faint sm:text-[11px]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Controls: search + filter tabs */}
        <Reveal className="mt-12" delay={80} direction="left">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Filter tabs */}
            <div
              className="flex flex-wrap items-center gap-2"
              role="tablist"
              aria-label="Filter skills by category"
            >
              <FilterTab role="tab"
                active={filter === "all"}
                onClick={() => setFilter("all")}
                label="All"
                count={countFor("all")}
              />
              {skillCategories.map((cat) => (
                <FilterTab
                  key={cat.id}
                  role="tab"
                  active={filter === cat.id}
                  onClick={() => setFilter(cat.id)}
                  label={cat.label}
                  count={countFor(cat.id)}
                />
              ))}
            </div>

            {/* Search */}
            <div className="relative lg:w-64">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-paper-faint"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search skills…"
                aria-label="Search skills"
                className="w-full border border-line bg-ink-soft/40 py-2.5 pl-9 pr-3 font-sans text-[13px] text-paper placeholder:text-paper-faint/70 transition-colors duration-300 focus:border-vermilion focus:outline-none"
              />
            </div>
          </div>
        </Reveal>

        {/* Results count */}
        <Reveal className="mt-8 flex items-center justify-between font-mono text-[11px] text-paper-faint">
          <span>
            {filtered.length} of {skills.length} technologies
          </span>
          {favorites.size > 0 && (
            <span className="text-vermilion">
              {favorites.size} pinned
            </span>
          )}
        </Reveal>

        {/* Skill grid */}
        <div className="mt-8">
          {filtered.length === 0 ? (
            <div className="border border-dashed border-line py-16 text-center">
              <p className="font-mono text-[13px] text-paper-faint">
                No skills match “{query}” in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={i}
                  isFavorite={favorites.has(skill.name)}
                  isHovered={hovered === skill.name}
                  onToggleFavorite={() => toggleFavorite(skill.name)}
                  onHover={setHovered}
                />
              ))}
            </div>
          )}
        </div>

        {/* Level legend */}
        <Reveal className="mt-8 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-faint">
          <span>Proficiency</span>
          <div className="flex items-center gap-1.5">
            <Dots level={3} />
            <span>Familiar</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Dots level={4} />
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Dots level={5} />
            <span>Expert</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Filter tab ---------- */

function FilterTab({
  active,
  onClick,
  label,
  count,
  role,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  role?: string;
}) {
  return (
    <button
      type="button"
      role={role}
      onClick={onClick}
      aria-pressed={active}
      className={`group relative inline-flex items-center gap-2 border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-all duration-300 ${
        active
          ? "border-vermilion text-paper"
          : "border-line text-paper-dim hover:border-paper-dim hover:text-paper"
      }`}
    >
      {active && (
        <span className="absolute inset-0 -z-10 bg-vermilion/10" aria-hidden="true" />
      )}
      {label}
      <span
        className={`rounded-sm px-1.5 py-0.5 text-[9px] leading-none transition-colors duration-300 ${
          active ? "bg-vermilion text-ink" : "bg-ink-raised text-paper-faint"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

/* ---------- Skill card ---------- */

function SkillCard({
  skill,
  index,
  isFavorite,
  isHovered,
  onToggleFavorite,
  onHover,
}: {
  skill: Skill;
  index: number;
  isFavorite: boolean;
  isHovered: boolean;
  onToggleFavorite: () => void;
  onHover: (name: string | null) => void;
}) {
  const category = skillCategories.find((c) => c.id === skill.category);
  const logoSlug = skill.name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const logoExtension = skill.name === "Zustand" ? "jpg" : "svg";

  return (
    <div
      className={`interactive-card skill-card group relative flex flex-col gap-3 border-b border-line bg-ink transition-colors duration-300 hover:bg-ink-soft p-5 ${
        isHovered ? "bg-ink-soft" : ""
      }`}
      style={{ animationDelay: `${Math.min(index, 12) * 25}ms` }}
    >
      {/* Top row: name + favorite */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-ink-raised/60 p-2 transition-colors duration-300 group-hover:border-paper-faint/50">
            <img
              src={`/skills/${logoSlug}.${logoExtension}`}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
              aria-hidden="true"
              loading="lazy"
            />
          </span>
          <h3 className="display text-[17px] font-medium leading-tight text-paper sm:text-[18px]">
            {skill.name}
          </h3>
        </div>
        <button
          type="button"
          onClick={onToggleFavorite}
          aria-label={`${isFavorite ? "Unpin" : "Pin"} ${skill.name}`}
          aria-pressed={isFavorite}
          className={`flex h-6 w-6 shrink-0 items-center justify-center border text-[12px] transition-all duration-300 ${
            isFavorite
              ? "border-vermilion text-vermilion"
              : "border-line text-paper-faint hover:border-paper-dim hover:text-paper"
          }`}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>

      {/* Category + years */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-vermilion">
          {category?.label}
        </span>
        <span className="font-mono text-[10px] text-paper-faint">
          {skill.years}y
        </span>
      </div>

      {/* Level dots */}
      <div className="mt-auto flex items-center gap-1.5 pt-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
              n <= skill.level
                ? "bg-vermilion"
                : "bg-line group-hover:bg-line-soft"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Level dots (static) ---------- */

function Dots({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-1.5 w-1.5 rounded-full ${
            n <= level ? "bg-paper" : "bg-line"
          }`}
        />
      ))}
    </div>
  );
}

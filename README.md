# Amani Kanu - The Tech Evangelist

A portfolio website for **Amani Kanu** - Senior Frontend Engineer & Developer Relations professional from Lagos, Nigeria.

## Stack

- Next.js (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first design tokens in `app/globals.css`)
- next/font (Space Grotesk, DM Sans, JetBrains Mono - self-hosted)
- IntersectionObserver scroll reveals + CSS motion (no animation libraries)
- Static OG card at `public/og.png`

## Design language

Translated from the reference experience: warm-black canvas (`#09090a`), warm paper text
(`#f6f4ef`), a restrained vermilion accent (`#ef3b33`), editorial numbered sections, a
split hero (display headline + portrait), a skills marquee, key-value status blocks, and
italic serif name accents. All motion respects `prefers-reduced-motion`.

## Content

All professional facts sourced from the Readdy portfolio and official conference speaker
profiles (RubyConf Africa, Sailsconf, React Summit US). The portrait is the official
speaker photo from RubyConf Africa.

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # type-check + production build
npm run start  # serve the production build
```

## Structure

```
app/             layout, page, globals.css (design tokens), icon, OG metadata
lib/content.ts   all site content (single source of truth)
components/      Nav, Hero, Marquee, About, Expertise, Experience,
                 Work, Speaking, Community, Contact, Footer, Reveal
public/          portrait.jpg, og.png
```

## Accessibility

- Semantic landmarks, skip-to-content link, focus-visible states
- Keyboard-operable mobile menu, mailto form (no backend)
- Color contrast ≥ WCAG AA for body and UI text
- Reduced-motion fallbacks throughout

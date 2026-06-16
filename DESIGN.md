# Design

## Theme

Dark-first preference, system-respecting (defaultTheme: system). The site works in both light and dark modes with separate token sets.

## Color Palette

### Light
| Token | OKLCH | Role |
|-------|-------|------|
| Background | oklch(0.985 0 0) | Page bg |
| Foreground | oklch(0.1 0 0) | Body text, primary |
| Muted | oklch(0.96 0 0) | Subtle surfaces |
| Muted Foreground | oklch(0.45 0 0) | Secondary text |
| Border | oklch(0.9 0 0) | Dividers, borders |
| Primary | oklch(0.1 0 0) | Interactive elements |
| Card | oklch(1 0 0) | Card surfaces |

### Dark
| Token | OKLCH | Role |
|-------|-------|------|
| Background | oklch(0.1 0 0) | Page bg |
| Foreground | oklch(0.95 0 0) | Body text, primary |
| Muted | oklch(0.15 0 0) | Subtle surfaces |
| Muted Foreground | oklch(0.6 0 0) | Secondary text |
| Border | oklch(0.22 0 0) | Dividers, borders |
| Primary | oklch(0.95 0 0) | Interactive elements |
| Card | oklch(0.13 0 0) | Card surfaces |

All colors have zero chroma — pure grayscale. No brand color competes with content.

Tech logos and pills in the Stack section are the only colored elements on the page. Each technology has a single brand color applied to its SVG icon and pill border/background.

## Typography

- **Font family**: Geist (sans-serif) for all text. Geist Mono for the name monogram at top of hero.
- **Name treatment**: `text-xs tracking-[0.2em] uppercase font-mono` — restrained typographic signature.
- **Heading wrap**: `text-wrap: balance` on all h1-h4.
- **Prose wrap**: `text-wrap: pretty` on paragraphs and list items.
- **Hero heading**: `text-2xl sm:text-3xl md:text-4xl` (intentionally small — no shouting).
- **Line length**: Body text capped at `max-w-lg` (≈65ch).

## Components

### Hero
- Name styled as small monospaced uppercase signature (VANSH BANSAL)
- Tagline as main heading (2xl–4xl)
- Full about text always visible (no dropdown)
- Social icons (GitHub, LinkedIn, Mail) + Work anchor + Resume link
- No decorative elements, no background effects, no CTA buttons

### Marquee (Stack)
- Infinite horizontal scroll of technology SVG logos + names
- CSS `@keyframes marquee` at 40s linear infinite
- Duplicated array for seamless loop
- "All categories" button (bordered) expands to grouped category grid
- Each category pill shows a small version of the tech logo + name
- Paused under `prefers-reduced-motion: reduce`

### Tech Logos
- Each technology has a custom SVG icon component (18 technologies have unique logos)
- Remaining technologies use a generic icon with the tech name's first 2 characters
- All icons are 20x20px with brand-accurate colors
- Source: `src/components/shared/tech-logos.tsx`

### Proof of Work (Projects)
- Home page: gradient cover + project title + short description + arrow indicator
- Click routes to `/projects/[id]` via `<Link>`
- 3-column responsive grid (`grid gap-5 md:grid-cols-2 lg:grid-cols-3`)
- Hover: subtle border color change, arrow becomes visible
- Detail page: full-width cover, description, tech pills, impact, demo/video links, Back link

### Experience (Timeline)
- Left-aligned timeline with dot + line
- Each entry shows role, company, period with chevron
- Click expands to show bullet-point descriptions
- Chevron rotates 180° on toggle

### Project Detail Page (`/projects/[id]`)
- Static site generated per project at build time
- 404 for unknown IDs
- Sections: Cover, Title, Description, Tech Stack (pills), Impact, Links
- Back link to home page

### Footer
- Copyright + social icon links (GitHub, LinkedIn, Email as SVG icons)

## Motion

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Page load | fade-in + translateY(20) | 0.6s | easeOut |
| Section scroll | fade-in + translateY(16) | 0.4s | easeOut |
| Expand/collapse | height + opacity | 0.35s | cubic-bezier(0.25, 0.1, 0.25, 1) |
| Marquee | translateX(-50%) | 40s | linear infinite |
| Chevron rotate | rotate(180) | 0.3s | easeOut |

All motion is disabled under `prefers-reduced-motion: reduce`.

## Layout

- Max container width: 1280px
- Section padding: `py-20 md:py-28` or `py-24 md:py-32`
- Single-column on mobile, multi-column on md+ breakpoints
- No sticky or fixed navigation — pure scroll
- Grid breakpoints: 1 col → 2 cols (md) → 3 cols (lg)

## Routing

| Route | Type | Content |
|-------|------|---------|
| `/` | SSG | Single-page portfolio (Hero, Stack, Proof of Work, Experience, Footer) |
| `/projects/[id]` | SSG (generateStaticParams) | Full project detail |
| `/projects`, `/experience`, `/contact` | Redirect | Redirect to `/` |

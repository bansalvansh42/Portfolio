# Product

## Register

brand

## Users

Hiring managers, engineering leads, startup founders, and technical recruiters evaluating an AI Engineer for full-time roles or contract work.

## Product Purpose

A single-page portfolio that demonstrates Vansh Bansal's expertise in AI agents, automation, and LLM-powered systems through a minimal, content-forward showcase. Visitors scan project thumbnails and click through to dedicated detail pages for full scope.

## Brand Personality

Confident, restrained, technical. Speaks in results, not fluff. The design is quiet so the work speaks.

## Anti-references

- Over-designed agency portfolios with heavy gradients and decorative animations
- Template-like card grids with identical structure
- SaaS-style dashboards or tool-like interfaces
- AI-generated-looking layouts (gradient text, glassmorphism, numbered section markers)
- Cluttered heroes with too many CTAs

## Functional Requirements

1. **Single-page scroll** — All sections (Hero, Stack, Proof of Work, Experience, Footer) render on one scrollable page. No internal navigation bar.
2. **Project detail pages** — Each project in Proof of Work links to `/projects/[id]` with full description, tech stack, impact, and demo/video links. Statically generated at build time.
3. **Tech stack marquee** — Skills section displays an auto-scrolling horizontal marquee of technology logos + names, looping infinitely.
4. **Expandable categories** — Skills section has an "All categories" toggle that expands to show skills grouped by category with color-coded pills.
5. **Expandable experience** — Each timeline entry is clickable to reveal bullet-point descriptions with smooth animation.
6. **Dark/light mode** — Theme toggle respects system preference and persists user choice.
7. **Social links** — GitHub, LinkedIn, and Email accessible from Hero and Footer as SVG icons.
8. **Resume link** — Direct link to hosted resume PDF in Hero.
9. **Reduced motion** — All animations respect `prefers-reduced-motion: reduce`.

## Non-Functional Requirements

1. **Performance** — Static site generation (SSG) for all pages. Sub-second page loads. No client-side data fetching.
2. **Accessibility** — WCAG 2.1 AA compliant. 4.5:1 minimum contrast ratio on all text. Keyboard-navigable. ARIA labels on icon-only links.
3. **SEO** — Metadata, Open Graph, and Twitter cards configured per page. Semantic HTML structure. Sitemap and robots.txt.
4. **Responsiveness** — Full layout works from 320px to 2560px viewports. Grids collapse from 3 → 2 → 1 columns.
5. **Design consistency** — Zero-chroma monochrome palette. Geist font throughout. No brand color outside tech logos and pills.
6. **Maintainability** — All content (projects, skills, experience, personal info) driven by data files in `src/data/`. No hardcoded content in components.

## Design Principles

1. **Content over chrome** — Every decorative element must earn its place. The work is the hero.
2. **Progressive disclosure** — Show less by default, let users expand to see more. Applies to skills categories and experience details.
3. **Restrained palette** — Monochrome with zero chroma. No brand color competes with the content.
4. **Motion with purpose** — Animations serve expand/collapse interactions and the marquee. No decorative entrance animations beyond initial fade-in.
5. **Senior engineer tone** — The interface should feel like talking to an experienced engineer: direct, concise, no unnecessary ceremony.

## Accessibility & Inclusion

- WCAG 2.1 AA compliant (4.5:1 contrast ratio on all text)
- Reduced motion media query disables marquee and expand animations
- All interactive elements are keyboard accessible
- Semantic HTML structure with ARIA labels on icon-only links

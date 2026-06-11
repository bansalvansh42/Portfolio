# Portfolio — Vansh Bansal

AI Engineer portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, and shadcn/ui-style components.

**Live:** [vanshbansal.dev]([https://portfolio-tau-eight-lhu8r0w0vf.vercel.app/])

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + CSS custom properties |
| UI | shadcn/ui primitives (Button, Badge, Card, Modal) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Theme | next-themes (dark/light/system) |
| Font | Geist (via next/font) |
| Deployment | Static export, ready for Vercel |

## Project Structure

```
src/
├── app/                # Pages (/, /projects, /experience, /contact)
│   ├── layout.tsx      # Root layout with metadata, SEO, theme
│   ├── not-found.tsx   # Custom 404 page
│   ├── sitemap.ts      # Auto-generated sitemap.xml
│   └── robots.ts       # Auto-generated robots.txt
├── components/
│   ├── ui/             # Primitives (Button, Badge, Card, Modal)
│   ├── layout/         # Header, Footer, ThemeToggle, MobileNav
│   ├── home/           # Home sections (Hero, Skills, FeaturedProjects)
│   ├── shared/         # Cross-page (ProjectCard, TimelineItem, SectionHeading)
│   └── projects/       # VideoModal with Loom/YouTube embed support
├── data/               # ★ All editable content
│   ├── personal.ts     # Name, title, tagline, about, links
│   ├── skills.ts       # Skills list + category labels
│   ├── projects.ts     # Project entries with tech, metrics, videoUrl
│   └── experience.ts   # Work history with quantified bullets
├── types/              # TypeScript interfaces
└── lib/                # cn() utility
```

## Customization

To update your portfolio content, edit the files in `src/data/`:

| What to change | File |
|---|---|
| Name, title, bio, links | `src/data/personal.ts` |
| Skills and categories | `src/data/skills.ts` |
| Projects (add/remove/edit) | `src/data/projects.ts` |
| Work experience | `src/data/experience.ts` |
| Site metadata / SEO | `src/app/layout.tsx` |
| Profile picture / resume | Place in `public/` |

To add a demo video to a project, add a `videoUrl` field:

```ts
{
  id: "my-project",
  title: "My Project",
  // ... other fields
  videoUrl: "https://www.loom.com/embed/abc123",  // Loom or YouTube
}
```

The VideoModal automatically handles Loom share links and YouTube watch URLs — no manual conversion needed.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs a fully static site to `.next/`. All pages are prerendered as static HTML.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

The project is ready for Vercel deployment with zero configuration.

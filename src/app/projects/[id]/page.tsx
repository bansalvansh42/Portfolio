import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Play, Globe } from "lucide-react"
import { projects } from "@/data/projects"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ id: string }>
}

const coverGradients: Record<string, string> = {
  "voice-appointment-scheduler": "from-zinc-800 to-zinc-900",
  "it-helpdesk-ai": "from-neutral-800 to-neutral-900",
  "resume-screening-agent": "from-stone-800 to-stone-900",
  "n8n-automations": "from-slate-800 to-slate-900",
  "rag-knowledge-assistant": "from-zinc-800 to-zinc-950",
}

function getCoverGradient(id: string): string {
  return coverGradients[id] ?? "from-neutral-800 to-neutral-900"
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) return {}
  return { title: project.title }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  if (!project) notFound()

  return (
    <div className="pt-24 pb-24">
      <div className="container max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Link>

        <div className={`aspect-[16/9] bg-gradient-to-br ${getCoverGradient(project.id)} flex items-center justify-center mb-10`}>
          <span className="text-4xl font-bold text-white/10 select-none">
            {project.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">{project.title}</h1>

        <p className="text-sm text-muted-foreground leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="border-t border-border pt-6 mb-8">
          <h2 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-border bg-muted/50 text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 mb-8">
          <h2 className="text-xs font-medium text-muted-foreground tracking-wider uppercase mb-3">Impact</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.impact}</p>
        </div>

        <div className="border-t border-border pt-6 flex items-center gap-4">
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
            >
              <Play className="h-4 w-4" />
              Watch Demo
            </a>
          )}
          {project.href && project.href !== "#" && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
            >
              <Globe className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

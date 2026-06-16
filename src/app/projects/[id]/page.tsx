import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Play, Globe } from "lucide-react"
import { projects } from "@/data/projects"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ id: string }>
}

const coverStyles: Record<string, { bg: string; accent: string }> = {
  "voice-appointment-scheduler": { bg: "from-zinc-800 to-zinc-950", accent: "#10B981" },
  "it-helpdesk-ai": { bg: "from-neutral-800 to-neutral-950", accent: "#3B82F6" },
  "resume-screening-agent": { bg: "from-stone-800 to-stone-950", accent: "#8B5CF6" },
  "n8n-automations": { bg: "from-slate-800 to-slate-950", accent: "#E11D48" },
  "rag-knowledge-assistant": { bg: "from-zinc-800 to-zinc-950", accent: "#F59E0B" },
}

function getCoverStyle(id: string) {
  return coverStyles[id] ?? { bg: "from-neutral-800 to-neutral-950", accent: "#666" }
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

  const style = getCoverStyle(project.id)

  return (
    <div className="pt-24 pb-24">
      <div className="container max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </Link>

        <div className={`aspect-[16/9] bg-gradient-to-br ${style.bg} relative mb-10 overflow-hidden`}>
          <div
            className="absolute top-0 left-0 w-full h-[2px]"
            style={{ backgroundColor: style.accent }}
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">{project.title}</h1>

        <p className="text-sm text-foreground/65 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="border-t border-border pt-6 mb-8">
          <h2 className="text-sm font-semibold text-foreground/50 mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-border text-foreground/55">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 mb-8">
          <h2 className="text-sm font-semibold text-foreground/50 mb-2">Impact</h2>
          <p className="text-sm text-foreground/65 leading-relaxed">{project.impact}</p>
        </div>

        <div className="border-t border-border pt-6 flex items-center gap-4">
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-foreground/60 transition-colors"
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
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-foreground/60 transition-colors"
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

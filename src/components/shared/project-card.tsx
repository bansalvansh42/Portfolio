"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/types/content"

interface ProjectCardProps {
  project: Project
  index: number
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

export function ProjectCard({ project, index }: ProjectCardProps) {
  const style = getCoverStyle(project.id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="block group border border-border transition-colors hover:border-foreground/20"
      >
        <div className={`aspect-[16/10] bg-gradient-to-br ${style.bg} relative overflow-hidden`}>
          {/* Decorative accent bar */}
          <div
            className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: style.accent }}
          />
          {/* Tech tags overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[10px] text-white/70 bg-white/10 px-2 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>
          {/* Arrow indicator */}
          <span className="absolute top-3 right-3 text-white/20 group-hover:text-white/60 transition-colors duration-300">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="p-5 space-y-1.5">
          <h3 className="text-base font-semibold leading-snug group-hover:text-foreground/80 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-foreground/60 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

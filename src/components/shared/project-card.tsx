"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/types/content"

interface ProjectCardProps {
  project: Project
  index: number
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

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="block group border border-border transition-colors hover:border-muted-foreground/30"
      >
        <div className={`aspect-[16/10] bg-gradient-to-br ${getCoverGradient(project.id)} flex items-center justify-center relative`}>
          <span className="text-2xl font-bold text-white/10 select-none">
            {project.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
          </span>
          <span className="absolute top-3 right-3 text-white/30 group-hover:text-white/60 transition-colors">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-base font-semibold mb-1.5 group-hover:text-foreground/80 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground/70 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

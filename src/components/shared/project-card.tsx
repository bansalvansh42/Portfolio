"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/types/content"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 0.1, 0, 1] }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="block group border border-border rounded-sm transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_0_1px] hover:shadow-primary/10"
      >
        <div className="aspect-[16/10] bg-gradient-to-br from-zinc-800 to-zinc-950 relative overflow-hidden">
          <div
            className="absolute top-0 left-4 right-4 h-px bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[10px] text-white/70 bg-white/10 px-2 py-0.5 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <span className="absolute top-3 right-3 text-white/20 group-hover:text-white/60 transition-colors duration-300">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="p-5 space-y-1.5">
          <h3 className="text-base font-semibold leading-snug group-hover:text-primary transition-colors duration-300">
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

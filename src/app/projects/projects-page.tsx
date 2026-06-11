"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/shared/project-card"

export function ProjectsPage() {
  return (
    <div className="pt-24">
      <section className="border-b border-border/40">
        <div className="container py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-medium text-muted-foreground mb-2">Portfolio</p>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              AI agent systems, workflow automations, and intelligent applications built to solve real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}

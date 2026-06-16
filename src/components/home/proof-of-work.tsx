"use client"

import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/shared/project-card"
import { SectionHeading } from "@/components/shared/section-heading"

export function ProofOfWork() {
  return (
    <section id="proof-of-work" className="border-t border-border">
      <div className="container py-24 md:py-32">
        <SectionHeading
          title="Proof of Work"
          description="AI agent systems, workflow automations, and intelligent applications I've built."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-14">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

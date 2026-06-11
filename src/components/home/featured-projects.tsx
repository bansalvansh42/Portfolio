"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/shared/project-card"
import { SectionHeading } from "@/components/shared/section-heading"

export function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="border-t border-border/40">
      <div className="container py-24 md:py-32">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            label="Featured Work"
            title="Projects"
            description="A selection of AI agent systems and automation workflows I've built."
          />
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

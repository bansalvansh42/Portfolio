"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Play, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { VideoModal } from "@/components/projects/video-modal"
import type { Project } from "@/types/content"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-foreground/20 h-full flex flex-col">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold group-hover:text-foreground/80 transition-colors">
                {project.title}
              </h3>
              <ArrowUpRight className="h-4 w-4 mt-1 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0" />
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>

            <p className="text-sm text-muted-foreground border-t border-border pt-3 mb-4">
              <span className="font-medium text-foreground">Impact: </span>
              {project.impact}
            </p>

            <div className="flex items-center gap-3 mt-auto">
              {project.videoUrl && (
                <button
                  onClick={() => setVideoOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Play className="h-3.5 w-3.5" />
                  Watch Demo
                </button>
              )}
              {project.href && project.href !== "#" && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Globe className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} url={project.videoUrl} title={project.title} />
    </>
  )
}

"use client"

import { motion } from "framer-motion"
import { experience } from "@/data/experience"
import { TimelineItem } from "@/components/shared/timeline-item"
import { SectionHeading } from "@/components/shared/section-heading"

export function ExperiencePage() {
  return (
    <div className="pt-24">
      <section className="border-b border-border/40">
        <div className="container py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-medium text-muted-foreground mb-2">Career</p>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Experience</h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Professional journey building AI systems and IT infrastructure solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-medium text-muted-foreground mb-8"
          >
            Timeline
          </motion.h2>
          {experience.map((item, i) => (
            <TimelineItem key={item.role + item.company} {...item} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}

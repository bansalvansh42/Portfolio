"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  description?: string
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      </div>
      {description && <p className="text-base text-foreground/65 max-w-lg leading-relaxed">{description}</p>}
    </motion.div>
  )
}

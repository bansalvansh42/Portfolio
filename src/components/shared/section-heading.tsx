"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm font-medium text-muted-foreground mb-2">{label}</p>
      <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
      {description && <p className="text-lg text-muted-foreground max-w-xl">{description}</p>}
    </motion.div>
  )
}

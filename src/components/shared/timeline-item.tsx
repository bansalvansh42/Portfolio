"use client"

import { motion } from "framer-motion"

interface TimelineItemProps {
  role: string
  company: string
  period: string
  description: string[]
  index: number
}

export function TimelineItem({ role, company, period, description, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 h-full w-px bg-border" />
      <div className="absolute left-[-4.5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-foreground bg-background" />

      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <h3 className="text-lg font-semibold">{role}</h3>
          <span className="text-sm text-muted-foreground hidden sm:inline">&middot;</span>
          <span className="text-sm text-muted-foreground">{company}</span>
        </div>
        <p className="text-sm text-muted-foreground">{period}</p>
        <ul className="space-y-1.5">
          {description.map((item) => (
            <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface TimelineItemProps {
  role: string
  company: string
  period: string
  description: string[]
  index: number
}

export function TimelineItem({ role, company, period, description, index }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="relative pl-7 pb-10 last:pb-0"
    >
      <div className="absolute left-[3px] top-2 bottom-0 w-px bg-border last:hidden" />
      <div className="absolute left-0 top-2 h-[7px] w-[7px] rounded-full border border-foreground bg-background" />

      <button
        onClick={() => setExpanded((p) => !p)}
        className="w-full text-left cursor-pointer"
        type="button"
      >
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
              <h3 className="text-base font-semibold">{role}</h3>
              <span className="text-sm text-foreground/55">{company}</span>
            </div>
            <p className="text-xs text-foreground/40">{period}</p>
          </div>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-foreground/35 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 pt-3 pl-0">
              {description.map((item) => (
                <li key={item} className="text-sm text-foreground/65 leading-relaxed pl-4 relative">
                  <span className="absolute left-0 top-[0.6875rem] h-px w-2 bg-foreground/20" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

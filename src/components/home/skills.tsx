"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { skills, skillCategories, groupSkillsByCategory } from "@/data/skills"
import { getTechLogo, getTechColor } from "@/components/shared/tech-logos"

function TechLogo({ name }: { name: string }) {
  return (
    <span className="inline-flex flex-col items-center gap-2 whitespace-nowrap">
      <span className="w-10 h-10 flex items-center justify-center">
        {getTechLogo(name, "w-full h-full")}
      </span>
      <span className="text-[11px] text-foreground/70">{name}</span>
    </span>
  )
}

function TechPill({ name }: { name: string }) {
  const color = getTechColor(name)

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border"
      style={{ borderColor: `${color}30`, backgroundColor: `${color}08`, color: `${color}dd` }}
    >
      <span className="w-3.5 h-3.5 flex items-center justify-center">
        {getTechLogo(name, "w-full h-full")}
      </span>
      {name}
    </span>
  )
}

export function Skills() {
  const [showAll, setShowAll] = useState(false)
  const grouped = groupSkillsByCategory()
  const allNames = skills.map((s) => s.name)

  return (
    <section className="border-t border-border">
      <div className="py-20 md:py-28">
        <div className="container mb-10 flex items-center justify-between">
          <p className="text-xs text-muted-foreground tracking-wider uppercase">Stack</p>
          <button
            onClick={() => setShowAll((p) => !p)}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/50 hover:text-foreground transition-colors cursor-pointer"
            type="button"
          >
            {showAll ? "Less" : "All categories"}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-block"
            >
              {showAll ? "\u2212" : "+"}
            </motion.span>
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-16 w-max items-center">
            {[...allNames, ...allNames].map((name, i) => (
              <TechLogo key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="container mt-12 pt-8 border-t border-border">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(grouped).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="text-xs font-medium text-foreground tracking-wider uppercase mb-3">
                        {skillCategories[category as keyof typeof skillCategories] ?? category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <TechPill key={skill} name={skill} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { skills, skillCategories, groupSkillsByCategory } from "@/data/skills"
import { getTechLogo, getTechColor } from "@/components/shared/tech-logos"
import { ChevronDown } from "lucide-react"

function TechLogo({ name, slug }: { name: string; slug?: string }) {
  return (
    <span className="inline-flex flex-col items-center gap-2 whitespace-nowrap">
      <span className="w-9 h-9 flex items-center justify-center">
        {getTechLogo(name, slug, "w-full h-full")}
      </span>
      <span className="text-[11px] text-foreground/65 font-medium">{name}</span>
    </span>
  )
}

function TechPill({ name, slug }: { name: string; slug?: string }) {
  const color = slug ? getTechColor(slug) : "#666"

  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-colors hover:border-foreground/20"
      style={{ borderColor: `${color}25`, backgroundColor: `${color}08`, color }}
    >
      <span className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
        {getTechLogo(name, slug, "w-full h-full")}
      </span>
      {name}
    </span>
  )
}

export function Skills() {
  const [showAll, setShowAll] = useState(false)
  const grouped = groupSkillsByCategory()
  const marqueeSkills = skills.filter((s) => s.hasSimpleIcon)

  return (
    <section className="border-t border-border">
      <div className="py-20 md:py-28">
        <div className="container mb-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Stack</h2>
              <p className="text-sm text-foreground/65 max-w-md leading-relaxed">
                Tools and technologies I work with daily
              </p>
            </div>
            <button
              onClick={() => setShowAll((p) => !p)}
              className="inline-flex items-center gap-1.5 text-xs text-foreground/40 hover:text-foreground transition-colors cursor-pointer shrink-0 mt-1.5"
              type="button"
            >
              <span>{showAll ? "Less" : "All categories"}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Marquee — only skills with Simple Icons logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-14 w-max items-center">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <TechLogo key={`${skill.name}-${i}`} name={skill.name} slug={skill.slug} />
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
              <div className="container mt-10 pt-8 border-t border-border">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {Object.entries(grouped).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="text-xs font-semibold text-foreground/50 tracking-wider uppercase mb-3">
                        {skillCategories[category as keyof typeof skillCategories] ?? category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((name) => {
                          const skill = skills.find((s) => s.name === name)!
                          return <TechPill key={name} name={name} slug={skill.slug} />
                        })}
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

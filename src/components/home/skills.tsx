"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { skills, skillCategories, groupSkillsByCategory } from "@/data/skills"
import { getTechLogo } from "@/components/shared/tech-logos"
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

function CategoryPill({ name }: { name: string }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border border-foreground/10 bg-foreground/[0.04] text-foreground/85 hover:border-foreground/25 transition-colors"
    >
      {name}
    </span>
  )
}

export function Skills() {
  const [showAll, setShowAll] = useState(false)
  const grouped = groupSkillsByCategory()
  const marqueeSkills = skills.filter((s) => s.hasSimpleIcon)

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid-subtle [mask-image:linear-gradient(to_bottom,black_0%,transparent_80%)]" />
      <div className="relative border-t border-border">
        <div className="py-20 md:py-28">
          <div className="container mb-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Stack</h2>
                </div>
                <p className="text-sm text-foreground/65 max-w-md leading-relaxed">
                  Tools and technologies I work with daily
                </p>
              </div>
              <button
                onClick={() => setShowAll((p) => !p)}
                className="inline-flex items-center gap-1.5 text-xs text-foreground/40 hover:text-primary transition-colors cursor-pointer shrink-0 mt-1.5"
                type="button"
              >
                <span>{showAll ? "Less" : "All categories"}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

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
                <div className="container mt-10 pt-10 border-t border-border">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(grouped).map(([category, items]) => (
                      <div key={category}>
                        <h4 className="text-xs font-semibold text-foreground/50 tracking-wider uppercase mb-3">
                          <span className="text-primary/60 mr-2">&#x2014;</span>
                          {skillCategories[category as keyof typeof skillCategories] ?? category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {items.map((name) => {
                            return <CategoryPill key={name} name={name} />
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
      </div>
    </section>
  )
}

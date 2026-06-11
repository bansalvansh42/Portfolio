"use client"

import { motion } from "framer-motion"
import { skills, skillCategories, groupSkillsByCategory } from "@/data/skills"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/shared/section-heading"

export function Skills() {
  const grouped = groupSkillsByCategory()

  return (
    <section className="border-t border-border/40">
      <div className="container py-24 md:py-32">
        <SectionHeading
          label="Skills & Expertise"
          title="Technical Toolkit"
          description="Technologies and tools I work with daily to build AI-powered solutions."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {Object.entries(grouped).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h4 className="text-sm font-medium text-muted-foreground mb-4">
                {skillCategories[category as keyof typeof skillCategories] ?? category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1.5 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

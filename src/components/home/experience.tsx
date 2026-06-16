"use client"

import { experience } from "@/data/experience"
import { TimelineItem } from "@/components/shared/timeline-item"
import { SectionHeading } from "@/components/shared/section-heading"

export function Experience() {
  return (
    <section className="border-t border-border">
      <div className="container py-24 md:py-32">
        <SectionHeading
          title="Experience"
          description="Professional journey building AI systems and IT infrastructure solutions."
        />

        <div className="mx-auto max-w-xl mt-14">
          {experience.map((item, i) => (
            <TimelineItem key={item.role + item.company} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

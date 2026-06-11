"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileText } from "lucide-react"
import { personalInfo } from "@/data/personal"

export function Hero() {
  const words = personalInfo.tagline.split(" ")

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-foreground/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-foreground/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="container pt-24 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-medium text-muted-foreground mb-6 border border-border rounded-full px-4 py-1.5">
              {personalInfo.title}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            {words.map((word, i) => (
              <span
                key={i}
                className="inline-block hover:text-muted-foreground transition-colors duration-300"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {word}{i < words.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10"
          >
            {personalInfo.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="/projects"
              className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90 shadow-sm"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-11 px-6 rounded-lg border border-border text-sm font-medium transition-all hover:bg-accent"
            >
              Get in Touch
            </a>
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center h-11 px-6 rounded-lg border border-border text-sm font-medium transition-all hover:bg-accent"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  )
}

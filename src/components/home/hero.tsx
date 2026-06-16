"use client"

import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/shared/social-icons"
import { personalInfo } from "@/data/personal"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Dot-grid background */}
      <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          >
            {/* Name wordmark */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-3">
              {personalInfo.name}
              <span className="text-primary ml-1">.</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/60 font-medium mb-6">
              {personalInfo.tagline}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-sm sm:text-base text-foreground/60 leading-relaxed mb-12 max-w-xl"
          >
            {personalInfo.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/35 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/35 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-foreground/35 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <MailIcon className="h-6 w-6" />
            </a>
            <span className="text-border mx-0.5" aria-hidden="true">/</span>
            <a
              href="#proof-of-work"
              className="text-sm sm:text-base text-foreground/50 hover:text-foreground transition-colors font-medium"
            >
              Work
            </a>
            <a
              href={personalInfo.resumeUrl ?? "#"}
              target={personalInfo.resumeUrl ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-foreground/50 hover:text-foreground transition-colors font-medium"
            >
              Résumé
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

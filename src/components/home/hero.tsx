"use client"

import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/shared/social-icons"
import { personalInfo } from "@/data/personal"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[80vh] flex items-center">
      <div className="container pt-16 md:pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm text-foreground/45 font-medium mb-2">
              {personalInfo.name}
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 leading-[1.15]">
              {personalInfo.tagline}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-sm text-foreground/65 leading-relaxed mb-8 max-w-lg"
          >
            {personalInfo.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/40 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-foreground/40 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <MailIcon className="h-5 w-5" />
            </a>
            <span className="text-border mx-1" aria-hidden="true">/</span>
            <a
              href="#proof-of-work"
              className="text-sm text-foreground/50 hover:text-foreground transition-colors"
            >
              Work
            </a>
            <a
              href={personalInfo.resumeUrl ?? "#"}
              target={personalInfo.resumeUrl ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-sm text-foreground/50 hover:text-foreground transition-colors"
            >
              Résumé
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

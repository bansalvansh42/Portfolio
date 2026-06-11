"use client"

import { motion } from "framer-motion"
import { Mail, Code2, Globe, ArrowUpRight } from "lucide-react"
import { personalInfo } from "@/data/personal"

const links = [
  { label: "GitHub", href: personalInfo.github, icon: Code2 },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: Globe },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
]

export function ContactPage() {
  return (
    <div className="pt-24">
      <section className="border-b border-border/40">
        <div className="container py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-medium text-muted-foreground mb-2">Get in Touch</p>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Contact</h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Interested in collaborating on AI projects or hiring for a role? Let&apos;s talk.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border p-5 transition-all hover:border-foreground/20 hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.href.replace("mailto:", "")}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

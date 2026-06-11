export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  impact: string
  href: string
  videoUrl?: string
  demoUrl?: string
}

export interface Skill {
  name: string
  category: SkillCategory
}

export type SkillCategory =
  | "ai"
  | "automation"
  | "language"
  | "framework"
  | "devops"
  | "database"
  | "cloud"
  | "it"

export interface Experience {
  role: string
  company: string
  period: string
  description: string[]
}

export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  about: string
  email: string
  github: string
  linkedin: string
  resumeUrl?: string
}

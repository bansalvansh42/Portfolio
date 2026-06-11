import type { Metadata } from "next"
import { ProjectsPage } from "./projects-page"

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of AI engineering projects including voice AI, automation, RAG, and more.",
}

export default function Projects() {
  return <ProjectsPage />
}

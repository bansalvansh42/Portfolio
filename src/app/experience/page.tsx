import type { Metadata } from "next"
import { ExperiencePage } from "./experience-page"

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and career timeline in AI engineering and IT operations.",
}

export default function Experience() {
  return <ExperiencePage />
}

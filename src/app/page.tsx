import { Hero } from "@/components/home/hero"
import { Skills } from "@/components/home/skills"
import { ProofOfWork } from "@/components/home/proof-of-work"
import { Experience } from "@/components/home/experience"

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <ProofOfWork />
      <Experience />
    </>
  )
}

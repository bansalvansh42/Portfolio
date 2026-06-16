import type { Experience } from "@/types/content"

export const experience: Experience[] = [
  {
    role: "AI Engineer (Freelance)",
    company: "Upwork / Direct Clients",
    period: "2024 — Present",
    description: [
      "Built and deployed custom AI agent solutions for 6+ clients across healthcare, e-commerce, and SaaS, generating $80K+ in revenue",
      "Developed production voice AI appointment schedulers handling 200+ calls/week with 92% booking completion rate using VAPI + GPT-4",
      "Designed RAG knowledge assistants over 10K+ page corpora with 99% citation accuracy, deployed to 50+ internal users",
      "Created n8n automation networks integrating CRM, email, Slack, and internal APIs, saving 120+ engineering hours/month",
    ],
  },
  {
    role: "IT Operations Specialist",
    company: "Cubastion Consulting",
    period: "2022 — 2024",
    description: [
      "Managed Azure infrastructure and Microsoft Intune for 500+ endpoints across 3 office locations",
      "Automated IT operational workflows reducing incident response time by 60% through PowerShell automation and Intune policies",
      "Developed internal tooling for automated software deployment and patch management, covering 200+ workstations",
      "Led migration of on-premise infrastructure to Azure, cutting hosting costs by 35% and improving uptime to 99.9%",
    ],
  },
]

import type { Skill, SkillCategory } from "@/types/content"

export const skillCategories: Record<SkillCategory, string> = {
  ai: "AI & LLMs",
  automation: "Automation & Orchestration",
  language: "Languages & Runtimes",
  framework: "Frameworks & SDKs",
  devops: "Infrastructure & MLOps",
  database: "Databases & Vector Stores",
  cloud: "Cloud & Platform",
  it: "IT & Enterprise",
}

export const skills: Skill[] = [
  { name: "AI Agents", category: "ai" },
  { name: "LangChain", category: "ai" },
  { name: "LangGraph", category: "ai" },
  { name: "RAG Pipelines", category: "ai" },
  { name: "GPT-4 / GPT-4o", category: "ai" },
  { name: "Claude 3.5 Sonnet", category: "ai" },
  { name: "Ollama", category: "ai" },
  { name: "Prompt Engineering", category: "ai" },
  { name: "Agentic Workflows", category: "ai" },
  { name: "n8n", category: "automation" },
  { name: "API Orchestration", category: "automation" },
  { name: "Webhook Architecture", category: "automation" },
  { name: "Python", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Node.js", category: "language" },
  { name: "FastAPI", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "LangSmith", category: "framework" },
  { name: "Docker", category: "devops" },
  { name: "MLflow", category: "devops" },
  { name: "CI/CD Pipelines", category: "devops" },
  { name: "PostgreSQL", category: "database" },
  { name: "Pinecone", category: "database" },
  { name: "ChromaDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Azure", category: "cloud" },
  { name: "Hugging Face", category: "cloud" },
  { name: "Microsoft Intune", category: "it" },
]

export function groupSkillsByCategory(): Record<string, string[]> {
  const grouped: Record<string, string[]> = {}
  for (const skill of skills) {
    if (!grouped[skill.category]) {
      grouped[skill.category] = []
    }
    grouped[skill.category].push(skill.name)
  }
  return grouped
}

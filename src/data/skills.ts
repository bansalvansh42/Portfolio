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
  { name: "AI Agents", category: "ai", hasSimpleIcon: false },
  { name: "LangChain", category: "ai", slug: "langchain", hasSimpleIcon: true },
  { name: "LangGraph", category: "ai", slug: "langgraph", hasSimpleIcon: true },
  { name: "RAG Pipelines", category: "ai", hasSimpleIcon: false },
  { name: "GPT-4 / GPT-4o", category: "ai", hasSimpleIcon: false },
  { name: "Claude 3.5 Sonnet", category: "ai", slug: "anthropic", hasSimpleIcon: true },
  { name: "Ollama", category: "ai", slug: "ollama", hasSimpleIcon: true },
  { name: "Prompt Engineering", category: "ai", hasSimpleIcon: false },
  { name: "Agentic Workflows", category: "ai", hasSimpleIcon: false },
  { name: "n8n", category: "automation", slug: "n8n", hasSimpleIcon: true },
  { name: "API Orchestration", category: "automation", hasSimpleIcon: false },
  { name: "Webhook Architecture", category: "automation", hasSimpleIcon: false },
  { name: "Python", category: "language", slug: "python", hasSimpleIcon: true },
  { name: "TypeScript", category: "language", slug: "typescript", hasSimpleIcon: true },
  { name: "Node.js", category: "language", slug: "nodedotjs", hasSimpleIcon: true },
  { name: "FastAPI", category: "framework", slug: "fastapi", hasSimpleIcon: true },
  { name: "Next.js", category: "framework", slug: "nextdotjs", hasSimpleIcon: true },
  { name: "LangSmith", category: "framework", hasSimpleIcon: false },
  { name: "Docker", category: "devops", slug: "docker", hasSimpleIcon: true },
  { name: "MLflow", category: "devops", slug: "mlflow", hasSimpleIcon: true },
  { name: "CI/CD Pipelines", category: "devops", slug: "githubactions", hasSimpleIcon: true },
  { name: "PostgreSQL", category: "database", slug: "postgresql", hasSimpleIcon: true },
  { name: "Pinecone", category: "database", hasSimpleIcon: false },
  { name: "ChromaDB", category: "database", hasSimpleIcon: false },
  { name: "Redis", category: "database", slug: "redis", hasSimpleIcon: true },
  { name: "Azure", category: "cloud", hasSimpleIcon: false },
  { name: "Hugging Face", category: "cloud", slug: "huggingface", hasSimpleIcon: true },
  { name: "Microsoft Intune", category: "it", hasSimpleIcon: false },
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

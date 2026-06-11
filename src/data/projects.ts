import type { Project } from "@/types/content"

export const projects: Project[] = [
  {
    id: "voice-appointment-scheduler",
    title: "AI-Powered Voice Appointment Scheduler",
    description:
      "Built a voice AI assistant that handles full-cycle appointment booking through natural phone conversations. Integrated with Google Calendar for real-time slot availability and confirmation.",
    tech: ["VAPI", "GPT-4", "FastAPI", "Google Calendar API", "Twilio"],
    impact: "Reduced manual scheduling effort by 70%, handling 200+ appointments per week with 92% booking completion rate.",
    href: "#",
    videoUrl: "https://www.loom.com/embed/9daaf492ed374d12b0588bcdca544c3e",
  },
  {
    id: "it-helpdesk-ai",
    title: "IT Helpdesk AI Assistant",
    description:
      "Intelligent helpdesk assistant that automates tier-1 IT support resolution using RAG over internal knowledge bases. Integrates with ticketing systems to auto-resolve and escalate intelligently.",
    tech: ["LangChain", "RAG", "FastAPI", "Docker", "ChromaDB", "Claude"],
    impact: "Automated 40% of incoming IT support tickets end-to-end, reducing average resolution time from 4 hours to 12 minutes.",
    href: "#",
  },
  {
    id: "resume-screening-agent",
    title: "AI Resume Screening Agent",
    description:
      "Multi-agent system that parses, analyzes, and ranks resumes against job descriptions using LLM-powered evaluation. Includes bias detection and explainable scoring.",
    tech: ["Python", "GPT-4", "FastAPI", "PostgreSQL", "Pinecone", "LangGraph"],
    impact: "Processed 1,500+ resumes in under 3 minutes with 94% ranking accuracy vs. human reviewers, reducing screening time by 85%.",
    href: "#",
  },
  {
    id: "n8n-automations",
    title: "n8n Enterprise Automation Workflows",
    description:
      "Designed and deployed complex multi-step automation workflows connecting CRM, email, Slack, and internal APIs for end-to-end business process automation.",
    tech: ["n8n", "PostgreSQL", "REST APIs", "Webhooks", "Redis", "Docker"],
    impact: "Automated 15+ cross-departmental workflows, saving 120+ engineering hours per month across sales, support, and operations.",
    href: "#",
  },
  {
    id: "rag-knowledge-assistant",
    title: "RAG Knowledge Assistant",
    description:
      "Retrieval-augmented generation system for querying custom document repositories with citation-grounded answers. Supports PDFs, Notion exports, and Confluence pages.",
    tech: ["LangChain", "OpenAI Embeddings", "Ollama", "ChromaDB", "FastAPI", "Docker"],
    impact: "Enabled 99% accurate document Q&A across a 10,000+ page knowledge base, adopted by 50+ internal users.",
    href: "#",
  },
]

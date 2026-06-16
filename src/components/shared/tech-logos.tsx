import type { ReactNode } from "react"

function Python({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="12" rx="10" ry="7" fill="#FFD43B" transform="rotate(-30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="7" fill="#306998" transform="rotate(30 12 12)" />
      <circle cx="12" cy="9" r="1" fill="#fff" />
      <circle cx="12" cy="15" r="1" fill="#fff" />
    </svg>
  )
}

function TypeScript({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <text x="12" y="17" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">TS</text>
    </svg>
  )
}

function NodeJs({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#539E43" />
      <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="Arial">N</text>
    </svg>
  )
}

function Docker({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="3" y="8" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="7" y="8" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="7" y="12" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="11" y="12" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="11" y="8" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="11" y="4" width="3" height="3" rx="0.5" fill="#2496ED" />
      <path d="M3 14c0 4 3 5 7 5 4 0 7-1 7-5" fill="none" stroke="#2496ED" strokeWidth="1.5" />
      <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#2496ED" />
    </svg>
  )
}

function PostgreSQL({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M12 2C10 2 7 4 7 8s2 6 5 6 5-2 5-6-2-6-5-6z" fill="#4169E1" />
      <path d="M9 14c0 0-2 3 0 5s3 2 3 2" fill="none" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="7" r="1.5" fill="#fff" />
    </svg>
  )
}

function Redis({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="4" y="18" width="16" height="4" rx="1" fill="#DC382D" />
      <rect x="6" y="14" width="12" height="4" rx="1" fill="#DC382D" />
      <rect x="8" y="10" width="8" height="4" rx="1" fill="#DC382D" />
      <rect x="6" y="6" width="12" height="4" rx="1" fill="#DC382D" fillOpacity="0.7" />
    </svg>
  )
}

function Azure({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M13 2L3 20h7l3-7 3 7h7L13 2z" fill="#0078D4" />
      <path d="M13 2L10 11l3-2 3 2-3-11z" fill="#fff" fillOpacity="0.3" />
    </svg>
  )
}

function FastAPI({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M12 2L4 14h6l-2 8 10-12h-6l2-8z" fill="#009688" />
    </svg>
  )
}

function NextJs({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="10" fill="#000" />
      <path d="M17 17l-7-10" fill="none" stroke="#fff" strokeWidth="1.5" />
      <path d="M10 17h3M14 7h3" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function LangChain({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="5" r="2.5" fill="#1C3D3D" />
      <circle cx="5" cy="19" r="2.5" fill="#1C3D3D" />
      <circle cx="19" cy="19" r="2.5" fill="#1C3D3D" />
      <line x1="12" y1="7.5" x2="7" y2="16.5" stroke="#1C3D3D" strokeWidth="1.5" />
      <line x1="12" y1="7.5" x2="17" y2="16.5" stroke="#1C3D3D" strokeWidth="1.5" />
      <line x1="7" y1="16.5" x2="5" y2="16.5" stroke="#1C3D3D" strokeWidth="1.5" />
      <line x1="17" y1="16.5" x2="19" y2="16.5" stroke="#1C3D3D" strokeWidth="1.5" />
    </svg>
  )
}

function LangGraph({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="4" r="2" fill="#0EA5E9" />
      <circle cx="4" cy="20" r="2" fill="#0EA5E9" />
      <circle cx="20" cy="20" r="2" fill="#0EA5E9" />
      <circle cx="12" cy="12" r="1.5" fill="#0EA5E9" fillOpacity="0.5" />
      <line x1="12" y1="6" x2="12" y2="10.5" stroke="#0EA5E9" strokeWidth="1" />
      <line x1="5.5" y1="18.5" x2="10.5" y2="13" stroke="#0EA5E9" strokeWidth="1" />
      <line x1="18.5" y1="18.5" x2="13.5" y2="13" stroke="#0EA5E9" strokeWidth="1" />
    </svg>
  )
}

function Ollama({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <ellipse cx="12" cy="14" rx="6" ry="5" fill="#6366F1" />
      <circle cx="9" cy="12" r="1" fill="#fff" />
      <circle cx="15" cy="12" r="1" fill="#fff" />
      <path d="M10 16c.5.5 1.5 1 2 1s1.5-.5 2-1" fill="none" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" />
      <ellipse cx="12" cy="8" rx="4" ry="3" fill="#4F46E5" />
    </svg>
  )
}

function N8nLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="9" fill="#E11D48" />
      <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="Arial">n</text>
    </svg>
  )
}

function ChromaDB({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" fill="#EF4444" />
      <circle cx="12" cy="12" r="3" fill="#fff" />
      <line x1="12" y1="4" x2="12" y2="9" stroke="#fff" strokeWidth="1" />
      <line x1="12" y1="15" x2="12" y2="20" stroke="#fff" strokeWidth="1" />
    </svg>
  )
}

function Pinecone({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M12 2L6 9l3 3 3-4 3 4 3-3-6-7z" fill="#F97316" />
      <path d="M12 8l-4 6 2 2 2-3 2 3 2-2-4-6z" fill="#F97316" fillOpacity="0.7" />
    </svg>
  )
}

function Mlflow({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="8" fill="none" stroke="#0194E2" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="#0194E2" />
      <path d="M4 12c0 4 2 7 4 7s4-1 4-3" fill="none" stroke="#0194E2" strokeWidth="1" strokeDasharray="2 1" />
    </svg>
  )
}

function LangSmith({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#22C55E" fillOpacity="0.15" stroke="#22C55E" strokeWidth="1.5" />
      <path d="M7 17L17 7" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7" cy="17" r="1.5" fill="#22C55E" />
      <circle cx="17" cy="7" r="1.5" fill="#22C55E" />
    </svg>
  )
}

function HuggingFace({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="9" fill="#FFD21E" />
      <circle cx="9" cy="10" r="1.5" fill="#333" />
      <circle cx="15" cy="10" r="1.5" fill="#333" />
      <path d="M9 15c1 1 2 1.5 3 1.5s2-.5 3-1.5" fill="none" stroke="#333" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

function Intune({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="5" y="10" width="14" height="10" rx="1.5" fill="#00A4EF" />
      <path d="M8 10V7c0-2 1.5-3.5 4-3.5S16 5 16 7v3" fill="none" stroke="#00A4EF" strokeWidth="1.5" />
      <circle cx="12" cy="15" r="1.5" fill="#fff" />
      <line x1="12" y1="15" x2="12" y2="17" stroke="#fff" strokeWidth="0.8" />
    </svg>
  )
}

function Generic({ name, color, className = "w-5 h-5" }: { name: string; color: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="4" fill={color} fillOpacity="0.15" />
      <text x="12" y="16" textAnchor="middle" fill={color} fontSize="11" fontWeight="bold" fontFamily="Arial">
        {name.slice(0, 2).toUpperCase()}
      </text>
    </svg>
  )
}

type LogoFactory = (className?: string) => ReactNode

const logoMap: Record<string, { component: LogoFactory; color: string }> = {
  Python: { component: (cn) => <Python className={cn} />, color: "#306998" },
  TypeScript: { component: (cn) => <TypeScript className={cn} />, color: "#3178C6" },
  "Node.js": { component: (cn) => <NodeJs className={cn} />, color: "#539E43" },
  Docker: { component: (cn) => <Docker className={cn} />, color: "#2496ED" },
  PostgreSQL: { component: (cn) => <PostgreSQL className={cn} />, color: "#4169E1" },
  Redis: { component: (cn) => <Redis className={cn} />, color: "#DC382D" },
  Azure: { component: (cn) => <Azure className={cn} />, color: "#0078D4" },
  FastAPI: { component: (cn) => <FastAPI className={cn} />, color: "#009688" },
  "Next.js": { component: (cn) => <NextJs className={cn} />, color: "#000" },
  LangChain: { component: (cn) => <LangChain className={cn} />, color: "#1C3D3D" },
  LangGraph: { component: (cn) => <LangGraph className={cn} />, color: "#0EA5E9" },
  Ollama: { component: (cn) => <Ollama className={cn} />, color: "#6366F1" },
  n8n: { component: (cn) => <N8nLogo className={cn} />, color: "#E11D48" },
  ChromaDB: { component: (cn) => <ChromaDB className={cn} />, color: "#EF4444" },
  Pinecone: { component: (cn) => <Pinecone className={cn} />, color: "#F97316" },
  MLflow: { component: (cn) => <Mlflow className={cn} />, color: "#0194E2" },
  LangSmith: { component: (cn) => <LangSmith className={cn} />, color: "#22C55E" },
  "Hugging Face": { component: (cn) => <HuggingFace className={cn} />, color: "#FFD21E" },
  "Microsoft Intune": { component: (cn) => <Intune className={cn} />, color: "#00A4EF" },
  "AI Agents": { component: (cn) => <Generic name="AI" color="#7C3AED" className={cn} />, color: "#7C3AED" },
  "RAG Pipelines": { component: (cn) => <Generic name="RAG" color="#8B5CF6" className={cn} />, color: "#8B5CF6" },
  "GPT-4 / GPT-4o": { component: (cn) => <Generic name="GPT" color="#10B981" className={cn} />, color: "#10B981" },
  "Claude 3.5 Sonnet": { component: (cn) => <Generic name="CL" color="#D97706" className={cn} />, color: "#D97706" },
  "Prompt Engineering": { component: (cn) => <Generic name="PE" color="#EC4899" className={cn} />, color: "#EC4899" },
  "Agentic Workflows": { component: (cn) => <Generic name="AW" color="#3B82F6" className={cn} />, color: "#3B82F6" },
  "API Orchestration": { component: (cn) => <Generic name="AO" color="#0891B2" className={cn} />, color: "#0891B2" },
  "Webhook Architecture": { component: (cn) => <Generic name="WH" color="#7C3AED" className={cn} />, color: "#7C3AED" },
  "CI/CD Pipelines": { component: (cn) => <Generic name="CI" color="#E94E31" className={cn} />, color: "#E94E31" },
}

export function getTechLogo(name: string, className?: string): ReactNode {
  return logoMap[name]?.component(className) ?? <Generic name={name} color="#666" className={className} />
}

export function getTechColor(name: string): string {
  return logoMap[name]?.color ?? "#666"
}

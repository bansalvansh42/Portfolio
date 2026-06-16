import type { ReactNode } from "react"

const logoColors: Record<string, string> = {
  python: "#3776AB",
  typescript: "#3178C6",
  nodedotjs: "#5FA04E",
  docker: "#2496ED",
  postgresql: "#4169E1",
  redis: "#FF4438",
  fastapi: "#009688",
  nextdotjs: "#000000",
  langchain: "#7FC8FF",
  langgraph: "#1C3C3C",
  ollama: "#000000",
  n8n: "#EA4B71",
  huggingface: "#FFD21E",
  mlflow: "#0194E2",
  anthropic: "#191919",
  githubactions: "#2088FF",
}

export function getTechColor(name: string): string {
  return logoColors[name] ?? "#666"
}

export function getTechLogo(name: string, slug?: string, className?: string): ReactNode {
  if (!slug) {
    return <SimpleIconFallback name={name} className={className} />
  }
  return <SimpleIconImg slug={slug} className={className} />
}

function SimpleIconImg({ slug, className = "w-5 h-5" }: { slug: string; className?: string }) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      className={`${className} object-contain`}
      loading="lazy"
      draggable={false}
    />
  )
}

function SimpleIconFallback({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" fillOpacity="0.1" />
      <text
        x="12" y="16" textAnchor="middle"
        fill="currentColor" fillOpacity="0.6"
        fontSize="10" fontWeight="600"
        fontFamily="system-ui, sans-serif"
      >
        {name.slice(0, 2).toUpperCase()}
      </text>
    </svg>
  )
}

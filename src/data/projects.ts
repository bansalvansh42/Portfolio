import type { Project } from "@/types/content"

export const projects: Project[] = [
  {
    id: "talentpilot",
    title: "TalentPilot AI",
    description:
      "Built a multi-agent AI recruitment platform that automates candidate evaluation from resume parsing and screening through interview design, evaluation, and final ranking. Orchestrated specialized AI agents with LangGraph and enhanced recruiter workflows using RAG-powered assistants and persistent conversation memory.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "LangGraph",
      "Ollama",
      "Qwen3",
      "pgvector",
      "Docker"
    ],
    impact:
      "Automates the end-to-end recruitment evaluation pipeline with specialized AI agents, RAG-based context retrieval, persistent memory, automated evaluation, ranking, and recruiter/candidate AI assistants.",
    href: "https://github.com/bansalvansh42/TalentPilot",
    videoUrl: "",
  },
  {
    id: "voice-appointment-scheduler",
    title: "AI-Powered Voice Appointment Scheduler",
    description:
      "Built a voice-enabled appointment booking system that allows users to create, view, modify, and cancel appointments through natural voice commands. Integrated VAPI AI with Google Calendar for real-time scheduling and added automated email confirmations and reminders.",
    tech: [
      "VAPI AI",
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Google Calendar API",
      "Nodemailer"
    ],
    impact:
      "Automates appointment scheduling through voice interactions, synchronizing appointments with Google Calendar while providing email confirmations and reminders.",
    href: "https://github.com/bansalvansh42/AI-Powered-Voice-Based-Appointment-Booking-main",
    videoUrl:
      "https://www.loom.com/embed/9daaf492ed374d12b0588bcdca544c3e",
  },
  {
    id: "pos-cravebane",
    title: "CraveBane POS",
    description:
      "Built a modern restaurant Point of Sale system for managing orders, billing, kitchen operations, customer details, payments, invoices, notifications, and order history. Added offline resilience with IndexedDB and packaged the application as an installable PWA.",
    tech: [
      "React 19",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Vite",
      "IndexedDB",
      "PWA",
      "React PDF",
      "QR Code"
    ],
    impact:
      "Provides an end-to-end restaurant ordering and kitchen workflow covering cart management, discounts, Cash/UPI/Split payments, real-time order status tracking, invoices, notifications, and offline order storage.",
    href: "https://github.com/bansalvansh42/Pos_CraveBane",
    videoUrl: "",
  },

]

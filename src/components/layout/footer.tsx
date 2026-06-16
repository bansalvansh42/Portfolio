import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/shared/social-icons"
import { personalInfo } from "@/data/personal"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-foreground/50">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-foreground/40 hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

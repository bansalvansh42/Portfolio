"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm transition-colors hover:text-foreground",
        isActive ? "text-foreground" : "text-muted-foreground"
      )}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-1/2 h-0.5 w-1 rounded-full bg-foreground -translate-x-1/2" />
      )}
    </Link>
  )
}

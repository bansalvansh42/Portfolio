import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Vansh Bansal — AI Engineer",
    template: "%s — Vansh Bansal",
  },
  description: "AI Engineer building AI Agents, Automations, and Intelligent Systems.",
  metadataBase: new URL("https://vanshbansal.dev"),
  openGraph: {
    title: "Vansh Bansal — AI Engineer",
    description: "Building AI Agents, Automations, and Intelligent Systems.",
    url: "https://vanshbansal.dev",
    siteName: "Vansh Bansal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Bansal — AI Engineer",
    description: "Building AI Agents, Automations, and Intelligent Systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

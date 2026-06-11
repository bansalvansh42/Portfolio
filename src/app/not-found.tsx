import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center text-center max-w-md">
        <span className="text-7xl font-bold tracking-tight mb-4">404</span>
        <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

"use client"

import { Modal } from "@/components/ui/modal"

interface VideoModalProps {
  open: boolean
  onClose: () => void
  url?: string
  title: string
}

function toEmbedUrl(url?: string): string | undefined {
  if (!url) return undefined
  if (url.includes("loom.com/share/")) {
    return url.replace("loom.com/share/", "loom.com/embed/")
  }
  if (url.includes("youtube.com/watch?v=")) {
    return url.replace("youtube.com/watch?v=", "youtube.com/embed/")
  }
  if (url.includes("youtu.be/")) {
    return url.replace("youtu.be/", "youtube.com/embed/")
  }
  return url
}

export function VideoModal({ open, onClose, url, title }: VideoModalProps) {
  const embedUrl = toEmbedUrl(url)

  return (
    <Modal open={open} onClose={onClose}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{title} — Demo</h3>
        {embedUrl ? (
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <iframe
              src={embedUrl}
              title={`${title} demo`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Demo video coming soon</p>
          </div>
        )}
      </div>
    </Modal>
  )
}

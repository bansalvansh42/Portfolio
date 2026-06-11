import type { Metadata } from "next"
import { ContactPage } from "./contact-page"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vansh Bansal for AI engineering opportunities.",
}

export default function Contact() {
  return <ContactPage />
}

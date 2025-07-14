import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mammone Software - Full-Stack Web Development",
  description:
    "Professional web development services for modern businesses. Custom web applications, mobile-first design, and scalable backend solutions.",
  keywords: "web development, full-stack developer, React, Next.js, freelance developer, custom software",
  authors: [{ name: "Mammone Software" }],
  openGraph: {
    title: "Mammone Software - Full-Stack Web Development",
    description: "Professional web development services for modern businesses.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

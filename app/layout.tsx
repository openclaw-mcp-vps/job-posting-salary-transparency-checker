import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Salary Transparency Checker — Verify Job Posting Compliance',
  description: 'Instantly check if your job postings comply with state salary transparency laws. Built for HR teams and recruiting agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b6dc0e3e-9baf-4c4d-b5d2-1502e07a334d"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}

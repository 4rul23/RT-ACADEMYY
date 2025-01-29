import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  title: 'Learning Paths - RT Academy',
  description: 'Structured learning paths for cybersecurity education',
}

export default function PathLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-screen bg-[#0A1525] relative ${GeistMono.className}`}>
      {children}
    </div>
  )
}

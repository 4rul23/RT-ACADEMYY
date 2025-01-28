import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { div } from 'framer-motion/client'

export const metadata: Metadata = {
  title: 'Module - RT Academy',
  description: 'Pilihan modul pembelajaran di RT Academy',
}

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse" />
      {children}
    </div>
  )
}

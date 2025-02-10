import type { Metadata } from 'next'
import React from 'react'
import { GeistMono } from 'geist/font/mono'
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
 <div className="relative min-h-screen overflow-x-hidden bg-[#0A1525]">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute rounded-full top-1/4 -left-12 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse"/>
        <div className="absolute rounded-full bottom-1/4 -right-12 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"/>
        <div className="absolute delay-150 rounded-full top-3/4 left-1/4 w-96 h-96 bg-purple-500/20 blur-3xl animate-pulse"/>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"/>
      </div>
      <div className={`relative min-h-screen ${GeistMono.className}`}>
      {children}
        </div>
        </div>
  )
}

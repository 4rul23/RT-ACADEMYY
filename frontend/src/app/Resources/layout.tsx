import React from 'react'
import { GeistMono } from 'geist/font/mono'

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-screen bg-[#0A1525] ${GeistMono.className}`}>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"/>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"/>
      </div>

      {/* Content Container */}
      <div className="relative">
        <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}

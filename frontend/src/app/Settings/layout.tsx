import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  title: 'Settings - RT Academy',
  description: 'Manage your RT Academy account settings',
}

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-screen bg-[#0A1525] relative ${GeistMono.className}`}>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse" />
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import SidebarNav from '../Academy/components/SideNav'

export default function ClientLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isModulePage = pathname.includes('/Module/')

  return (
    <div className="flex pt-16">
      {!isModulePage && <SidebarNav />}
      <main className={`flex-1 min-h-screen ${!isModulePage ? 'pl-64' : ''}`}>
        {children}
      </main>
    </div>
  )
}

'use client'

import { GeistMono } from 'geist/font/mono'
import DashboardNav from './components/DashboardNav'
import StatsSection from './components/StatsSection'
import PlatformGrid from './components/PlatformGrid'

export default function DashboardPage() {
  return (
    <div className={`${GeistMono.className}`}>
      <DashboardNav />
      <div className="px-6 pt-24 pb-12">
        <div className="mx-auto max-w-7xl">
          <StatsSection />
          <PlatformGrid />
        </div>
      </div>
    </div>
  )
}

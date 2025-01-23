'use client'

import { GeistMono } from 'geist/font/mono'
import CourseProgress from './components/Progress'
import QuickActions from './components/QuickActions'
import AchievementSection from './components/Achievement'

export default function AcademyPage() {
  return (
    <div className={`p-8 ${GeistMono.className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Course Progress - 8 columns */}
          <div className="col-span-8">
            <CourseProgress />
          </div>

          {/* Quick Actions Sidebar - 4 columns */}
          <div className="col-span-4">
            <QuickActions />
          </div>
        </div>

        {/* Achievements Section - Full width */}
        <AchievementSection />
      </div>
    </div>
  )
}

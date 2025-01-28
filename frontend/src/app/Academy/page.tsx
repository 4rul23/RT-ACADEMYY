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

          <div className="col-span-8">
            <CourseProgress />
          </div>


          <div className="col-span-4">
            <QuickActions />
          </div>
        </div>


        <AchievementSection />
      </div>
    </div>
  )
}

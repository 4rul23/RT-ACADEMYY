'use client'

import { GeistMono } from 'geist/font/mono'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import VisionMissionSection from './components/VisionMissionSection'

export default function TujuanPage() {
  return (
    <div className={`${GeistMono.className}`}>
      <HeroSection />
      <StatsSection />
      <VisionMissionSection />
    </div>
  )
}

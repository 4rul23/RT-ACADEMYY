'use client'

import { GeistMono } from 'geist/font/mono'
import HeroSection from './components/Herosection'
import ResourceCategories from './components/ResourceCategories'
import LatestTutorials from './components/LatestTutorials'

export default function ResourcesPage() {
  return (
    <div className={`px-6 py-20 mx-auto max-w-7xl ${GeistMono.className}`}>
      <HeroSection />
      <ResourceCategories />
      <LatestTutorials />
    </div>
  )
}

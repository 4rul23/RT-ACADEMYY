'use client'

import { useState } from 'react'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeatureSection'
import HighlightsSection from './components/HighlightsSection'
import { GeistMono } from 'geist/font/mono'

export default function ProductPage() {
  const [selectedTrack, setSelectedTrack] = useState('frontend')

  return (
    <div className={`${GeistMono.className}`}>

      <HeroSection
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
      <FeaturesSection />
      <HighlightsSection />
    </div>
  )
}

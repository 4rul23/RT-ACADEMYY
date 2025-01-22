'use client'

import { useState } from 'react'
import { GeistMono } from 'geist/font/mono'
import HeaderSection from './components/HeaderSection'
import PricingCards from './components/PricingCards'
import FeaturesSection from './components/FeaturesSection'

export default function PricePage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className={`px-4 py-20 mx-auto max-w-7xl ${GeistMono.className}`}>
      <HeaderSection
        isYearly={isYearly}
        setIsYearly={setIsYearly}
      />
      <PricingCards isYearly={isYearly} />
      <FeaturesSection />
    </div>
  )
}

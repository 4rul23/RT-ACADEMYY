'use client'

import React from 'react'
import { GeistMono } from 'geist/font/mono'
import { motion } from 'framer-motion'
import Hero from './components/HeroSection'
import Features from './components/FeatureSection'
import Highlights from './components/HighlightsSection'

export default function ProdukPage() {
  return (
    <div className={`min-h-screen bg-[#0A1525] ${GeistMono.className}`}>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute rounded-full top-1/4 -left-12 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse"/>
        <div className="absolute rounded-full bottom-1/4 -right-12 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"/>
        <div className="absolute delay-150 rounded-full top-3/4 left-1/4 w-96 h-96 bg-purple-500/20 blur-3xl animate-pulse"/>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"/>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-24 "
        >
            <Hero />
            <Features />
            <Highlights />
        </motion.div>
      </div>
    </div>
  )
}

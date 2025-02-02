'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { User, BookOpen, Shield } from 'lucide-react'
import ProfileSection from './components/Profile'
import SecuritySection from './components/Security'
import LearningSection from './components/Learning'
import DashboardNav from '../Dashboard/components/DashboardNav'


const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'learning', label: 'Learning', icon: BookOpen },
  { id: 'security', label: 'Security', icon: Shield }
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState('profile')

  return (
<div className="min-h-screen bg-[#0A1525]">
      <DashboardNav />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"/>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"/>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"/>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"/>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-gray-400">Manage your RT Academy preferences</p>
        </motion.div>


        <div className="flex gap-8">

          <nav className="w-64 space-y-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ x: 4 }}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </motion.button>
            ))}
          </nav>


          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 p-6 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
          >
            {activeTab === 'profile' && (
              <ProfileSection />
            )}
            {activeTab === 'learning' && (
              <LearningSection />
            )}
            {activeTab === 'security' && (
              <SecuritySection />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

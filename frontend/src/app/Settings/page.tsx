'use client'

import { motion } from 'framer-motion'
import { GeistMono } from 'geist/font/mono'
import { User, Bell, Moon, Shield, Mail, Camera } from 'lucide-react'
import Image from 'next/image'
import DashboardNav from '../Dashboard/components/DashboardNav'
import { useState } from 'react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Moon },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'email', label: 'Email', icon: Mail },
  ]

  return (
    <div className={GeistMono.className}>
      <DashboardNav />
      <div className="pt-24 min-h-screen bg-[#0A1525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-8"
          >
            {/* Header */}
            <div>
              <h1 className="text-2xl font-semibold text-white">Account Settings</h1>
              <p className="text-gray-400 mt-1">Manage your account preferences</p>
            </div>

            {/* Main Content */}
            <div className="flex gap-8">
              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-64"
              >
                <nav className="space-y-1.5">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/20 shadow-lg shadow-cyan-500/10'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-cyan-400' : ''}`} />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </motion.div>

              {/* Content Area */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1"
              >
                <div className="space-y-6">
                  {activeTab === 'profile' && (
                    <div className="grid gap-8">
                      {/* Profile Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-6">
                          <div className="relative group">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/10">
                              <Image
                                src="/placeholder.jpg"
                                alt="Profile"
                                width={96}
                                height={96}
                                className="object-cover"
                              />
                            </div>
                            <button className="absolute bottom-2 right-2 p-2 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition-colors">
                              <Camera className="w-4 h-4" />
                            </button>
                          </div>
                          <div>
                            <h2 className="text-xl font-semibold text-white mb-1">Username</h2>
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-1 text-xs rounded-md bg-cyan-500/20 text-cyan-400 border border-cyan-500/20">
                                Free Tier
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Form Fields */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid gap-6"
                      >
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Display Name
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                              placeholder="Enter your display name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Bio
                            </label>
                            <textarea
                              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
                              rows={4}
                              placeholder="Tell us about yourself"
                            />
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:opacity-90 transition-opacity">
                            Save Changes
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

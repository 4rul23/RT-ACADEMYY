'use client'

import { motion } from 'framer-motion'
import { Bell, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/logos.png'

const navItems = [
  { label: 'Overview', active: true },
  { label: 'My Learning' },
  { label: 'Resources' }
]

export default function DashboardNav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl"
    >
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/dashboard">
              <Image
                src={logo}
                alt="RT Academy"
                width={160}
                height={50}
                priority
              />
            </Link>

            <div className="flex gap-6">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                    item.active
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-400 transition-colors hover:text-white"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-500"/>
            </motion.button>

            <Link href="/settings">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                <Settings className="w-4 h-4" />
                Settings
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

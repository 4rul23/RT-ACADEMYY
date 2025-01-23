'use client'

import { motion } from 'framer-motion'
import { Search, Bell } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import profile from '../../assets/ruanmei.jpg'
import logo from '../../assets/logos.png'
export default function AcademyNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">

          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-8">
            <Link href="/academy">
              <Image src={logo} alt="RT Academy" width={130} height={50} priority />
            </Link>
            <div className="relative">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Cari materi pembelajaran..."
                className="py-2 pl-10 pr-4 text-gray-300 transition-colors border border-gray-700 rounded-lg w-80 bg-gray-800/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </motion.div>

          {/* User Section */}
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-gray-400 transition-colors hover:text-white"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-500" />
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90"
              >
                Upgrade Pro
              </motion.button>

              <motion.div
                whileHover={{ borderColor: 'rgba(6,182,212,0.5)' }}
                className="flex items-center gap-3 px-3 py-1.5 rounded-lg border border-gray-700 transition-colors"
              >
                <Image
                  src={profile}
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-white">Username</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Layout, BookOpen, Bookmark, Award, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/ruanmei.jpg'

const menuItems = [
  { icon: Layout, label: 'Dashboard', path: '/academy', active: true },
  { icon: BookOpen, label: 'Modul Pembelajaran', path: '/academy/module' },
  { icon: Bookmark, label: 'Learning Path', path: '/academy/learning-path' },
  { icon: Award, label: 'Sertifikasi', path: '/academy/certification' },
  { icon: Users, label: 'Komunitas', path: '/academy/community' }
]

export default function SidebarNav() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 w-64 p-4 border-r border-gray-800 top-16 bg-gray-900/30 backdrop-blur-sm"
    >

      <div className="mb-8">
        <motion.div
          whileHover={{ borderColor: 'rgba(6,182,212,0.5)' }}
          className="p-4 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={logo}
              alt="User"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div>
              <h3 className="font-medium text-white">Username</h3>
              <p className="text-sm text-gray-400">Free Tier</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-gray-400">Progress Belajar</span>
              <span className="text-cyan-400">50%</span>
            </div>
            <div className="h-2 rounded-full bg-gray-700/50">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="space-y-3">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <motion.button
              whileHover={{ x: 4 }}
              className={`w-full flex items-center gap-3 px-6 py-2.5 rounded-lg transition-all text-xs ${
                item.active
                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-white border border-cyan-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <item.icon className="w-6 h-10" />
              <span>{item.label}</span>
            </motion.button>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

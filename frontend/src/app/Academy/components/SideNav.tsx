'use client'

import { motion } from 'framer-motion'
import { Layout, BookOpen, Award, Users, Route} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import logo from '../../assets/ruanmei.jpg'

const menuItems = [
  { icon: Layout, label: 'Dashboard', path: '/Academy', active: true },
  { icon: BookOpen, label: 'Modul Pembelajaran', path: '/Academy/Module' },
  { icon: Route, label: 'Jalur Pembelajaran', path: '/Academy/Path' },
  { icon: Award, label: 'Sertifikasi', path: '/Academy/Sertifikat' },
  { icon: Users, label: 'Komunitas', path: '/Academy/Community' },
]

export default function SidebarNav() {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 w-64 p-4 border-r border-gray-800 top-16 bg-gray-900/30 backdrop-blur-sm"
    >
      {/* Profile Section */}
      <div className="mb-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/5"
        >
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={logo}
              alt="User"
              width={40}
              height={40}
              className="rounded-lg ring-2 ring-cyan-500/20"
            />
            <div>
              <h3 className="font-medium text-white">Username</h3>
              <p className="text-xs text-cyan-500">Free Tier</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-400">Learning Progress</span>
              <span className="font-medium text-cyan-400">50%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="space-y-7">
      {menuItems.map((item) => (
  <Link key={item.path} href={item.path}>
    <motion.div
      whileHover={{ x: 4 }}
      className={`flex flex-col items-start gap-1 px-4 py-3 rounded-lg transition-all ${
        pathname === item.path
          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/20'
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
    >
      <div className="flex items-center gap-3">
        {item.icon && <item.icon className="w-5 h-5" />}
        <span>{item.label}</span>
      </div>
      {item.label.toLowerCase() === 'komunitas' && (
        <span className="text-xs text-gray-500">COMING SOON</span>
      )}
    </motion.div>
  </Link>
))}
      </div>
    </motion.div>
  )
}

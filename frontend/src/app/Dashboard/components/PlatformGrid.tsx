'use client'

import { motion } from 'framer-motion'
import { BookOpen, Beaker, School, Lock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface PlatformStats {
  [key: string]: string
}

interface Platform {
  title: string
  description: string
  icon: any
  path: string
  color: string
  stats: PlatformStats
  features: string[]
  isComingSoon?: boolean
}

const platforms: Platform[] = [
  {
    title: "Learning Path",
    description: "Mulai perjalanan belajar programming Anda",
    icon: BookOpen,
    path: "/Academy",
    color: "cyan",
    stats: {
      completion: "0%",
      modules: "0",
      hours: "0"
    },
    features: [
      "Materi pembelajaran interaktif",
      "Video tutorial step-by-step",
      "Proyek praktis",
      "Quiz & assessments"
    ]
  },
  {
    title: "Lab RT-ACADEMY",
    description: "Praktik coding dalam environment yang aman",
    icon: Beaker,
    path: "/lab",
    color: "blue",
    stats: {
      completion: "0",
      exercises: "0",
      projects: "0"
    },
    features: [
      "Live coding environment",
      "Real-time code preview",
      "Debugging tools",
      "Project workspace"
    ]
  },
  {
    title: "School Dashboard",
    description: "Platform manajemen pembelajaran sekolah",
    icon: School,
    path: "/school",
    color: "purple",
    isComingSoon: true,
    stats: {
      students: "0",
      classes: "0",
      teachers: "0"
    },
    features: [
      "Manajemen kelas",
      "Progress tracking",
      "Analytics dashboard",
      "Resource center"
    ]
  }
]

export default function PlatformGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {platforms.map((platform, index) => (
        <motion.div
          key={platform.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + (index * 0.1) }}
          className="relative group"
        >
          <div className="h-full p-6 transition-all border border-gray-700 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:border-cyan-500/50">
            {platform.isComingSoon && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-2xl bg-gray-900/80 backdrop-blur-sm">
                <div className="p-3 mb-4 rounded-full bg-purple-500/20">
                  <Lock className="w-8 h-8 text-purple-400" />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-6 py-2 border rounded-full bg-gradient-to-r from-purple-500/20 to-purple-500/10 border-purple-500/20"
                >
                  <span className="text-lg font-bold text-purple-400">Coming Soon</span>
                </motion.div>
                <p className="px-6 mt-4 text-center text-gray-400">
                  Platform ini sedang dalam pengembangan.<br/>Stay tuned!
                </p>
              </div>
            )}

            <div className="flex items-start gap-4 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-r from-${platform.color}-500/10 to-${platform.color}-500/5`}>
                <platform.icon className={`w-8 h-8 text-${platform.color}-400`} />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-white">{platform.title}</h3>
                <p className="text-gray-400">{platform.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {Object.entries(platform.stats).map(([key, value], idx) => (
                <div key={idx} className="p-3 text-center rounded-xl bg-gray-900/50">
                  <div className="text-lg font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>

            <div className="mb-6 space-y-3">
              {platform.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link href={platform.path}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full gap-2 px-4 py-3 font-medium text-white rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 group"
              >
                Access Platform
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

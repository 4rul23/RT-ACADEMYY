'use client'

import { motion } from 'framer-motion'
import { Code, FileCode, Clock, Award, TrendingUp } from 'lucide-react'

const learningStats = [
  { label: 'Total Jam Belajar', value: '24.5 Jam', icon: Clock },
  { label: 'Module Selesai', value: '3/12', icon: FileCode },
  { label: 'Pencapaian', value: '4 Badges', icon: Award },
  { label: 'Streak Belajar', value: '5 Hari', icon: TrendingUp }
]

const currentCourse = {
  name: "Introduction to HTML",
  progress: 25.5,
  modules: [
    {
      name: "Pengenalan HTML",
      progress: 60,
      difficulty: "Fundamental",
      status: "Continue",
      duration: "45 menit"
    },
    {
      name: "HTML Elements dan Struktur",
      progress: 0,
      difficulty: "Fundamental",
      status: "Locked",
      duration: "1 jam"
    },
    {
      name: "HTML Forms dan Tables",
      progress: 0,
      difficulty: "Intermediate",
      status: "Locked",
      duration: "1.5 jam"
    }
  ]
}

export default function CourseProgress() {
  return (
    <div>
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="mb-2 text-3xl font-bold text-white">
          Welcome back, Username! 👋
        </h1>
        <p className="text-gray-400">
          Lanjutkan perjalanan belajar Anda dari terakhir kali
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-4 gap-6 mb-8"
      >
        {learningStats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="mb-1 text-sm text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
              <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                <stat.icon className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="space-y-4">
        {currentCourse.modules.map((module, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (index * 0.1) }}
            className="p-4 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                  <FileCode className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">{module.name}</h3>
                  <p className="text-sm text-gray-400">
                    {module.difficulty} • {module.duration}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-lg font-medium ${
                  module.status === 'Continue'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-gray-700/50 text-gray-400'
                }`}
              >
                {module.status}
              </motion.button>
            </div>
            {module.progress > 0 && (
              <div className="mt-4">
                <div className="h-1 rounded-full bg-gray-700/50">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${module.progress}%` }}
                    transition={{ duration: 1, delay: 0.7 + (index * 0.1) }}
                    className="h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

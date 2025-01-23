'use client'

import { motion } from 'framer-motion'
import { Star, TrendingUp } from 'lucide-react'

interface Achievement {
  title: string
  description: string
  progress: number
  icon: any
  color: string
}

const achievements: Achievement[] = [
  {
    title: 'HTML Master',
    description: 'Selesaikan semua modul HTML',
    progress: 90,
    icon: Star,
    color: 'yellow'
  },
  {
    title: 'Consistent Learner',
    description: '7 hari streak belajar',
    progress: 71,
    icon: TrendingUp,
    color: 'green'
  }
]

export default function AchievementSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-8"
    >
      <h2 className="mb-6 text-xl font-bold text-white">Pencapaian</h2>
      <div className="grid grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r from-${achievement.color}-500/10 to-${achievement.color}-500/5`}>
                <achievement.icon className={`h-6 w-6 text-${achievement.color}-400`} />
              </div>
              <div>
                <h3 className="font-medium text-white">{achievement.title}</h3>
                <p className="text-sm text-gray-400">{achievement.description}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Progress</span>
                <span className="text-cyan-400">{achievement.progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-700/50">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${achievement.progress}%` }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

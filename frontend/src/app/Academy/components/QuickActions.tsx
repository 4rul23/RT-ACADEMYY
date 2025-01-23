'use client'

import { motion } from 'framer-motion'
import { PlayCircle, BookOpen, Target, MessageCircle } from 'lucide-react'

interface QuickAction {
  icon: any
  label: string
  description: string
  color: string
}

const quickActions: QuickAction[] = [
  {
    icon: PlayCircle,
    label: 'Lanjut Belajar',
    description: 'Lanjutkan HTML Basics',
    color: 'cyan'
  },
  {
    icon: BookOpen,
    label: 'Materi Terakhir',
    description: 'HTML Elements',
    color: 'blue'
  },
  {
    icon: Target,
    label: 'Goal Harian',
    description: '2/3 Modules completed',
    color: 'green'
  },
  {
    icon: MessageCircle,
    label: 'Forum Diskusi',
    description: '3 new messages',
    color: 'purple'
  }
]

export default function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-4"
    >
      {quickActions.map((action, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full p-4 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg bg-gradient-to-r from-${action.color}-500/10 to-${action.color}-500/5`}>
              <action.icon className={`h-6 w-6 text-${action.color}-400`} />
            </div>
            <div className="text-left">
              <p className="font-medium text-white">{action.label}</p>
              <p className="text-sm text-gray-400">{action.description}</p>
            </div>
          </div>
        </motion.button>
      ))}
    </motion.div>
  )
}

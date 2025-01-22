'use client'

import { motion } from 'framer-motion'
import { Timer, Target, Trophy, Flame } from 'lucide-react'
import Image from 'next/image'
import pwn from '../../../../public/video/pwnagotchi-unscreen.gif'

interface Stat {
  icon: any
  label: string
  value: string
}

const stats: Stat[] = [ 
  { icon: Timer, label: 'Learning Time', value: '0' },
  { icon: Target, label: 'Points', value: '0' },
  { icon: Trophy, label: 'Achievements', value: '0' },
  { icon: Flame, label: 'Daily Streak', value: '0' }
]

export default function StatsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid gap-8 mb-12 md:grid-cols-2"
    >
      <div>
        <h1 className="mb-4 text-4xl font-bold text-white">
          Welcome to RT-ACADEMY
        </h1>
        <p className="mb-8 text-xl text-gray-400">
          Pilih jalur pembelajaran Anda dan mulai perjalanan menjadi developer profesional
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-8 brightness-0 invert"
        >
          <Image
            src={pwn}
            alt="Decorative Emoticon"
            width={256}
            height={256}
            priority
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (index * 0.1) }}
            className="p-6 border border-gray-700 rounded-xl bg-gray-800/50 backdrop-blur-sm"
          >
            <stat.icon className="w-6 h-6 mb-3 text-cyan-400" />
            <div className="mb-1 text-2xl font-bold text-white">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

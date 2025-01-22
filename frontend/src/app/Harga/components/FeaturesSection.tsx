'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Award } from 'lucide-react'

interface Feature {
  icon: typeof Clock | typeof Users | typeof Award
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Clock,
    title: 'Akses Seumur Hidup',
    description: 'Pelajari dengan kecepatan Anda sendiri'
  },
  {
    icon: Users,
    title: 'Komunitas',
    description: 'Bergabung dengan komunitas developer'
  },
  {
    icon: Award,
    title: 'Sertifikasi',
    description: 'Dapatkan sertifikat resmi'
  }
]

export default function FeaturesSection() {
  return (
    <motion.div
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <h2 className="mb-12 text-3xl font-bold text-white">
        Semua paket termasuk
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            className="p-6 transition-all duration-300 border border-gray-700 rounded-xl bg-gray-800/30 backdrop-blur-sm hover:border-cyan-500/50"
          >
            <feature.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
            <h3 className="mb-2 text-xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="text-gray-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

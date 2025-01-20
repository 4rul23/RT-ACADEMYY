'use client'

import { motion } from 'framer-motion'
import { BookOpen, Rocket, Users, BarChart } from 'lucide-react'

const features = [
  {
    title: 'Kurikulum Terstruktur',
    description: 'Materi pembelajaran yang sistematis dan terarah',
    icon: BookOpen,
    color: 'cyan'
  },
  {
    title: 'Project-Based Learning',
    description: 'Belajar dengan mengerjakan proyek nyata',
    icon: Rocket,
    color: 'blue'
  },
  {
    title: 'Live Mentoring',
    description: 'Bimbingan langsung dari mentor berpengalaman',
    icon: Users,
    color: 'purple'
  },
  {
    title: 'Career Support',
    description: 'Dukungan karir dan akses ke network industri',
    icon: BarChart,
    color: 'green'
  }
]

export default function FeaturesSection() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-3xl font-bold text-center text-white"
        >
          Fitur Unggulan
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
            >
              <div className={`p-3 rounded-lg bg-${feature.color}-500/10 w-fit mb-4`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Clock, CheckCircle2, Star, Award } from 'lucide-react'

const highlights = [
  {
    title: '50+ Learning Hours',
    icon: Clock,
    color: 'cyan'
  },
  {
    title: '24/7 Support',
    icon: CheckCircle2,
    color: 'blue'
  },
  {
    title: 'Industry Projects',
    icon: Star,
    color: 'purple'
  },
  {
    title: 'Certification',
    icon: Award,
    color: 'green'
  }
]

export default function HighlightsSection() {
  return (
    <section className="relative px-6 py-16">
      <div className="grid max-w-5xl gap-4 mx-auto md:grid-cols-4">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center p-4 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl gap-x-4 hover:border-cyan-500/50"
          >
            <div className={`p-2 rounded-lg bg-${highlight.color}-500/10`}>
              <highlight.icon className={`w-5 h-5 text-${highlight.color}-400`} />
            </div>
            <span className="font-medium text-white">{highlight.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

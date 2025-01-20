'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BarChart, Briefcase, Shield } from 'lucide-react'

const stats = [
  {
    value: "5000+",
    label: "Siswa Aktif",
    icon: GraduationCap
  },
  {
    value: "95%",
    label: "Tingkat Kepuasan",
    icon: BarChart
  },
  {
    value: "100+",
    label: "Partner Perusahaan",
    icon: Briefcase
  },
  {
    value: "24/7",
    label: "Dukungan Mentor",
    icon: Shield
  }
]

export default function StatsSection() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-6 text-center transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl group hover:border-cyan-500/50"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="mb-2 text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

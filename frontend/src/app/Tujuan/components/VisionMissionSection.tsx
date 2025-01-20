'use client'

import { motion } from 'framer-motion'
import { Target, Book, Users, Globe } from 'lucide-react'

const vision = {
  title: "Visi Kami",
  description: "Menjadi platform pembelajaran teknologi terdepan yang membentuk generasi developer Indonesia yang berkualitas dan berdaya saing global.",
  points: [
    "Pendidikan teknologi berkualitas untuk semua",
    "Membentuk ekosistem developer yang kuat",
    "Meningkatkan daya saing SDM Indonesia"
  ]
}

const mission = {
  title: "Misi Kami",
  points: [
    {
      icon: Book,
      title: "Pembelajaran Berkualitas",
      description: "Menyediakan materi pembelajaran yang terstruktur dan up-to-date"
    },
    {
      icon: Users,
      title: "Komunitas Aktif",
      description: "Membangun komunitas developer yang saling mendukung"
    },
    {
      icon: Globe,
      title: "Standar Global",
      description: "Mengadopsi standar industri global dalam pengembangan skill"
    }
  ]
}

export default function VisionMissionSection() {
  return (
    <>
      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-2xl md:p-12"
          >
            <div className="max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-white">{vision.title}</h2>
              <p className="mb-8 text-xl text-gray-300">{vision.description}</p>
              <div className="space-y-4">
                {vision.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-2 rounded-lg bg-cyan-500/10">
                      <Target className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-gray-300">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-3xl font-bold text-center text-white"
          >
            {mission.title}
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {mission.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
              >
                <div className="p-3 mb-4 rounded-lg bg-cyan-500/10 w-fit">
                  <point.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {point.title}
                </h3>
                <p className="text-gray-400">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

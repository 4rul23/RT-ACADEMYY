'use client'

import { motion } from 'framer-motion'
import { Search, BookMarked, MessagesSquare, Video } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface FeaturedResource {
  title: string
  description: string
  icon: LucideIcon
  color: string
  tag: string
  link: string
}

const featuredResources: FeaturedResource[] = [
  {
    title: "Learning Path Guide",
    description: "Panduan lengkap jalur pembelajaran Web Development dari dasar hingga mahir",
    icon: BookMarked,
    color: "cyan",
    tag: "Popular",
    link: "/learning-path"
  },
  {
    title: "Community Forum",
    description: "Diskusi dengan sesama developer dan mentor RT Academy",
    icon: MessagesSquare,
    color: "purple",
    tag: "Active",
    link: "/forum"
  },
  {
    title: "Weekly Webinar",
    description: "Sesi pembelajaran langsung dengan para expert setiap minggu",
    icon: Video,
    color: "blue",
    tag: "Live",
    link: "/webinars"
  }
]

export default function HeroSection() {
  return (
    <>
      <div className="mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-4xl font-bold md:text-5xl"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Resources
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto text-xl text-gray-400"
        >
          Kumpulan materi pembelajaran, tutorial, dan sumber daya untuk mengembangkan skill programing Anda
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto mb-16"
      >
        <div className="relative">
          <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
          <input
            type="text"
            placeholder="Cari tutorial, artikel, atau materi pembelajaran..."
            className="w-full py-4 pl-12 pr-4 text-gray-300 transition-colors border border-gray-700 bg-gray-800/50 rounded-xl placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </motion.div>

      <div className="grid gap-8 mb-16 md:grid-cols-3">
        {featuredResources.map((resource, index) => (
          <motion.a
            key={index}
            href={resource.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${resource.color}-500/10`}>
                <resource.icon className={`h-6 w-6 text-${resource.color}-400`} />
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-${resource.color}-500/10 text-${resource.color}-400`}>
                {resource.tag}
              </span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-cyan-400">
              {resource.title}
            </h3>
            <p className="text-gray-400">
              {resource.description}
            </p>
          </motion.a>
        ))}
      </div>
    </>
  )
}

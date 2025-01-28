'use client'

import { motion } from 'framer-motion'
import { Heart, Clock, BookOpen, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface ModuleGridProps {
  filters: {
    difficulty: string
    category: string
    type: string
    search: string
  }
}

const modules = [
  {
    title: "HTML Fundamentals",
    description: "Dasar-dasar HTML dan struktur website",
    difficulty: "fundamental",
    category: "frontend",
    type: "core",
    sections: 8,
    duration: "2 hours",
    image: "/images/modules/html.webp",
    tags: ["Frontend", "Web"],
    status: "new"
  },
  {
    title: "CSS Basics",
    description: "Styling dan layout dengan CSS",
    difficulty: "easy",
    category: "frontend",
    type: "core",
    sections: 10,
    duration: "3 hours",
    image: "/images/modules/css.webp",
    tags: ["Frontend", "Design"],
    status: "updated"
  },
  {
    title: "CSS Basics",
    description: "Styling dan layout dengan CSS",
    difficulty: "easy",
    category: "frontend",
    type: "core",
    sections: 10,
    duration: "3 hours",
    image: "/images/modules/css.webp",
    tags: ["Frontend", "Design"],
    status: "updated"
  },
  {
    title: "CSS Basics",
    description: "Styling dan layout dengan CSS",
    difficulty: "easy",
    category: "frontend",
    type: "core",
    sections: 10,
    duration: "3 hours",
    image: "/images/modules/css.webp",
    tags: ["Frontend", "Design"],
    status: "updated"
  },
  {
    title: "CSS Basics",
    description: "Styling dan layout dengan CSS",
    difficulty: "easy",
    category: "frontend",
    type: "core",
    sections: 10,
    duration: "3 hours",
    image: "/images/modules/css.webp",
    tags: ["Frontend", "Design"],
    status: "updated"
  },
  {
    title: "CSS Basics",
    description: "Styling dan layout dengan CSS",
    difficulty: "easy",
    category: "frontend",
    type: "core",
    sections: 10,
    duration: "3 hours",
    image: "/images/modules/css.webp",
    tags: ["Frontend", "Design"],
    status: "updated"
  },
  {
    title: "CSS Basics",
    description: "Styling dan layout dengan CSS",
    difficulty: "easy",
    category: "frontend",
    type: "core",
    sections: 10,
    duration: "3 hours",
    image: "/images/modules/css.webp",
    tags: ["Frontend", "Design"],
    status: "updated"
  },
]

export default function ModuleGrid({ filters }: ModuleGridProps) {
  const filteredModules = modules.filter(module => {
    const difficultyMatch = filters.difficulty === "all" || module.difficulty === filters.difficulty
    const categoryMatch = filters.category === "all" || module.category === filters.category
    const typeMatch = filters.type === "all" || module.type === filters.type
    const searchMatch = !filters.search ||
      module.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      module.description.toLowerCase().includes(filters.search.toLowerCase())

    return difficultyMatch && categoryMatch && typeMatch && searchMatch
  })

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredModules.map((module, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group relative  border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-cyan-500/50"
        >
          {/* Module Image Header */}
          <div className="relative h-48">
            <Image
              src={module.image}
              alt={module.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />

            {/* Status & Actions */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
              {module.status === 'new' && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 backdrop-blur-sm"
                >
                  NEW
                </motion.span>
              )}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-400 hover:text-white transition-colors"
              >
                <Heart className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Module Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {module.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {module.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {module.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-medium text-gray-300 rounded-full bg-gray-800/80 border border-gray-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Module Stats & Action */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  {module.sections} Sections
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4 text-blue-400" />
                  {module.duration}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90"
              >
                Start
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Hover Gradient Border */}
          <div className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-sm" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

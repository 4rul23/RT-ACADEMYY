import { motion } from 'framer-motion'
import {  Clock, BookOpen, ArrowRight, } from 'lucide-react'
import Image from 'next/image'
import css from '../cssv2.svg'

interface Module {
  title: string
  description: string
  image: string
  difficulty: string
  category: string
  type: string
  duration: string
  sections: number
  status?: string
  progress: number
  tags: string[]
}

interface ModuleGridProps {
  filters: {
    difficulty: string
    category: string
    type: string
    search: string
  }
}

export default function ModuleGrid({ filters }: ModuleGridProps) {
  const modules = [

    {
      title: "CSS Mastery",
      description: "Learn modern CSS layouts and responsive design",
      image: css,
      category: "Frontend",
      type: "Core",
      duration: "3 hours",
      sections: 10,
      progress: 0,
      tags: ["CSS", "Design", "Frontend"]
    }, {
      title: "CSS Mastery",
      description: "Learn modern CSS layouts and responsive design",
      image: css,
      category: "Frontend",
      type: "Core",
      duration: "3 hours",
      sections: 10,
      progress: 0,
      tags: ["CSS", "Design", "Frontend"]
    }, {
      title: "CSS Mastery",
      description: "Learn modern CSS layouts and responsive design",
      image: css,
      category: "Frontend",
      type: "Core",
      duration: "3 hours",
      sections: 10,
      progress: 0,
      tags: ["CSS", "Design", "Frontend"]
    }, {
      title: "CSS Mastery",
      description: "Learn modern CSS layouts and responsive design",
      image: css,
      category: "Frontend",
      type: "Core",
      duration: "3 hours",
      sections: 10,
      progress: 0,
      tags: ["CSS", "Design", "Frontend"]
    }, {
      title: "CSS Mastery",
      description: "Learn modern CSS layouts and responsive design",
      image: css,
      category: "Frontend",
      type: "Core",
      duration: "3 hours",
      sections: 10,
      progress: 0,
      tags: ["CSS", "Design", "Frontend"]
    },


  ]

  const filteredModules = modules.filter(module => {
    const difficultyMatch = filters.difficulty === "all" || module.difficulty.toLowerCase() === filters.difficulty
    const categoryMatch = filters.category === "all" || module.category.toLowerCase() === filters.category
    const typeMatch = filters.type === "all" || module.type.toLowerCase() === filters.type
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
          className="group relative border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-cyan-500/50"
        >

          <div className="relative h-48">
            <Image
              src={module.image}
              alt={module.title}
              fill
              className="object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent rounded-t-2xl" />
          </div>

          {/* Module Content */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {module.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {module.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {module.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium text-gray-300 rounded-full bg-gray-800/80 border border-gray-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Module Stats & Action */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-sm text-gray-400">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  {module.duration}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-gray-400">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  {module.sections} Sections
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

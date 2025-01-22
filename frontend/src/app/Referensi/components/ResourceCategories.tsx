'use client'

import { motion } from 'framer-motion'
import { BookOpen, FileText, Users, Calendar, ExternalLink } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Category {
  title: string
  description: string
  icon: LucideIcon
  items: string[]
  color: string
}

const categories: Category[] = [
  {
    title: "Learning Path",
    description: "Jalur pembelajaran terstruktur",
    icon: BookOpen,
    items: ["Frontend Path", "Backend Path", "Fullstack Path"],
    color: "cyan"
  },
  {
    title: "Tutorial & Artikel",
    description: "Tutorial dan artikel terbaru",
    icon: FileText,
    items: ["Latest Articles", "Tutorial Series", "Tips & Tricks"],
    color: "blue"
  },
  {
    title: "Community",
    description: "Bergabung dengan komunitas",
    icon: Users,
    items: ["Discussion Forum", "Study Group", "Code Review"],
    color: "purple"
  },
  {
    title: "Events",
    description: "Event dan webinar",
    icon: Calendar,
    items: ["Upcoming Webinars", "Workshops", "Meetups"],
    color: "green"
  }
]

export default function ResourceCategories() {
  return (
    <div className="grid gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4">
      {categories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          className="p-6 transition-all duration-300 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50"
        >
          <div className={`p-3 rounded-lg bg-${category.color}-500/10 w-fit mb-4`}>
            <category.icon className={`h-6 w-6 text-${category.color}-400`} />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-white">
            {category.title}
          </h3>
          <p className="mb-4 text-gray-400">
            {category.description}
          </p>
          <ul className="space-y-2">
            {category.items.map((item, idx) => (
              <li key={idx} className="text-gray-300 transition-colors hover:text-cyan-400">
                <a href="#" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

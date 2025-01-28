'use client'

import { motion } from 'framer-motion'
import { Search, BookOpen } from 'lucide-react'

interface ModuleHeaderProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function ModuleHeader({ searchQuery, setSearchQuery }: ModuleHeaderProps) {
  return (
    <div className="bg-[#0A1525]/50 backdrop-blur-sm border-b border-white/5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-8 px-4 md:py-14 md:px-8"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/5">
              <BookOpen className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white">Modules</h1>
              <p className=" text-gray-300">Jelajahi Modul Pembelajaran RT-ACADEMY</p>
            </div>
          </div>

          <div className="relative w-full md:max-w-md">
            <label htmlFor="search-input" className="sr-only">
              Search modules
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search modules..."
                aria-label="Search modules"
                className="w-full h-10 pl-10 pr-4 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-colors"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

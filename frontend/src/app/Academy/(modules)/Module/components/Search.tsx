'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface FilterSectionProps {
  selectedDifficulty: string
  setSelectedDifficulty: (value: string) => void
  selectedCategory: string
  setSelectedCategory: (value: string) => void
  selectedType: string
  setSelectedType: (value: string) => void
}

const filterButtons = {
  difficulty: [
    { label: "All", value: "all" },
    { label: "Fundamental", value: "fundamental" },
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" }
  ],
  category: [
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Database", value: "database" }
  ],
  type: [
    { label: "All", value: "all" },
    { label: "Core Modules", value: "core" },
    { label: "Mini Modules", value: "mini" },
    { label: "Projects", value: "project" }
  ]
}

export default function FilterSection({ ...props }: FilterSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 border border-[#2A3440] rounded-xl bg-[#0F172A]/90 backdrop-blur-lg shadow-2xl shadow-[#1E3A8A]/20"
    >
      <div className="grid gap-6 mb-6 md:grid-cols-3">
        {/* Difficulty Filter */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold tracking-wide text-[#7DD3FC] uppercase">Difficulty Level</h3>
          <div className="flex flex-wrap gap-2">
            {filterButtons.difficulty.map((button) => (
              <motion.button
                key={button.value}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => props.setSelectedDifficulty(button.value)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-200 border ${
                  props.selectedDifficulty === button.value
                    ? "border-[#38BDF8] bg-gradient-to-br from-[#1D4ED8] to-[#0EA5E9] text-white shadow-md shadow-[#1D4ED8]/30"
                    : "border-[#2A3440] bg-[#1E293B] text-[#94A3B8] hover:border-[#38BDF8]/40 hover:bg-[#1E3A8A]/20"
                }`}
              >
                {button.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold tracking-wide text-[#A78BFA] uppercase">Category</h3>
          <div className="flex flex-wrap gap-2">
            {filterButtons.category.map((button) => (
              <motion.button
                key={button.value}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => props.setSelectedCategory(button.value)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-200 border ${
                  props.selectedCategory === button.value
                    ? "border-[#8B5CF6] bg-gradient-to-br from-[#4C1D95] to-[#6D28D9] text-white shadow-md shadow-[#4C1D95]/30"
                    : "border-[#2A3440] bg-[#1E293B] text-[#94A3B8] hover:border-[#8B5CF6]/40 hover:bg-[#4C1D95]/20"
                }`}
              >
                {button.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold tracking-wide text-[#34D399] uppercase">Type</h3>
          <div className="flex flex-wrap gap-2">
            {filterButtons.type.map((button) => (
              <motion.button
                key={button.value}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => props.setSelectedType(button.value)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-200 border ${
                  props.selectedType === button.value
                    ? "border-[#10B981] bg-gradient-to-br from-[#065F46] to-[#059669] text-white shadow-md shadow-[#065F46]/30"
                    : "border-[#2A3440] bg-[#1E293B] text-[#94A3B8] hover:border-[#10B981]/40 hover:bg-[#065F46]/20"
                }`}
              >
                {button.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {(props.selectedDifficulty !== "all" || props.selectedCategory !== "all" || props.selectedType !== "all") && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-[#2A3440]"
        >
          <span className="text-xs font-medium text-[#94A3B8]">Active filters:</span>
          <div className="flex flex-wrap gap-2">
            {props.selectedDifficulty !== "all" && (
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1.5 px-3 py-1 text-sm rounded-full bg-[#1D4ED8]/20 border border-[#38BDF8]/30"
              >
                <span className="text-[#7DD3FC]">
                  {filterButtons.difficulty.find(b => b.value === props.selectedDifficulty)?.label}
                </span>
                <X
                  className="w-4 h-4 text-[#7DD3FC] cursor-pointer hover:text-[#38BDF8]"
                  onClick={() => props.setSelectedDifficulty("all")}
                />
              </motion.div>
            )}
=
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              props.setSelectedDifficulty("all")
              props.setSelectedCategory("all")
              props.setSelectedType("all")
            }}
            className="ml-2 text-xs text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
          >
            Clear all
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  )
}

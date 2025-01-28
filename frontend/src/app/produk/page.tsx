'use client'

import React from 'react'
import { GeistMono } from 'geist/font/mono'
import ModuleHeader from './components/ModuleHeader'
import ModuleGrid from './components/Modules'
import FilterSection from './components/Search'

interface ModulePageProps {}

export default function ModulePage({}: ModulePageProps) {
  const [selectedDifficulty, setSelectedDifficulty] = React.useState("all")
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [selectedType, setSelectedType] = React.useState("all")
  const [searchQuery, setSearchQuery] = React.useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto space-y-10">
          <ModuleHeader
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <FilterSection
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />

          <div className="bg-white rounded-lg shadow-sm p-6">
            <ModuleGrid
              filters={{
                difficulty: selectedDifficulty,
                category: selectedCategory,
                type: selectedType,
                search: searchQuery
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import React from 'react'
import Navbar from '../components/AcademyNav'
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
    <div className="flex min-h-screen">
      <div className="flex-1 ">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <div className="flex flex-col min-h-screen">
          <div className="sticky top-16 z-40">
            <ModuleHeader
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          <div className="flex-1 px-6 py-8">
            <div className="max-w-[1600px] mx-auto space-y-8">
              <FilterSection
                selectedDifficulty={selectedDifficulty}
                setSelectedDifficulty={setSelectedDifficulty}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedType={selectedType}
                setSelectedType={setSelectedType}
              />

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
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import {Check, ChevronRight, Clock, Trophy,Users, Star } from 'lucide-react'
import Image from 'next/image'
import herobg from '../../../app/assets/Preview/preview.svg'

const learningPaths = [
  {
    id: 1,
    title: 'Git Version Control',
    description: 'Master Git fundamentals and version control workflow',
    image: '/images/paths/git-path.jpg',
    difficulty: 'Beginner',
    category: 'Development Tools',
    enrolled: 2456,
    rating: 4.7,
    modules: [
      {
        id: 'git-1',
        name: 'Git Basics',
        description: 'Introduction to version control and Git fundamentals',
        duration: '1.5 hours',
        isCompleted: true,
        isUnlocked: true,
        image: '/images/modules/git-basics.jpg'
      },
      {
        id: 'git-2',
        name: 'Branching & Merging',
        description: 'Learn branching strategies and merge conflicts',
        duration: '2 hours',
        isCompleted: false,
        isUnlocked: true,
        image: '/images/modules/git-branch.jpg'
      },
      {
        id: 'git-3',
        name: 'Advanced Git Operations',
        description: 'Rebase, cherry-pick, and advanced git commands',
        duration: '2.5 hours',
        isCompleted: false,
        isUnlocked: false,
        image: '/images/modules/git-advanced.jpg'
      }
    ],
    progress: 25,
    totalDuration: '6 hours',
    badge: '🔄 Git Master'
  },
  {
    id: 2,
    title: 'GitHub Collaboration',
    description: 'Learn professional collaboration with GitHub',
    image: '/images/paths/github-path.jpg',
    difficulty: 'Intermediate',
    category: 'Development Tools',
    enrolled: 1879,
    rating: 4.8,
    modules: [
      {
        id: 'github-1',
        name: 'GitHub Essentials',
        description: 'GitHub workflow and repository management',
        duration: '2 hours',
        isCompleted: true,
        isUnlocked: true,
        image: '/images/modules/github-basic.jpg'
      },
      {
        id: 'github-2',
        name: 'Pull Requests',
        description: 'Creating and reviewing pull requests',
        duration: '1.5 hours',
        isCompleted: false,
        isUnlocked: true,
        image: '/images/modules/github-pr.jpg'
      },
      {
        id: 'github-3',
        name: 'GitHub Actions',
        description: 'Automating workflows with GitHub Actions',
        duration: '3 hours',
        isCompleted: false,
        isUnlocked: false,
        image: '/images/modules/github-actions.jpg'
      }
    ],
    progress: 30,
    totalDuration: '6.5 hours',
    badge: '🔗 Collaboration Pro'
  },
  {
    id: 3,
    title: 'HTML Mastery',
    description: 'Complete guide to modern HTML5 development',
    image: '/images/paths/html-path.jpg',
    difficulty: 'Beginner',
    category: 'Frontend',
    enrolled: 3567,
    rating: 4.9,
    modules: [
      {
        id: 'html-1',
        name: 'HTML Fundamentals',
        description: 'Basic structure and semantic HTML',
        duration: '2 hours',
        isCompleted: true,
        isUnlocked: true,
        image: '/images/modules/html-basic.jpg'
      },
      {
        id: 'html-2',
        name: 'Forms & Validation',
        description: 'Creating interactive forms with validation',
        duration: '2.5 hours',
        isCompleted: false,
        isUnlocked: true,
        image: '/images/modules/html-forms.jpg'
      },
      {
        id: 'html-3',
        name: 'HTML5 APIs',
        description: 'Modern HTML5 APIs and features',
        duration: '3 hours',
        isCompleted: false,
        isUnlocked: false,
        image: '/images/modules/html-apis.jpg'
      }
    ],
    progress: 40,
    totalDuration: '7.5 hours',
    badge: '🌐 HTML Expert'
  }
]


export default function PathPage() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-12"
      >
        <div className="relative h-[300px] rounded-3xl overflow-hidden">
          <Image
            src={herobg}
            alt="Learning Paths"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
          <div className="absolute inset-0 p-12 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Learning Paths
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Structured learning paths to guide your journey from beginner to expert in cybersecurity
            </p>
          </div>
        </div>

        {/* Paths Grid */}
        <div className="grid gap-8">
          {learningPaths.map((path) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Path Header */}
              <div className="relative h-48">
                <Image
                  src={path.image}
                  alt={path.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />

                {/* Path Info Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {path.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-cyan-400">
                          <Users className="w-4 h-4" />
                          {path.enrolled.toLocaleString()} enrolled
                        </span>
                        <span className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4" />
                          {path.rating}
                        </span>
                        <span className="flex items-center gap-1 text-purple-400">
                          <Clock className="w-4 h-4" />
                          {path.totalDuration}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      <Trophy className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-cyan-400">{path.badge}</span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="p-6 space-y-4">
                {path.modules.map((module) => (
                  <motion.div
                    key={module.id}
                    className={`group/module relative overflow-hidden rounded-xl transition-all ${
                      module.isUnlocked
                        ? 'hover:border-cyan-500/50 cursor-pointer'
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-xl bg-gray-800/50">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={module.image}
                          alt={module.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-medium text-white">
                            {module.name}
                          </h3>
                          {module.isCompleted && (
                            <div className="p-1 rounded-full bg-green-500/20">
                              <Check className="w-4 h-4 text-green-400" />
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-400">{module.description}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-500">
                            {module.duration}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover/module:text-cyan-400 transition-colors" />
                    </div>
                  </motion.div>
                ))}


                <div className="pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Path Progress</span>
                    <span className="text-sm font-medium text-cyan-400">
                      {path.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${path.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

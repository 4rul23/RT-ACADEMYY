'use client'

import { motion } from 'framer-motion'
import { Sparkles, Clock, Rocket, Code , Book  } from 'lucide-react'

    
interface Track {
    id: string
    title: string
    icon: LucideIcon
    color: string
    description: string
    duration: string
    projects: number
    modules: number
  }

  interface HeroSectionProps {
    selectedTrack: string
    setSelectedTrack: (track: string) => void
  }

  const learningTracks: Track[] = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      color: 'cyan',
      description: 'Kuasai pengembangan antarmuka web modern dengan React & Next.js',
      duration: '6 bulan',
      projects: 12,
      modules: 24
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Book,
      color: 'blue',
      description: 'Pelajari pengembangan server dan API dengan Node.js & Express',
      duration: '6 bulan',
      projects: 10,
      modules: 20
    },
    {
      id: 'fullstack',
      title: 'Fullstack JavaScript',
      icon: Rocket,
      color: 'purple',
      description: 'Menjadi developer lengkap dengan stack JavaScript modern',
      duration: '12 bulan',
      projects: 15,
      modules: 40
    }
  ]
export default function HeroSection({ selectedTrack, setSelectedTrack }: HeroSectionProps) {
  return (
    <section className="relative px-6 pt-32 pb-16">
      <div className="mx-auto text-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
        >
          <Sparkles className="w-5 h-5" />
          <span>Learning Paths</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-4xl font-bold md:text-5xl"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Jalur Pembelajaran
          </span>{" "}
          <span className="text-white">
            yang Tepat Untukmu
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8 text-xl text-gray-400"
        >
          Pilih jalur pembelajaran yang sesuai dengan tujuan karirmu di industri teknologi
        </motion.p>

        {/* Track Selection */}
        <div className="grid gap-8 mb-16 md:grid-cols-3">
          {learningTracks.map((track) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setSelectedTrack(track.id)}
              className={`p-6 text-left transition-all duration-300 border cursor-pointer bg-gray-800/50 backdrop-blur-sm rounded-xl group hover:border-cyan-500/50 ${
                selectedTrack === track.id ? 'border-cyan-500' : 'border-gray-700'
              }`}
            >
              <div className={`p-3 rounded-lg bg-${track.color}-500/10 w-fit mb-4`}>
                <track.icon className={`w-6 h-6 text-${track.color}-400`} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {track.title}
              </h3>
              <p className="mb-4 text-gray-400">
                {track.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {track.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Rocket className="w-4 h-4" />
                  {track.projects} Projects
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

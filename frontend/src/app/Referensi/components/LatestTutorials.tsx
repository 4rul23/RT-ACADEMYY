'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Tutorial {
  title: string
  category: string
  duration: string
  image: string
}

const latestTutorials: Tutorial[] = [
  {
    title: "Memulai dengan React.js",
    category: "Frontend",
    duration: "15 min read",
    image: "/path/to/react-image.jpg"
  },
  {
    title: "Node.js untuk Pemula",
    category: "Backend",
    duration: "20 min read",
    image: "/path/to/node-image.jpg"
  },
  {
    title: "CSS Modern dengan Tailwind",
    category: "Frontend",
    duration: "12 min read",
    image: "/path/to/tailwind-image.jpg"
  }
]

export default function LatestTutorials() {
  return (
    <>
      {/* Latest Tutorials */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Tutorial Terbaru</h2>
          <a href="#" className="transition-colors text-cyan-400 hover:text-cyan-300">
            Lihat Semua
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {latestTutorials.map((tutorial, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={tutorial.image}
                  alt={tutorial.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-800/50" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400">
                    {tutorial.category}
                  </span>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-cyan-400">
                {tutorial.title}
              </h3>
              <p className="text-gray-400">
                {tutorial.duration}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-8 text-center border border-gray-700 md:p-12 bg-gradient-to-r from-gray-800/80 to-gray-800/50 rounded-2xl"
      >
        <h2 className="mb-4 text-2xl font-bold text-white">
          Dapatkan Update Terbaru
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-400">
          Subscribe untuk mendapatkan informasi terbaru tentang tutorial, artikel, dan event dari RT Academy
        </p>
        <div className="flex max-w-md gap-4 mx-auto">
          <input
            type="email"
            placeholder="Masukkan email Anda"
            className="flex-1 px-4 py-3 text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}

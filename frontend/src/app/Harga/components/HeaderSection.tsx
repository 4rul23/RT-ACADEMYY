'use client'

import { motion } from 'framer-motion'

interface HeaderSectionProps {
  isYearly: boolean
  setIsYearly: (isYearly: boolean) => void
}

export default function HeaderSection({ isYearly, setIsYearly }: HeaderSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <motion.h1
        className="mb-6 text-5xl font-bold md:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mt-8">
          Harga dan Paket
        </span>
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto text-xl text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Pilih paket yang sesuai dengan kebutuhan belajar Anda
      </motion.p>


      <motion.div
        className="inline-flex items-center gap-4 p-2 mt-8 border border-gray-700 rounded-full bg-gray-800/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button
          className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
            !isYearly ? 'bg-cyan-500 text-white' : 'text-gray-400'
          }`}
          onClick={() => setIsYearly(false)}
        >
          Bulanan
        </button>
        <button
          className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
            isYearly ? 'bg-cyan-500 text-white' : 'text-gray-400'
          }`}
          onClick={() => setIsYearly(true)}
        >
          Tahunan
          <span className="px-2 py-1 ml-2 text-xs text-white bg-green-500 rounded-full">
            Save 20%
          </span>
        </button>
      </motion.div>
    </motion.div>
  )
}

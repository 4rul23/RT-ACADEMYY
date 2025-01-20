'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative px-6 pt-32 pb-16">
      <div className="mx-auto text-center max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-4xl font-bold md:text-5xl"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Membentuk Masa Depan
          </span>{" "}
          <span className="text-white">
            Developer Indonesia
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto text-xl text-gray-400"
        >
          RT Academy hadir untuk membantu para developer Indonesia mengembangkan skill dan karir mereka di industri teknologi global
        </motion.p>
      </div>
    </section>
  )
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Book, School , GraduationCap , Building2 } from 'lucide-react';
import { GeistMono } from 'geist/font/mono';
import preview from '../assets/Preview/preview.svg';


export default function Preview() {
  return (
    <section className="relative px-6 py-20 overflow-hidden lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className={`mb-12 text-4xl font-bold leading-tight text-white md:text-5xl ${GeistMono.className}`}>
            Pembelajaran web development <br/>
            interaktif untuk siswa SMA/SMK di Indonesia
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 bg-[#00E8FF] text-gray-900 rounded-lg font-medium hover:opacity-90 transition-all ${GeistMono.className}`}
            >
              Mulai Sekarang
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 font-medium text-white transition-all bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 ${GeistMono.className}`}
            >
              Coba Gratis
            </motion.button>
          </div>
        </motion.header>

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative w-full mb-24"
>
  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1525] via-transparent to-transparent z-10" />
  <div className="relative w-full">
    <Image
      src={preview}
      alt="Dashboard screenshot"
      width={1920}
      height={1080}
      className="w-full h-auto shadow-2xl rounded-xl shadow-cyan-500/10"
      priority
      quality={90}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
    />
  </div>
</motion.div>

        <div className="grid gap-8 md:grid-cols-2">
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="p-8 transition-all border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50 group"
  >
    <div className="flex items-start gap-6">
      <motion.div
        className="flex items-center justify-center w-20 h-20 p-4 transition-colors duration-300 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20"
        whileHover={{ scale: 1.05 }}
      >
        <School className="w-12 h-12 text-cyan-400" />
      </motion.div>
              <div>
                <h2 className={`mb-4 text-xl font-semibold text-white transition-colors group-hover:text-cyan-400 ${GeistMono.className}`}>
                  Studi Kasus
                </h2>
                <p className={`leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300 ${GeistMono.className}`}>
                  Pelajari bagaimana sebuah startup teknologi meningkatkan keterampilan tim mereka dan mempersiapkan diri untuk proyek pengembangan web terkini.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Why RT ACADEMY Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 transition-all border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:border-cyan-500/50 group "
          >
            <div className="flex items-start gap-6">
              <div className="flex items-center justify-center w-20 h-20 ">
                <Book className="w-12 h-12 text-cyan-400 " />
              </div>
              <div>
                <h2 className={`mb-4 text-xl font-semibold text-white transition-colors group-hover:text-cyan-400 ${GeistMono.className}`}>
                  Why RT ACADEMY?
                </h2>
                <p className={`leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300 ${GeistMono.className}`}>
                  Pengembang web Indonesia perlu terus mengikuti tren teknologi, meningkatkan keahlian, dan bersaing di pasar global.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

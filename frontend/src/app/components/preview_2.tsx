'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { GeistMono } from 'geist/font/mono';
import binus from '../assets/Carousel/BINUS.png';
import telkomschools from '../assets/Carousel/ITSG.png';
import placeholder from '../assets/Carousel/STEI.png';
import SMKT from '../assets/Carousel/SMKT.png';
import nabil from '../assets/preview_2/nabil.jpg';

interface Institution {
  name: string;
  logo: StaticImageData;
}

interface Stats {
  candidates: string;
  useCase: string;
  success: string;
}

export default function Preview2() {
  const stats: Stats = {
    candidates: "698k+",
    useCase: "Rangka awal dalam perjalanan sebuah Fullstack Enginer dari Siswa : Frontend & Backend",
    success: "Dari Siswa Sma yang mengikuti kelas MIPA ke Fullstack Enginer"
  };

  const institutions: Institution[] = [
    { name: "BINUS UNIVERSITY", logo: binus },
    { name: "ITS", logo: telkomschools },
    { name: "STEI ITB", logo: placeholder },
    { name: "Telkom Schools", logo: SMKT }
  ];

  return (
    <section className="min-h-screen px-4 pb-48 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-6 md:space-y-8"
        >
          <h1 className={`
            text-3xl font-bold leading-tight text-transparent md:text-4xl
            bg-white   bg-clip-text
            ${GeistMono.className}
          `}>
            Pembelajaran web development  <br /> interaktif untuk siswa SMA/SMK di Indonesia
          </h1>
          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative px-6 py-3 overflow-hidden font-medium rounded-lg group
                ${GeistMono.className}
              `}
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500" />
              <span className="relative">Mulai Belajar</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-6 py-3 font-medium transition-colors bg-gray-800
                border border-gray-700 rounded-lg hover:bg-gray-700
                ${GeistMono.className}
              `}
            >
              Untuk Sekolah
            </motion.button>
          </div>
        </motion.div>


        <div className="grid gap-6 mb-16 md:grid-cols-3 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-gray-800/50 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 min-h-[240px] flex flex-col justify-between"
          >
            <div>
              <h3 className={`
                mb-6 text-6xl font-bold text-transparent md:text-7xl
                bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text
                ${GeistMono.className}
              `}>
                {stats.candidates}
              </h3>
              <p className={`
                text-lg text-gray-400 transition-colors group-hover:text-gray-300
                ${GeistMono.className}
              `}>
                Kandidat yang tersedia
              </p>
            </div>
            <div className="w-full h-1 transition-transform duration-300 transform scale-x-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 group-hover:scale-x-100" />
          </motion.div>

  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-gray-800/50 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 min-h-[240px] flex flex-col justify-between"
          >
            <div>
              <h3 className={`
                mb-6 text-2xl font-semibold text-white transition-colors
                group-hover:text-cyan-400 ${GeistMono.className}
              `}>
                Usecase dan pengalaman!
              </h3>
              <p className={`
                text-lg leading-relaxed text-gray-400 transition-colors
                group-hover:text-gray-300 ${GeistMono.className}
              `}>
                {stats.useCase}
              </p>
            </div>
            <div className="w-full h-1 transition-transform duration-300 transform scale-x-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 group-hover:scale-x-100" />
          </motion.div>

          {/* Success Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 min-h-[240px] overflow-hidden"
          >
            <div className="flex h-full">
              <div className="flex-1 p-8 md:p-10">
                <h3 className={`
                  mb-4 text-2xl font-semibold text-cyan-400
                  ${GeistMono.className}
                `}>
                  Keberhasilan
                </h3>
                <p className={`
                  text-lg leading-relaxed text-gray-300
                  ${GeistMono.className}
                `}>
                  {stats.success}
                </p>
              </div>
              <div className="relative w-1/3 min-w-[140px]">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-800/50 to-transparent" />
                <Image
                  src={nabil}
                  alt="Success Story"
                  fill
                  className="object-cover transition-all duration-300 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 160px, 200px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 border bg-gray-800/50 backdrop-blur-sm md:p-8 rounded-xl border-gray-700/50"
        >
          <h2 className={`
            mb-8 text-xl font-semibold text-white
            ${GeistMono.className}
          `}>
            Institut yang menggunakan rt-academy
          </h2>
          <div className="grid items-center grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
  {institutions.map((institution, index) => (
    <motion.div
      key={institution.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative flex items-center justify-center group"
    >
      <div className="absolute inset-0 transition-all duration-300 rounded-lg opacity-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 group-hover:opacity-100" />
      <div className="relative w-[200px] h-[100px] p-4">
        <Image
          src={institution.logo}
          alt={institution.name}
          fill
          className="object-contain transition-all duration-300 filter grayscale hover:grayscale-0"
          sizes="(max-width: 640px) 200px, (max-width: 1024px) 180px, 200px"
        />
      </div>
    </motion.div>
  ))}
</div>
        </motion.div>
      </div>
    </section>
  );
}

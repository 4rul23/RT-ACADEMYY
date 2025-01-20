'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GeistMono } from 'geist/font/mono';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  initials: string;
  bgColor: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Platform RT Academy sangat membantu saya dalam belajar web development dari nol. Materi pembelajarannya terstruktur dan mudah dipahami.",
    author: "Budi Santoso",
    role: "Frontend Developer, Tech Startup Jakarta",
    initials: "BS",
    bgColor: "bg-cyan-500"
  },
  {
    text: "Sebagai siswa SMK, RT Academy memberikan saya fondasi yang kuat dalam pengembangan web.",
    author: "Anisa Rahma",
    role: "Siswa SMKN 1 Bandung",
    initials: "AR",
    bgColor: "bg-blue-500"
  },
  {
    text: "Saya suka sekali dengan metode pembelajaran di sini. Modulnya lengkap dari HTML, CSS, JavaScript sampai React.",
    author: "Dimas Pratama",
    role: "Fullstack Developer",
    initials: "DP",
    bgColor: "bg-green-500"
  }
];

export default function Comment() {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <section className="px-8 py-16 text-white ">
      <div className="mx-auto mb-16 max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text ${GeistMono.className}`}
        >
          Dipercaya Oleh
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-5xl font-bold ${GeistMono.className}`}
        >
          Siswa/Siswi Indonesia
        </motion.h2>
      </div>

      <div className="mx-auto max-w-7xl">
        <AnimatePresence mode="wait">
          <div className="grid gap-8 md:grid-cols-2">
            {getCurrentTestimonials().map((testimonial, index) => (
              <motion.div
                key={currentPage * testimonialsPerPage + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 hover:border-cyan-500/50"
              >
                <p className={`mb-8 text-lg leading-relaxed text-gray-300 ${GeistMono.className}`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.bgColor} rounded-lg mr-4 flex items-center justify-center`}>
                    <span className="text-xl font-bold text-white">{testimonial.initials}</span>
                  </div>
                  <div className={GeistMono.className}>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mx-auto mt-8 max-w-7xl">
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === index ? 'bg-cyan-400 w-8' : 'bg-gray-600 w-2'
              }`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 transition-colors rounded-lg bg-gray-800/80 hover:bg-gray-700"
            onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 transition-colors rounded-lg bg-gray-800/80 hover:bg-gray-700"
            onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

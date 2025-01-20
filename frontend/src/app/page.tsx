'use client'
import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Navbar from "./components/Navbar";
import { GeistMono } from 'geist/font/mono';
const LogoCarousel = lazy(() => import("./components/Carousel"));
const CardIncident = lazy(() => import("./components/CardIncident"));
const Detail = lazy(() => import("./components/Detail"));
const Preview = lazy(() => import("./components/preview"));
const Preview2 = lazy(() => import("./components/preview_2"));
const Comment  = lazy(() => import("./components/Comment"));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-40">
    <div className="w-8 h-8 border-4 border-cyan-500 rounded-full animate-spin border-t-transparent" />
  </div>
);
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a152594] relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-[2000ms]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      </div>

      <Navbar />



      <div className="min-h-screen bg-[#0a152594] relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-75"
        >
          <source src="/video/bgacademy.mp4" type="video/mp4" />
        </video>


          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1525]/60 via-[#0A1525]/40 to-[#0A1525]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1525]/90 via-transparent to-[#0A1525]/30"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1525] to-transparent"></div>
        </div>


        <div className="relative px-6 mx-auto max-w-7xl lg:px-8 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[4rem] font-bold leading-none tracking-tight mb-8"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100">
                Your Informatics<br />
                Student<br />
                Performance<br />
                Center
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`max-w-2xl mb-12 text-xl text-gray-400 ${GeistMono.className}`}
            >
              Kita menyediakan platform untuk membuat dan mengembangkan
              Individu atau organisasi Pengembangan Informatika yang berkinerja tinggi.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 mb-16"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/demo"
                className={`px-6 py-3 font-medium text-gray-900 transition-all duration-300 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 hover:opacity-90 ${GeistMono.className}`}
              >
                Read more
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/demo"
                className={`px-6 py-3 font-medium text-white transition-all duration-300 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 hover:border-cyan-500/50 ${GeistMono.className}`}
              >
                Get a demo
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>


      <div className="relative bg-[#0a152500] ">
  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0A1525] via-[#0A1525] to-transparent"></div>

  <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <LogoCarousel />
        </motion.div>
      </Suspense>


</div>
<motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <CardIncident />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Detail />
      </motion.div>

      <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Preview />
        </motion.div>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Preview2 />
        </motion.div>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Comment />
        </motion.div>
      </Suspense>
    </div>
  );
}

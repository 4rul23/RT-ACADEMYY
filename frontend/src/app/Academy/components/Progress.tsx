'use client'

import { motion } from 'framer-motion'
import { Code, FileCode, Clock, Award, TrendingUp, ChevronRight, Lock,  Play } from 'lucide-react'

interface LearningStatType {
    label: string
    value: string
    trend?: string
    icon: any
    color: {
      from: string
      to: string
      text: string
    }
  }

  const learningStats: LearningStatType[] = [
    {
      label: 'Total Jam Belajar',
      value: '24.5',
      trend: '+2.5 jam minggu ini',
      icon: Clock,
      color: {
        from: 'from-cyan-500/20',
        to: 'to-blue-500/20',
        text: 'text-cyan-400'
      }
    },
    {
      label: 'Module Selesai',
      value: '3/12',
      trend: '25% selesai',
      icon: FileCode,
      color: {
        from: 'from-purple-500/20',
        to: 'to-pink-500/20',
        text: 'text-purple-400'
      }
    },
    {
      label: 'Pencapaian',
      value: '4',
      trend: '2 badges baru',
      icon: Award,
      color: {
        from: 'from-yellow-500/20',
        to: 'to-orange-500/20',
        text: 'text-yellow-400'
      }
    },
    {
      label: 'Streak Belajar',
      value: '5',
      trend: 'Hari berturut-turut',
      icon: TrendingUp,
      color: {
        from: 'from-emerald-500/20',
        to: 'to-teal-500/20',
        text: 'text-emerald-400'
      }
    }
  ]


const currentCourse = {
  name: "Introduction to HTML",
  progress: 25.5,
  modules: [
    {
      name: "Pengenalan HTML",
      progress: 60,
      difficulty: "Fundamental",
      status: "Continue",
      duration: "45 menit"
    },
    {
      name: "HTML Elements dan Struktur",
      progress: 0,
      difficulty: "Fundamental",
      status: "Locked",
      duration: "1 jam"
    },
    {
      name: "HTML Forms dan Tables",
      progress: 0,
      difficulty: "Intermediate",
      status: "Locked",
      duration: "1.5 jam"
    }
  ]
}

export default function CourseProgress() {
    return (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative p-8 overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-gray-700"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(6,182,212,0.1)_50%,transparent_100%)] animate-[shimmer_2s_infinite]"/>
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-white">
            Welcome back, Username! 👋
          </h1>
          <p className="max-w-2xl text-lg text-gray-400">
            Lanjutkan perjalanan belajar Anda dari terakhir kali. Mari kita capai target pembelajaran hari ini!
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6">
  {learningStats.map((stat, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden p-6 border border-gray-800 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:border-gray-700 transition-all duration-300"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color.from} ${stat.color.to} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}/>
      <div className="relative flex flex-col">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color.from} ${stat.color.to} w-fit mb-3`}>
          <stat.icon className={`w-6 h-6 ${stat.color.text}`} />
        </div>
        <p className="text-3xl font-bold text-white mb-1">
          {stat.value}
        </p>
        <p className="text-sm font-medium text-gray-400 mb-2">
          {stat.label}
        </p>
        {stat.trend && (
          <p className={`text-xs ${stat.color.text} font-medium`}>
            {stat.trend}
          </p>
        )}
      </div>
    </motion.div>
  ))}
</div>

        {/* Current Course Section */}
        <div className="p-8 border border-gray-700 rounded-2xl bg-gray-800/50 backdrop-blur-sm">
          <div className="flex items-center gap-6 mb-8">
            <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
              <Code className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{currentCourse.name}</h2>
              <div className="mt-2 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Estimasi: 3 jam</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">12 Modul</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {currentCourse.modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="group relative p-6 border border-gray-700 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:border-cyan-500/50"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"/>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${
                      module.status === 'Continue'
                        ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20'
                        : 'bg-gray-700/50'
                    }`}>
                      {module.status === 'Continue' ? (
                        <Play className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <Lock className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                        {module.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-3">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400">
                          {module.difficulty}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-400">
                          <Clock className="w-4 h-4" />
                          {module.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      module.status === 'Continue'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90'
                        : 'bg-gray-700/50 text-gray-400'
                    }`}
                  >
                    {module.status}
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
                {module.progress > 0 && (
                  <div className="mt-4">
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-cyan-400">{module.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-700/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${module.progress}%` }}
                        transition={{ duration: 1, delay: 0.7 + (index * 0.1) }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[shimmer_2s_infinite]"/>
                      </motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }

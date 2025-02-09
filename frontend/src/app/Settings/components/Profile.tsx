import { motion } from 'framer-motion'
import { Camera, Github, Twitter, Globe, Mail, BookOpen, Trophy, Star, Clock, Code, Terminal, Zap } from 'lucide-react'
import Image from 'next/image'
import ruanmei from '../../assets/ruanmei.jpg'

interface SocialLink {
  platform: string
  icon: any
  placeholder: string
  value: string
}

interface LearningStat {
  icon: any
  label: string
  value: string
  trend?: string
}

const dummyData: ProfileData = {
  profile: {
    name: "John Doe",
    username: "johndoe",
    role: "Frontend Developer",
    title: "Student at RT Academy",
    experience: "1 year of coding experience",
    avatar: ruanmei,
    bio: "Frontend developer passionate about React and TypeScript. Currently learning Next.js and building awesome projects at RT Academy."
  },
  skills: [
    { name: 'React', level: 75, category: 'frontend' },
    { name: 'TypeScript', level: 65, category: 'frontend' },
    { name: 'Next.js', level: 45, category: 'frontend' },
    { name: 'TailwindCSS', level: 85, category: 'frontend' },
  ],
  socialLinks: [
    { platform: 'github', icon: Github, placeholder: 'GitHub username', value: 'johndoe' },
    { platform: 'twitter', icon: Twitter, placeholder: 'Twitter handle', value: '@johndoe' },
    { platform: 'website', icon: Globe, placeholder: 'Portfolio URL', value: 'johndoe.dev' },
    { platform: 'email', icon: Mail, placeholder: 'Email address', value: 'john@example.com' }
  ] as SocialLink[],
  learningStats: [
    { icon: BookOpen, label: 'Courses', value: '12', trend: '+2 this month' },
    { icon: Trophy, label: 'Completed', value: '8', trend: 'Latest: React' },
    { icon: Clock, label: 'Hours', value: '45', trend: '+5 this week' },
    { icon: Star, label: 'Points', value: '2,450', trend: 'Level 5' }
  ] as LearningStat[]
}

export default function ProfileSection() {
  return (
    <div className="space-y-8">
      <div className="relative -mx-6 -mt-6 p-8 rounded-2xl bg-gradient-to-r from-gray-900  overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <pre className="text-xs text-cyan-500">
            {`const developer = {
  name: "RT Academy",
  passion: "Building Future Devs",
  code: "React + Next.js"
    name: "RT Academy",
  passion: "Building Future Devs",
  code: "React + Next.js"
    name: "RT Academy",
  passion: "Building Future Devs",
  code: "React + Next.js"
}`}
          </pre>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex items-center gap-8"
        >

          <div className="relative group">
            <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-xl">
              <Image
                src={dummyData.profile.avatar}
                alt="Profile"
                width={128}
                height={128}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60" />
            </div>
            <button className="absolute bottom-2 right-2 p-2.5 rounded-xl bg-cyan-500 text-white opacity-0 group-hover:opacity-100 transform group-hover:scale-105 transition-all">
              <Camera className="w-4 h-4" />
            </button>
          </div>

  
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white">{dummyData.profile.name}</h2>
              <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/20">
                {dummyData.profile.role}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{dummyData.profile.title}</p>
            <div className="flex items-center gap-4 mt-4">
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <Code className="w-4 h-4 text-cyan-400" />
                {dummyData.profile.experience}
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <Terminal className="w-4 h-4 text-cyan-400" />
                @{dummyData.profile.username}
              </span>
            </div>
          </div>
        </motion.div>
      </div>


      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            Skills Progress
          </h3>
          <div className="space-y-4">
            {dummyData.skills.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-2 gap-4 content-start">
          {dummyData.learningStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-cyan-500/20">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              {stat.trend && (
                <p className="text-xs text-cyan-400 mt-2">{stat.trend}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

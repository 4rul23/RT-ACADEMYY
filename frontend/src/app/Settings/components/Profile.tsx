import { motion } from 'framer-motion'
import { Camera, Github, Twitter, Globe, Mail, BookOpen, Trophy, Star, Clock } from 'lucide-react'
import Image from 'next/image'
import ruanmei from '@/app/assets/ruanmei.jpg'

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

const dummyData = {
  profile: {
    name: "John Doe",
    username: "johndoe",
    role: "Student",
    avatar: ruanmei,
    bio: "Frontend developer passionate about React and TypeScript"
  },
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
      {/* Profile Info */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-8"
        >
          {/* Avatar */}
          <div className="relative group">
            <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-xl">
              <Image
                src={dummyData.profile.avatar}
                alt="Profile"
                width={128}
                height={128}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <button className="absolute bottom-2 right-2 p-2.5 rounded-xl bg-cyan-500 text-white opacity-0 group-hover:opacity-100 transition-all">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          {/* Basic Info */}
          <div className="flex-1">
            <input
              type="text"
              defaultValue={dummyData.profile.name}
              className="text-2xl font-bold text-white bg-transparent border-none focus:outline-none focus:ring-0 p-0"
            />
            <div className="flex items-center gap-4 mt-2">
              <span className="px-3 py-1 text-sm rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/20">
                {dummyData.profile.role}
              </span>
              <span className="text-sm text-gray-400">@{dummyData.profile.username}</span>
            </div>
          </div>
        </motion.div>

        {/* Bio & Social Links */}
        <div className="mt-8 space-y-6">
          <textarea
            defaultValue={dummyData.profile.bio}
            className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
            rows={3}
          />

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-4">
            {dummyData.socialLinks.map((social, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 border border-gray-700">
                <social.icon className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  defaultValue={social.value}
                  placeholder={social.placeholder}
                  className="flex-1 bg-transparent border-none text-white placeholder:text-gray-500 focus:outline-none text-sm"
                />
              </div>
            ))}
          </div>

          {/* Learning Stats */}
          <div className="grid grid-cols-4 gap-4">
            {dummyData.learningStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-gray-800/50 border border-gray-700"
              >
                <stat.icon className="w-5 h-5 text-cyan-400 mb-2" />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
                {stat.trend && (
                  <p className="text-xs text-cyan-400 mt-1">{stat.trend}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-8">
          <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition-opacity">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Users, Award } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Package {
  title: string
  description: string
  monthlyPrice: string
  yearlyPrice: string
  features: string[]
  icon: LucideIcon
  buttonText: string
  delay: number
  popular?: boolean
  premium?: boolean
  isEnterprise?: boolean
  customPrice?: boolean
  highlight?: string
}

interface PricingCardsProps {
  isYearly: boolean
}

const packages: Package[] = [
  {
    title: "PEMULA",
    description: "Langkah awal untuk mengenal dan memulai perjalanan Web Development anda",
    monthlyPrice: "Rp99.000",
    yearlyPrice: "Rp990.000",
    features: [
      "Akses ke CSS, HTML dan Javascript Module",
      "Certification vouchers",
      "1,000+ hands-on scenarios",
      "1x CTF event (24h)",
      "CVE-based scenarios",
      "Purple team scenarios"
    ],
    icon: Star,
    buttonText: "Mulai Sekarang",
    delay: 0.2
  },
  {
    title: "MENENGAH",
    description: "Tingkat Lanjutkan Skill anda dalam pengembangan Website Yang Lebih Modern menggunakan Framework",
    monthlyPrice: "Rp199.000",
    yearlyPrice: "Rp1.990.000",
    features: [
      "Akses ke Module HTML, CSS, Javascript",
      "5 Beginner Friendly Project",
      "Access Ke Forum Konsultasi",
      "Sertifikat Penyelesaian Modul",
      "Mentoring Session",
      "Advanced Project Cases"
    ],
    icon: Zap,
    buttonText: "Mulai Sekarang",
    popular: true,
    delay: 0.3
  },
  {
    title: "AHLI",
    description: "Paket Tingkat Lanjut yang ditujukan kepada Junior-Senior Web Developer",
    monthlyPrice: "Rp299.000",
    yearlyPrice: "Rp2.990.000",
    features: [
      "Semua fitur di Paket Menengah",
      "Advanced Framework Modules",
      "Real-world Project Cases",
      "1-on-1 Mentoring Session",
      "Priority Support Access",
      "Job Connect Program"
    ],
    icon: Award,
    buttonText: "Mulai Sekarang",
    premium: true,
    delay: 0.4,
    highlight: "Most Value"
  },
  {
    title: "SEKOLAH",
    description: "Program khusus untuk institusi pendidikan dengan fitur dan dukungan lengkap",
    monthlyPrice: "Hubungi Kami",
    yearlyPrice: "Hubungi Kami",
    features: [
      "Akses Unlimited untuk Semua Siswa",
      "Custom Learning Path",
      "Progress Tracking Dashboard",
      "Dedicated Support Team",
      "Teacher Training Program",
      "Regular Performance Reports"
    ],
    icon: Users,
    buttonText: "Contact Support",
    isEnterprise: true,
    delay: 0.5,
    customPrice: true
  }
]

export default function PricingCards({ isYearly }: PricingCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
      {packages.map((pkg) => (
        <motion.div
          key={pkg.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: pkg.delay }}
          className={`relative rounded-xl overflow-hidden ${
            pkg.popular
              ? 'border-2 border-cyan-500 shadow-lg shadow-cyan-500/20'
              : 'border border-gray-700'
          } bg-gray-800/50 backdrop-blur-sm group hover:border-cyan-500/50 transition-all duration-300`}
        >
          {pkg.popular && (
            <motion.div
              className="absolute top-4 right-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: pkg.delay + 0.2 }}
            >
              <span className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                Popular
              </span>
            </motion.div>
          )}

          <div className="p-8">
            <div className="mb-6">
              <pkg.icon className="w-10 h-10 text-cyan-400" />
            </div>

            <h2 className="mb-4 text-2xl font-bold text-white">{pkg.title}</h2>
            <p className="mb-8 text-gray-400 min-h-[60px]">{pkg.description}</p>

            <div className="mb-8">
              <div className="text-3xl font-bold text-white">
                {isYearly ? pkg.yearlyPrice : pkg.monthlyPrice}
                {!pkg.customPrice && (
                  <span className="text-lg text-gray-400">/bulan</span>
                )}
              </div>
              {isYearly && !pkg.customPrice && (
                <p className="mt-2 text-sm text-green-500">Save 20% with yearly billing</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 px-6 rounded-lg font-medium mb-8 ${
                pkg.isEnterprise
                  ? 'bg-gray-700 hover:bg-gray-600'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90'
              } transition-all duration-300`}
            >
              {pkg.buttonText}
            </motion.button>

            <div className="space-y-4">
              <p className="mb-6 font-medium text-gray-300">Termasuk fitur:</p>
              {pkg.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: pkg.delay + (idx * 0.1) }}
                >
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

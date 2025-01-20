'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {  User,  } from 'lucide-react'
import { GeistMono } from 'geist/font/mono'
import logo from '../assets/logos.png'
import StepOne from './components/Stepone'

interface FormData {
  fullName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  accountType: 'personal' | 'institution'
}

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    accountType: 'personal'
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    router.push('/choose-platform')
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
    <div className={`relative w-full max-w-md ${GeistMono.className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 border border-gray-700 bg-gray-800/50 backdrop-blur-xl rounded-2xl md:p-8"
      >

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="flex justify-center mb-4"
        >
          <Link href="/">
            <Image
              src={logo}
              alt="RT Academy Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </motion.div>

        <div className="mb-4 text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-1 text-xl font-bold text-white"
          >
            Mulai Perjalanan Belajar Anda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm"
          >
            Daftar untuk mengakses pembelajaran pemrograman terbaik
          </motion.p>
        </div>

        <div className="mb-4">
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFormData({ ...formData, accountType: 'personal' })}
              className={`flex-1 p-3 rounded-lg border ${
                formData.accountType === 'personal'
                  ? 'border-cyan-500 bg-cyan-500/10'
                  : 'border-gray-700 hover:border-gray-600'
              } transition-all duration-300`}
            >
              <User className="w-5 h-5 mx-auto mb-1 text-cyan-400" />
              <p className="text-sm font-medium text-white">Personal</p>
              <p className="text-xs text-gray-400">Untuk pembelajaran individu</p>
            </motion.button>
          </div>
        </div>


        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {step === 1 ? (
            <StepOne
              formData={formData}
              handleInputChange={handleInputChange}
              setStep={setStep}
            />
          ) : (
            <StepTwo
              formData={formData}
              handleInputChange={handleInputChange}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
              setStep={setStep}
              isLoading={isLoading}
            />
          )}
        </motion.form>
      </motion.div>
    </div>
    </div>
  )
}

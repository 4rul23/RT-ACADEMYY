'use client'

import { motion } from 'framer-motion'
import { Lock, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

interface StepTwoProps {
  formData: {
    password: string
    confirmPassword: string
  }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  showPassword: boolean
  setShowPassword: (show: boolean) => void
  showConfirmPassword: boolean
  setShowConfirmPassword: (show: boolean) => void
  setStep: (step: number) => void
  isLoading: boolean
}

export default function StepTwo({
  formData,
  handleInputChange,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  setStep,
  isLoading
}: StepTwoProps) {
  const previousStep = (e: React.MouseEvent) => {
    e.preventDefault()
    setStep(1)
  }

  return (
    <>
      {/* Password Field */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-300">Password</label>
        <div className="relative">
          <Lock className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-10 py-2 text-sm text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
            placeholder="Buat password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-300"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-300">Konfirmasi Password</label>
        <div className="relative">
          <Lock className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-10 py-2 text-sm text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
            placeholder="Konfirmasi password"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-300"
          >
            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Agreement Checkbox */}
      <div className="space-y-4">
        <label className="flex items-start gap-3 text-gray-400 cursor-pointer hover:text-gray-300">
          <input
            type="checkbox"
            className="mt-1 border-gray-700 rounded bg-gray-900/50 text-cyan-500 focus:ring-cyan-500"
            required
          />
          <span className="text-xs">
            Saya setuju dengan{' '}
            <Link href="/terms" className="text-cyan-400 hover:text-cyan-300">
              Syarat dan Ketentuan
            </Link>
            {' '}serta{' '}
            <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300">
              Kebijakan Privasi
            </Link>
          </span>
        </label>
      </div>

      <div className="flex gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={previousStep}
          className="flex-1 py-2 text-sm font-medium text-white transition-colors bg-gray-700 rounded-lg hover:bg-gray-600"
        >
          Kembali
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="relative flex-1 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          {isLoading ? (
            <svg className="w-5 h-5 mx-auto animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
          ) : (
            <span>Daftar Sekarang</span>
          )}
        </motion.button>
      </div>
    </>
  )
}

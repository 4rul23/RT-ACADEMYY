import { motion } from 'framer-motion';
import { User, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

interface StepOneProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setStep: (step: number) => void;
}

export default function StepOne({ formData, handleInputChange, setStep }: StepOneProps) {
  const nextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <>

      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-300">Nama Lengkap</label>
        <div className="relative">
          <User className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-10 py-2 text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
            placeholder="Masukkan nama lengkap"
            required
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-300">Email</label>
        <div className="relative">
          <Mail className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-10 py-2 text-sm text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
            placeholder="Masukkan email"
            required
          />
        </div>
      </div>

      {/* Phone Field */}
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-300">Nomor Telepon</label>
        <div className="relative">
          <Phone className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-10 py-2 text-sm text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500"
            placeholder="Masukkan nomor telepon"
            required
          />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={nextStep}
        className="w-full py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
      >
        Lanjutkan
      </motion.button>

      <p className="text-center text-xs text-gray-400">
        Sudah punya akun?{' '}
        <Link href="/login" className="text-cyan-400 hover:text-cyan-300">
          Login
        </Link>
      </p>
    </>
  );
}

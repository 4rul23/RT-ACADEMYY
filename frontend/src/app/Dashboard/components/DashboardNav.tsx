'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Bell from '../../Academy/components/Notification'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '../../assets/logos.png'

const navItems = [
  { label: 'Overview', path: '/Dashboard' },
  { label: 'User Settings', path: '/Settings' },
  { label: 'Resources', path: '/Resources' }
]

export default function DashboardNav() {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl"
    >
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/dashboard">
              <Image
                src={logo}
                alt="RT Academy"
                width={160}
                height={50}
                priority
              />
            </Link>

            <div className="flex gap-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                >
                  <div
                    className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                      pathname === item.path
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Bell />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

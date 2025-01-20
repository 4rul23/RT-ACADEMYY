'use client';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { GeistMono } from 'geist/font/mono';
import logos from "@/app/assets/logos.png";
const NAV_LINKS = [
  { href: "/produk", label: "Produk" },
  { href: "/Tujuan", label: "Tujuan" },
  { href: "/Harga", label: "Harga" },
  { href: "/Resources", label: "Referensi" },
  { href: "/Student", label: "Siswa" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className={`
      fixed top-0 left-0 right-0 z-50
      ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-gray-900'}
      border-b border-gray-800 shadow-lg
      ${GeistMono.className}
    `}
  >
    <div className="px-6 mx-auto max-w-7xl lg:px-8">
      <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <Link href="/" className="flex items-center">
              <Image
                src={logos}
                alt="RT ACADEMY Logo"
                priority
                className="w-auto h-12"
              />
            </Link>
          </motion.div>

          <div className="items-center hidden space-x-2 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`
                  relative px-4 py-2  font-semibold
                  ${pathname === href
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                  }
                  transition-all duration-200 rounded-lg
                  hover:bg-gray-800/50
                  ${GeistMono.className}
                `}
              >
                {pathname === href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {label}
              </Link>
            ))}
          </div>

          <div className="items-center hidden space-x-6 md:flex">
            <Link
              href="/sekolah"
              className="font-medium text-gray-400 transition-all duration-200 hover:text-gray-200"
            >
              Sekolah
            </Link>

            <div className="w-px h-4 bg-gray-800" />

            <Link
              href="/login"
              className=" font-medium text-gray-400 transition-all duration-200 hover:text-gray-200"
            >
              Login
            </Link>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/mulai"
                className="
                  px-5 py-2 font-medium text-white
                  bg-gradient-to-r from-cyan-500 to-blue-500
                  rounded-lg hover:opacity-90 transition-all duration-200
                  shadow-lg shadow-cyan-500/25
                "
              >
                Mulai
              </Link>
            </motion.div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-400 rounded-lg md:hidden hover:text-gray-200 hover:bg-gray-800/50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {scrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          className="h-[1px] bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50"
        />
      )}
    </motion.nav>
  );
}

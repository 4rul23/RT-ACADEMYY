'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { GeistMono } from 'geist/font/mono';
import logo from '../assets/logos.png';

interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
  color: string;
}

const footerData = {
  links: {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Learning Path', href: '/learning-path' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
    ],
  },
  social: [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
  ] as SocialLink[],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0A1525] border-t border-gray-800">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 blur-3xl animate-pulse" />
        <motion.div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 blur-3xl animate-pulse" />
      </div>

      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-2"
          >
            <Link href="/" className="block">
              <Image src={logo} alt="RT Academy Logo" height={40} width={160} className="h-10 w-auto" />
            </Link>
            <p className={`text-lg leading-relaxed text-gray-400 ${GeistMono.className}`}>
              Platform pembelajaran coding terbaik untuk siswa SMA/SMK di Indonesia.
            </p>
            <ContactInfo />
          </motion.div>

          <FooterLinks />
        </div>

        <NewsletterSection />
        <FooterBottom />
      </div>
    </footer>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-4">
      {[
        { Icon: Mail, text: 'contact@rt-academy.com', href: 'mailto:contact@rt-academy.com' },
        { Icon: Phone, text: '+62 812-3456-7890', href: 'tel:+6281234567890' },
        { Icon: MapPin, text: 'Jl. Pettarani Smk telkom makassar', href: '#' },
      ].map(({ Icon, text, href }) => (
        <motion.a
          key={text}
          href={href}
          whileHover={{ x: 5 }}
          className={`flex items-center text-gray-400 transition-colors hover:text-cyan-400 group ${GeistMono.className}`}
        >
          <Icon className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
          {text}
        </motion.a>
      ))}
    </div>
  );
}

function FooterLinks() {
  return (
    <>
      {Object.entries(footerData.links).map(([category, links]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <h3 className={`mb-6 text-lg font-semibold text-white capitalize ${GeistMono.className}`}>{category}</h3>
          <ul className="space-y-4">
            {links.map(link => (
              <motion.li key={link.name} whileHover={{ x: 5 }}>
                <Link
                  href={link.href}
                  className={`flex items-center text-gray-400 transition-colors hover:text-cyan-400 group ${GeistMono.className}`}
                >
                  <ChevronRight className="w-4 h-4 mr-2 transition-all -translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </>
  );
}

function NewsletterSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative p-8 mb-16 border bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border-gray-700/50 backdrop-blur-sm"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h3 className={`mb-4 text-2xl font-bold text-white ${GeistMono.className}`}>Stay Updated</h3>
        <form className="flex max-w-md gap-4 mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className={`flex-1 px-4 py-3 text-white transition-colors border border-gray-700 rounded-lg bg-gray-900/50 placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 ${GeistMono.className}`}
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center gap-2 px-6 py-3 font-medium text-white transition-opacity rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 group ${GeistMono.className}`}
          >
            Subscribe
            <ExternalLink className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

function FooterBottom() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-gray-800 md:flex-row"
    >
      <div className={`text-sm text-gray-400 ${GeistMono.className}`}>
        © {new Date().getFullYear()} RT Academy. All rights reserved.
      </div>
      <div className="flex gap-6">
        {footerData.social.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className={`text-gray-400 transition-colors ${social.color}`}
            aria-label={social.label}
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

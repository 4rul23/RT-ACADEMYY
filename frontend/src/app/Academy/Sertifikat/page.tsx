'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Book, ArrowRight, Ticket, } from 'lucide-react'
import Image from 'next/image'
import sertif from './sertif.svg'

const certificates = [
    {
      id: 1,
      title: "Frontend Development Specialist",
      description: "Master modern web development with comprehensive understanding of frontend technologies, frameworks, and best practices.",
      image: sertif,
      jobRole: "Frontend Developer",
      moduleCount: "15 Modules",
      examVoucher: "1 Voucher",
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js"],
      level: "Professional"
    },
    {
        id: 2,
        title: "Frontend Development Specialist",
        description: "Master modern web development with comprehensive understanding of frontend technologies, frameworks, and best practices.",
        image: sertif,
        jobRole: "Frontend Developer",
        moduleCount: "15 Modules",
        examVoucher: "1 Voucher",
        skills: ["HTML/CSS", "JavaScript", "React", "Next.js"],
        level: "Professional"
      },
      {
        id: 3,
        title: "Frontend Development Specialist",
        description: "Master modern web development with comprehensive understanding of frontend technologies, frameworks, and best practices.",
        image: sertif,
        jobRole: "Frontend Developer",
        moduleCount: "15 Modules",
        examVoucher: "1 Voucher",
        skills: ["HTML/CSS", "JavaScript", "React", "Next.js"],
        level: "Professional"
      },
      {
        id: 4,
        title: "Frontend Development Specialist",
        description: "Master modern web development with comprehensive understanding of frontend technologies, frameworks, and best practices.",
        image: sertif,
        jobRole: "Frontend Developer",
        moduleCount: "15 Modules",
        examVoucher: "1 Voucher",
        skills: ["HTML/CSS", "JavaScript", "React", "Next.js"],
        level: "Professional"
      },

  ]

export default function CertificatePage() {
    return (
        <div className="relative max-w-7xl mx-auto p-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Professional Certifications</h1>
          <p className="text-gray-400">Advance your career with RT Academy certifications</p>
        </div>

        <div className="space-y-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex min-h-[300px]">

                  <div className="flex-1 p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/20">
                        {cert.level}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">{cert.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-800 text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>


                  <div className="relative w-96 border-l border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-900/10" />
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover opacity-80"
                    />
                  </div>
                </div>


                <div className="grid grid-cols-4 border-t border-gray-800">
                  {[
                    {
                      icon: Briefcase,
                      label: "RELATED ROLE",
                      value: cert.jobRole
                    },
                    {
                      icon: Book,
                      label: "COVERS",
                      value: cert.moduleCount
                    },
                    {
                      icon: Ticket,
                      label: "EXAM VOUCHER",
                      value: cert.examVoucher
                    },
                    {
                      icon: ArrowRight,
                      label: "INFORMATION",
                      action: true
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`py-4 px-6 ${idx < 3 ? 'border-r border-gray-800' : ''} group/item`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className={`w-4 h-4 ${item.action ? 'text-green-400' : 'text-cyan-400'}`} />
                        <p className="text-xs text-gray-400">{item.label}</p>
                      </div>
                      {item.action ? (
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="text-green-400 text-sm font-medium"
                        >
                          View Details
                        </motion.button>
                      ) : (
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

'use client';

import { motion } from 'framer-motion';
import { Book, Users, MessageCircle, Globe, Terminal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import discord from '../assets/Resources/discord.svg';
import DashboardNav from '../Dashboard/components/DashboardNav';
import React from 'react';



type QuickStat = {
  icon: LucideIcon;
  value: string;
}

type Resource = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  link: string;
  category: string;
  quickStats: QuickStat[];
}








const ResourceCard = ({
  resource,
  index,
  isExpanded,
  onHover
}: {
  resource: Resource;
  index: number;
  isExpanded: boolean;
  onHover: (index: number) => void;
}) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      layout
      transition={{
        duration: 0.8,
        layout: {
          duration: 0.8,
          type: "spring",
          bounce: 0.2,
          stiffness: 100,
          damping: 20
        }
      }}
      onHoverStart={() => onHover(index)}
      className={`group relative col-span-1 cursor-pointer
        ${isExpanded ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <Link href={resource.link}>
        <motion.div
          layout
          transition={{
            duration: 0.6,
            ease: [0.43, 0.13, 0.23, 0.96] // Custom easing
          }}
          className="relative h-full overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
        >
          {/* Content Container */}
          <motion.div
            layout
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              staggerChildren: 0.1
            }}
            className={`relative p-6 ${isExpanded ? 'md:p-8' : ''}`}
          >
            {/* Title and Description */}
            <motion.div
              layout
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
              className={`space-y-3 ${isExpanded ? 'md:max-w-lg' : ''}`}
            >
              <h3 className="text-xl font-bold text-white">
                {resource.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {resource.description}
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              layout
              transition={{
                duration: 0.6,
                staggerChildren: 0.05,
                delayChildren: 0.1
              }}
              className={`grid grid-cols-2 gap-4 mt-6 ${isExpanded ? 'md:grid-cols-4' : ''}`}
            >
              {resource.quickStats.map((stat: QuickStat, idx: number) => (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05
                  }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-gray-800/50"
                >
                  <stat.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">{stat.value}</span>
                </motion.div>
              ))}
            </motion.div>

            {resource.image && isExpanded && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                className="mt-6 relative h-72 rounded-xl overflow-hidden "
              >
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/0" />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
  const resources = [
    {
        title: 'Official Documentation',
        description: 'Access comprehensive guides, tutorials, and API references for RT-Academy courses and technologies.',
        icon: Book,
        image: discord,
        link: '/resources/docs',
        category: 'Learning Materials',
        quickStats: [
            { icon: Globe, value: '500+ Guides' },
            { icon: Terminal, value: '24/7 Access' }
        ]
    },
    {
        title: 'Developer Community',
        description: 'Join our vibrant community of developers. Share knowledge, ask questions, and grow together.',
        icon: Users,
        image: discord,
        link: discord,
        category: 'Community',
        quickStats: [
            { icon: Users, value: '1K+ Members' },
            { icon: Terminal, value: '100+ Topics' }
        ]
    },
    {
        title: 'Discord Server',
        description: 'Get real-time support, participate in discussions, and connect with fellow developers worldwide.',
        icon: MessageCircle,
        image: discord,
        link: 'https://discord.gg/rt-academy',
        category: 'Live Chat',
        quickStats: [
            { icon: Users, value: '500+ Online' },
            { icon: Terminal, value: '20+ Channels' }
        ]
    }
];

export default function ResourcesPage() {
    const [expandedIndex, setExpandedIndex] = React.useState(0);
    return (

      <>
        <DashboardNav />

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-400 text-sm font-medium">Resources</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Developer Resources Hub
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Everything you need to accelerate your learning journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
            layout // Enable layout animations for grid
            className="contents"
          >
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                resource={resource}
                index={index}
                isExpanded={index === expandedIndex}
                onHover={setExpandedIndex}
              />
            ))}
          </motion.div>
        </div>

            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)]" />
            </div>
          </div>
      </>
    );
  }

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Bell } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const notifications = [
  {
    id: 1,
    title: "New Module Available",
    description: "HTML Fundamentals module is now available",
    time: "2 minutes ago",
    isRead: false
  },
  {
    id: 2,
    title: "Achievement Unlocked",
    description: "Completed your first module!",
    time: "1 hour ago",
    isRead: true
  },
  {
    id: 3,
    title: "Weekly Progress",
    description: "You've completed 3 lessons this week",
    time: "2 days ago",
    isRead: true
  }
]

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg hover:bg-white/5 transition-colors"
      >
        <Bell className="w-5 h-5 text-gray-400" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-500 rounded-full" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-80 p-4 rounded-xl border border-white/10 bg-gray-900/95 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-white">Notifications</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-cyan-400 hover:text-cyan-300"
              >
                Mark all as read
              </button>
            </div>

            <div className="space-y-3">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`p-3 rounded-lg border ${
                    notification.isRead
                      ? 'border-white/5 bg-white/5'
                      : 'border-cyan-500/20 bg-cyan-500/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-medium text-white">
                      {notification.title}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">
                    {notification.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {notifications.length === 0 && (
              <div className="text-center py-4">
                <p className="text-sm text-gray-400">No new notifications</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

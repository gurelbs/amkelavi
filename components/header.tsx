"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { NotificationSettings } from "@/components/notification-settings"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">עכ</span>
              </div>
              <span className="font-bold text-xl mr-2">עם כלביא</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#news" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              חדשות
            </a>
            <a href="#updates" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              עדכונים
            </a>
          </nav>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="הגדרות התראות"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>

            <ThemeToggle />

            <button className="md:hidden mr-4" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="תפריט">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 12h16M4 6h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a
              href="#news"
              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              חדשות
            </a>
            <a
              href="#updates"
              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              עדכונים
            </a>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="absolute left-0 right-0 mt-2 z-50">
          <div className="container mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700 max-w-sm mr-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">הגדרות התראות</h3>
                <button onClick={() => setShowSettings(false)} className="text-gray-500 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <NotificationSettings />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

'use client'

import { useEffect, useState } from 'react'

export default function LinkedInBadge({ size = 'medium', type = 'HORIZONTAL' }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check initial dark mode state
    const checkDarkMode = () => {
      if (typeof window !== 'undefined') {
        const isDark = document.documentElement.classList.contains('dark')
        setIsDarkMode(isDark)
      }
    }

    checkDarkMode()

    // Create observer to watch for dark mode changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          checkDarkMode()
        }
      })
    })

    // Start observing
    if (typeof window !== 'undefined') {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="linkedin-badge-container my-6 min-h-[200px] flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg w-64 h-48"></div>
      </div>
    )
  }

  // Use theme based on dark mode state
  const theme = isDarkMode ? 'dark' : 'light'

  return (
    <div className="linkedin-badge-container mt-2 flex justify-center">
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size={size}
        data-theme={theme}
        data-type={type}
        data-vanity="jominthomasjoseph"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://ca.linkedin.com/in/jominthomasjoseph?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>

      {/* Fallback: If LinkedIn badge doesn't load, show a custom LinkedIn card */}
      <div className="linkedin-fallback p-4 bg-white dark:bg-dark-100 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 w-full max-w-sm">
        <div className="flex items-start space-x-3">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Jomin Jose</h3>
            <p className="text-xs text-blue-600 dark:text-blue-400 mb-2 font-medium">
              Full Stack Web Developer
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 leading-relaxed">
              5+ years experience • MEAN Stack Expert • Adobe Certified
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              📍 Waterloo, Canada • 🎓 Conestoga College
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              🏢 Previously: TCS, Infospica • 👥 1M+ users served
            </p>
            <a
              href="https://ca.linkedin.com/in/jominthomasjoseph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-md transition-colors duration-200"
            >
              <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
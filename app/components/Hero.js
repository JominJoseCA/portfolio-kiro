'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Hero() {
  const [text, setText] = useState('')
  const roles = ['Full Stack Developer', 'MEAN Stack Expert', 'React Specialist', 'Node.js Developer']
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentRole = roles[roleIndex]

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex, roles])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-300 dark:to-dark-200"></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1 animate-float">
              <div className="w-full h-full rounded-full bg-white dark:bg-dark-200 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">JJ</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm <span className="gradient-text">Jomin Jose</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span>{text}</span>
            <span className="animate-pulse ml-1">|</span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Highly skilled Web Developer with 5+ years of experience in MEAN stack, 
            certified in Adobe Experience Manager (AEM) and Adobe Campaign. Based in Waterloo, Canada.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:jominjose.ca@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="https://github.com/JominJoseCA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass-effect hover:bg-white/20 dark:hover:bg-gray-800/20 rounded-lg transition-colors duration-200"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jominthomasjoseph/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass-effect hover:bg-white/20 dark:hover:bg-gray-800/20 rounded-lg transition-colors duration-200"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-12">
            <MapPin size={18} />
            <span>Waterloo, Canada</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  )
}
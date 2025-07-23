'use client'

import { Code, Database, Server, Smartphone } from 'lucide-react'
import LinkedInBadge from './LinkedInBadge'

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Expert in React, Angular, and modern JavaScript frameworks"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Proficient in Node.js, Express.js, and RESTful API design"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Experience with MongoDB, PostgreSQL, and data modeling"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Creating mobile-first, accessible web applications"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-200">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        {/* Description and Stats on Left, LinkedIn Badge on Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a highly skilled Web Developer with 5+ years of experience in the MEAN stack
              (MongoDB, ExpressJS, Angular, NodeJS). I'm proficient in troubleshooting, debugging,
              and maintaining scalable web applications that serve millions of users globally.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Based in Waterloo, Canada, I'm certified in Adobe Experience Manager (AEM) and Adobe Campaign,
              demonstrating strong expertise in digital marketing technologies. I'm passionate about
              leveraging technical expertise to deliver innovative web solutions and contribute to dynamic team projects.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white dark:bg-dark-100 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Experience</span>
                <p className="text-xl font-bold text-primary-600">5+ Years</p>
              </div>
              <div className="bg-white dark:bg-dark-100 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Users Served</span>
                <p className="text-xl font-bold text-primary-600">1M+</p>
              </div>
              <div className="bg-white dark:bg-dark-100 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Certifications</span>
                <p className="text-xl font-bold text-primary-600">Adobe</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <LinkedInBadge />
            </div>
          </div>
        </div>

        {/* Skill Highlights Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
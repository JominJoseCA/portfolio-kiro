'use client'

import { Code, Database, Server, Smartphone } from 'lucide-react'

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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with over 5 years of experience building 
              scalable web applications. My expertise spans the entire MEAN stack, with deep 
              knowledge in modern frameworks and technologies.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Based in Waterloo, Canada, I specialize in creating intuitive user experiences 
              backed by robust server-side architecture. I'm constantly learning and adapting 
              to new technologies to deliver cutting-edge solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white dark:bg-dark-100 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Experience</span>
                <p className="text-xl font-bold text-primary-600">5+ Years</p>
              </div>
              <div className="bg-white dark:bg-dark-100 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Projects</span>
                <p className="text-xl font-bold text-primary-600">50+</p>
              </div>
              <div className="bg-white dark:bg-dark-100 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Technologies</span>
                <p className="text-xl font-bold text-primary-600">15+</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>
    </section>
  )
}
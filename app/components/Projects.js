'use client'

import { ExternalLink, Github, Eye } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe API"],
      github: "https://github.com/JominJoseCA",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application built with Angular and PostgreSQL. Includes real-time updates, team collaboration features, and project tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Angular", "Node.js", "PostgreSQL", "Socket.io", "JWT"],
      github: "https://github.com/JominJoseCA",
      live: "#",
      featured: true
    },
    {
      title: "Content Management System",
      description: "Custom CMS built with Adobe AEM and Java. Features content authoring, workflow management, and multi-site content distribution.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Adobe AEM", "Java", "Apache Sling", "JCR", "OSGi"],
      github: "https://github.com/JominJoseCA",
      live: "#",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, file sharing, and group chat functionality using Socket.io and React.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
      github: "https://github.com/JominJoseCA",
      live: "#",
      featured: false
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with interactive charts, data visualization, and real-time analytics using React and D3.js.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js"],
      github: "https://github.com/JominJoseCA",
      live: "#",
      featured: false
    },
    {
      title: "API Gateway Service",
      description: "Microservices API gateway with authentication, rate limiting, and request routing built with Express.js and Redis.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["Express.js", "Redis", "JWT", "Docker", "Nginx"],
      github: "https://github.com/JominJoseCA",
      live: "#",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-200">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Github size={20} className="text-gray-800" />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <ExternalLink size={20} className="text-gray-800" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors duration-200"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors duration-200"
                    >
                      <Eye size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
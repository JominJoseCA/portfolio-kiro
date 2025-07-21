'use client'

import { Calendar, MapPin, Building } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "Tata Consultancy Services (TCS)",
      location: "Bangalore, India",
      period: "Jan 2019 - Mar 2023",
      description: [
        "Optimized application performance, improving response times by up to 25% by implementing efficient API routes and database queries in the MEAN stack",
        "Developed and deployed over 10 web applications, serving a combined user base of 1M+ globally",
        "Reduced production issues by 40% through rigorous quality assurance tests, ensuring security, usability, and functionality",
        "Improved user retention rates by 15% by collaborating with UX/UI teams to enhance user experiences",
        "Mentored a team of 5 junior developers, resulting in a 20% reduction in onboarding time"
      ],
      technologies: ["MEAN Stack", "MongoDB", "Express.js", "Angular", "Node.js", "JavaScript"]
    },
    {
      title: "Software Developer",
      company: "Infospica",
      location: "Thiruvananthapuram, India", 
      period: "Sep 2017 - Nov 2018",
      description: [
        "Increased system performance by 30% by redesigning and optimizing legacy code for web and mobile applications",
        "Successfully delivered 5+ e-commerce solutions, generating revenue growth of $500K+ for clients",
        "Streamlined development workflows by introducing automated CI/CD pipelines, reducing deployment times by 50%",
        "Conducted root cause analysis of system failures, leading to a 25% reduction in downtime",
        "Partnered with cross-functional teams to deploy 3+ mobile features, resulting in a 10% increase in app engagement"
      ],
      technologies: ["Java", "Python", "JavaScript", "ReactJS", "Flutter", "CI/CD"]
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-purple-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-300 shadow-lg"></div>
                
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-dark-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-2 text-primary-600 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    
                    <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Building size={16} />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
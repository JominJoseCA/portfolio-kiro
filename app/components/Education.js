'use client'

import { GraduationCap, Calendar, MapPin, Award, Star } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: "Post Graduate Diploma in Big Data Solution Architecture",
      institution: "Conestoga College",
      location: "Kitchener, Ontario",
      period: "May 2024 - Dec 2024",
      type: "Post Graduate Diploma"
    },
    {
      degree: "Post Graduate Diploma in Reporting Systems and Database Development",
      institution: "Conestoga College",
      location: "Kitchener, Ontario",
      period: "May 2023 - Dec 2023",
      type: "Post Graduate Diploma"
    },
    {
      degree: "Bachelor of Technology",
      institution: "Kannur University",
      location: "Kannur, India",
      period: "Jul 2013 - Jul 2017",
      type: "Bachelor's Degree"
    }
  ]

  const certifications = [
    {
      name: "Adobe Experience Manager (AEM) Certified Professional",
      issuer: "Adobe",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/512px-Adobe_Systems_logo_and_wordmark.svg.png"
    },
    {
      name: "Adobe Campaign Certified Professional",
      issuer: "Adobe",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/512px-Adobe_Systems_logo_and_wordmark.svg.png"
    }
  ]

  const awards = [
    {
      title: "CSR Special Initiative Award",
      year: "2023",
      description: "Recognized for significant contributions to corporate social responsibility initiatives"
    },
    {
      title: "Special Initiative Award for Environmental Sustainability, Health, and Safety",
      year: "2022",
      description: "Outstanding contribution to environmental and safety initiatives"
    },
    {
      title: "Special Initiative Award for Safety First",
      year: "2022",
      description: "Excellence in promoting workplace safety standards"
    }
  ]

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-dark-200">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background, professional certifications, and recognition
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="text-primary-600" size={24} />
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                    </div>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                      {edu.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <img 
                    src={cert.icon} 
                    alt={cert.issuer}
                    className="w-12 h-12"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div>
                    <h4 className="text-lg font-bold mb-1">{cert.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300">Issued by {cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Awards & Honors</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={32} />
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2">{award.title}</h4>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <Star className="text-yellow-500" size={16} />
                  <span className="text-primary-600 font-semibold">{award.year}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white dark:bg-dark-100 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary-600">Work Authorization</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Currently in applied status for a work permit in Canada</li>
                <li>• Eligible to work more than 40 hours per week</li>
                <li>• Open to relocation and flexible work environments</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary-600">Professional Focus</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Passionate about innovative web solutions</li>
                <li>• Strong foundation in digital marketing technologies</li>
                <li>• Committed to dynamic team collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
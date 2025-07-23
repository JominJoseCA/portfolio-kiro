'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, XCircle, X } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const showNotification = (message, type) => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 5000) // Auto-hide after 5 seconds
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Call Firebase Functions API directly
      const response = await fetch('https://us-central1-jomin-portfolio.cloudfunctions.net/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        showNotification('Message sent successfully! Thank you for reaching out.', 'success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        showNotification(data.message || 'Failed to send message. Please try again.', 'error')
      }
    } catch (error) {
      console.error('Error:', error)
      showNotification('Failed to send message. Please check your connection and try again.', 'error')
    }

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "jominjose.ca@gmail.com",
      link: "mailto:jominjose.ca@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Waterloo, Canada",
      link: "#"
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Notification */}
        {notification && (
          <div className={`fixed top-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg transition-all duration-300 ${notification.type === 'success'
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
            }`}>
            <div className="flex items-center gap-3">
              {notification.type === 'success' ? (
                <CheckCircle size={20} />
              ) : (
                <XCircle size={20} />
              )}
              <span className="flex-1">{notification.message}</span>
              <button
                onClick={() => setNotification(null)}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello,
              I'd love to hear from you. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-dark-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-primary-600">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/JominJoseCA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-dark-100 hover:bg-primary-600 hover:text-white rounded-lg transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jominthomasjoseph/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-dark-100 hover:bg-primary-600 hover:text-white rounded-lg transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-100 p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-200 transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-200 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-200 transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-200 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
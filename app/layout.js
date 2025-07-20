import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jomin Jose - Full Stack Developer',
  description: 'Portfolio of Jomin Jose - Experienced Full Stack Developer specializing in MEAN stack, React, Node.js, and modern web technologies.',
  keywords: 'Full Stack Developer, MEAN Stack, React, Node.js, MongoDB, Express.js, Angular, Java, Adobe AEM, PostgreSQL',
  author: 'Jomin Jose',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-dark-300 text-gray-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}
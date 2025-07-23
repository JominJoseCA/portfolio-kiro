import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jomin Jose - Full Stack Web Developer',
  description: 'Portfolio of Jomin Jose - Highly skilled Web Developer with 5+ years of experience in MEAN stack, certified in Adobe Experience Manager (AEM) and Adobe Campaign.',
  keywords: 'Full Stack Developer, MEAN Stack, MongoDB, Express.js, Angular, Node.js, Java, Python, JavaScript, ReactJS, Flutter, Adobe AEM, Adobe Campaign, TCS, Infospica',
  author: 'Jomin Jose',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-dark-300 text-gray-900 dark:text-white transition-colors duration-300`}>
        {children}
        <Script 
          src="https://platform.linkedin.com/badges/js/profile.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
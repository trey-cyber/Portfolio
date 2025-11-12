import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MatrixBackground from '@/components/MatrixBackground'

export const metadata: Metadata = {
  title: 'K0rh4cks | Junior Penetration Tester',
  description: 'Cybersecurity professional specializing in penetration testing, bug bounty hunting, and security research',
  keywords: ['pentester', 'cybersecurity', 'bug bounty', 'penetration testing', 'infosec'],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        <MatrixBackground />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


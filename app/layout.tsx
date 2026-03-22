import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Mahmud College Ijede - Excellence in Education, Character in Action',
  description: 'Mahmud College Ijede is a prestigious Islamic school in Ijede, Ikorodu, Lagos State, Nigeria, dedicated to providing quality education with Islamic values.',
  keywords: ['Mahmud College', 'Ijede', 'Islamic School', 'Education', 'Lagos', 'Nigeria'],
  icons: {
    icon: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

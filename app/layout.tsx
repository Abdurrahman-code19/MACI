import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = 'https://mahmudcollege.edu.ng'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#732D86',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Mahmud Ahmadiyya College Ijede Ikorodu Lagos | Excellence in Education, Character in Action',
    template: '%s | Mahmud Ahmadiyya College',
  },
  description:
    'Mahmud Ahmadiyya College is a prestigious Islamic co-educational school in Ijede, Ikorodu, Lagos State, Nigeria (Est. 1994). Quality modern education blended with Islamic values. Enroll for 2026/2027 session.',
  keywords: [
    'Mahmud College',
    'Mahmud Ahmadiyya College',
    'Mahmud Ahmadiyya College Ijede',
    'Islamic school Lagos',
    'Ijede Ikorodu school',
    'private school Ikorodu',
    'WAEC NECO school Lagos',
    'Tahfiz Quran school Nigeria',
    'school admission Lagos 2026',
  ],
  authors: [{ name: 'Mahmud Ahmadiyya College' }],
  creator: 'Mahmud Ahmadiyya College',
  publisher: 'Mahmud Ahmadiyya College',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Mahmud Ahmadiyya College Ijede',
    title: 'Mahmud Ahmadiyya College Ijede, Ikorodu, Lagos',
    description:
      'Islamic co-educational college in Ijede, Ikorodu, Lagos (Est. 1994). Excellence in education, character in action. Enroll for 2026/2027 session.',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahmud Ahmadiyya College Ijede, Ikorodu, Lagos',
    description:
      'Islamic co-educational college in Ijede, Ikorodu, Lagos (Est. 1994). Excellence in education, character in action.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.jpg', type: 'image/jpeg' },
    ],
  },
}

const schoolJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Mahmud Ahmadiyya College',
  alternateName: 'Mahmud College',
  description:
    'Mahmud Ahmadiyya College is a prestigious Islamic co-educational secondary school in Ijede, Ikorodu, Lagos State, Nigeria. Established May 1994, offering quality modern education blended with Islamic values.',
  url: SITE_URL,
  telephone: ['+2348027490454', '+2348029015034', '+2348023838360', '+2348034246459'],
  email: ['mahmudcollegeijede@yahoo.com', 'mahmudcollegeijede@gmail.com'],
  foundingDate: '1994-05',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Abule Eko, Ijede',
    addressLocality: 'Ikorodu',
    addressRegion: 'Lagos State',
    addressCountry: 'NG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.626639,
    longitude: 3.538618,
  },
  knowsAbout: ['Quranic Memorization', 'Islamic Studies', 'WAEC', 'NECO', 'JAMB', 'Secondary Education'],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Ahmadiyya Muslim Community Nigeria',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
        />
      </body>
    </html>
  )
}

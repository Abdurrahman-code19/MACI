import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import WelcomeSection from '@/components/home/WelcomeSection'
import Features from '@/components/home/Features'
import AcademicPrograms from '@/components/home/AcademicPrograms'
import Announcements from '@/components/home/Announcements'
import Testimonials from '@/components/home/Testimonials'
import Partners from '@/components/home/Partners'
import Newsletter from '@/components/home/Newsletter'

export const metadata: Metadata = {
  title: 'Mahmud Ahmadiyya College Ijede, Ikorodu, Lagos | Excellence in Education, Character in Action',
  description:
    'Mahmud Ahmadiyya College is a prestigious Islamic co-educational school in Ijede, Ikorodu, Lagos State, Nigeria (Est. 1994). Quality modern education blended with Islamic values. Enroll for 2026/2027 session.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Mahmud Ahmadiyya College Ijede, Ikorodu, Lagos',
    description:
      'Islamic co-educational college in Ijede, Ikorodu, Lagos (Est. 1994). Excellence in education, character in action.',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <Features />
      <AcademicPrograms />
      <Announcements />
      <Testimonials />
      <Partners />
      <Newsletter />
    </>
  )
}

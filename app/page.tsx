import Hero from '@/components/home/Hero'
import WelcomeSection from '@/components/home/WelcomeSection'
import Features from '@/components/home/Features'
import AcademicPrograms from '@/components/home/AcademicPrograms'
import Announcements from '@/components/home/Announcements'
import Testimonials from '@/components/home/Testimonials'
import Partners from '@/components/home/Partners'
import Newsletter from '@/components/home/Newsletter'

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

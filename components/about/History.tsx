'use client'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Link from 'next/link'

const timeline = [
  { year: '1994', event: 'Foundation Established' },
  { year: '1999', event: 'First WAEC Success' },
  { year: '2005', event: 'Campus Expansion' },
  { year: '2015', event: 'Silver Jubilee Celebration' },
  { year: '2022', event: 'Smart Classroom Initiative' },
  { year: '2026', event: 'Digital Transformation' },
]

export default function History() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              📜 Our Story & Legacy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-textDark mb-6">
              A Legacy of <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in May 1994 by Alhaji Mahmud Adebayo, a visionary educator and Islamic scholar, Mahmud College Ijede began with just 25 students and 5 teachers in a modest facility.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Over the past 30+ years, we have grown into one of Ikorodu&apos;s most respected Islamic schools, with over 500 students and 50+ dedicated staff members.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our journey has been marked by continuous improvement, academic excellence, and unwavering commitment to Islamic values that shape the leaders of tomorrow.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              📖 Read Full History
              <span>→</span>
            </Link>
          </div>

          <div className={`order-1 lg:order-2 relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/MACI/Front-View-1.jpg"
                alt="Mahmud College Ijede"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-xl shadow-xl">
              <span className="font-bold text-3xl">1994</span>
              <p className="text-secondary text-sm">Established</p>
            </div>
          </div>
        </div>

        <div className={`mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h3 className="text-xl font-bold text-textDark mb-8 text-center">Our Journey Through The Years</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-primary/5 px-4 py-3 rounded-full">
                <span className="font-bold text-primary">{item.year}</span>
                <span className="text-gray-600 text-sm">{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

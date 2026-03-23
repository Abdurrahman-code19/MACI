'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useCounter } from '@/hooks/useCounter'
import { Users, BookOpen, Award, Calendar } from 'lucide-react'

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'Students Enrolled' },
  { icon: BookOpen, value: 50, suffix: '+', label: 'Certified Teachers' },
  { icon: Award, value: 20, suffix: '+', label: 'Academic Awards' },
  { icon: Calendar, value: 15, suffix: '+', label: 'Years of Excellence' },
]

function StatCard({ icon: Icon, value, suffix, label, start }: typeof stats[0] & { start: boolean }) {
  const count = useCounter(value, 2000, start)
  
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
        {count}{suffix}
      </div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  )
}

export default function WelcomeSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              📖 Welcome to Our School
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-textDark mb-6">
              Welcome to <span className="text-primary">Mahmud Ahmadiyya College</span>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Since our establishment in May 1994, Mahmud Ahmadiyya College has been committed to providing holistic education that blends Islamic teachings with modern academics.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our mission is to raise God-fearing, intellectually sound, and morally upright leaders who will serve their communities and the nation at large.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We pride ourselves on our excellent WAEC/NECO results, our comprehensive Quran memorization program, and our state-of-the-art facilities that provide the best learning environment for our students.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              🎯 Read Our Story
              <span>→</span>
            </Link>
          </div>

          <div ref={ref} className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <StatCard {...stat} start={isVisible} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

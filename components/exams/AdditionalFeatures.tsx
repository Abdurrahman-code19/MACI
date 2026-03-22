'use client'
import { Calendar, FileText, BookOpen } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const resources = [
  {
    icon: Calendar,
    title: 'Exam Timetable',
    description: 'View the official examination schedule for all classes and terms.',
  },
  {
    icon: FileText,
    title: 'Past Questions',
    description: 'Access previous examination questions for practice and preparation.',
  },
  {
    icon: BookOpen,
    title: 'Academic Calendar',
    description: 'Stay updated with important dates, holidays, and academic events.',
  },
]

export default function AdditionalFeatures() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Additional Resources</h2>
          <p className="section-subtitle">
            Everything you need to stay informed and prepared
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`card hover:border-primary transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <resource.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-textDark mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm">{resource.description}</p>
              <button className="mt-4 text-primary font-medium hover:text-secondary transition-colors duration-200">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Target, Eye, Lightbulb } from 'lucide-react'

export default function MissionVision() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  const items = [
    {
      icon: Target,
      title: 'Our Mission',
      text: 'To provide holistic, world-class education that integrates Islamic values with modern academics, producing well-rounded leaders who excel in this life and the hereafter.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      text: 'To be a world-class Islamic institution that produces morally upright, intellectually sound, and globally competitive leaders who will positively impact their communities.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Lightbulb,
      title: 'Our Philosophy',
      text: 'We believe that true education encompasses spiritual, intellectual, physical, and social development. Our approach combines Islamic teachings with modern pedagogy.',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-textDark mb-4">
            Our Mission, Vision & <span className="text-primary">Philosophy</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-textDark mb-4 text-center">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

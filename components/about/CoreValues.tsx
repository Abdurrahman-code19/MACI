'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { BookOpen, Scale, Handshake, Star, Heart, Sparkles } from 'lucide-react'

const values = [
  { icon: BookOpen, title: 'Integrity', description: 'We uphold honesty and moral principles in all our dealings' },
  { icon: Scale, title: 'Excellence', description: 'We strive for the highest standards in education and conduct' },
  { icon: Handshake, title: 'Respect', description: 'We treat everyone with dignity and consideration' },
  { icon: Star, title: 'Discipline', description: 'We instill self-control and dedication in our students' },
  { icon: Heart, title: 'Faith', description: 'We are grounded in Islamic teachings and strive to embody prophetic character' },
  { icon: Sparkles, title: 'Innovation', description: 'We embrace creativity and adapt to changing times while maintaining our core values' },
]

export default function CoreValues() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            ⚖️ Our Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-textDark mb-4">
            The Principles That Guide <span className="text-primary">Everything We Do</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-background rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-lg hover:bg-primary/5 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-textDark mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

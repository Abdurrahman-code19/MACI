'use client'
import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Alhaji Adebayo',
    role: 'Parent of JSS 2 Student',
    text: 'Mahmud College has transformed my son academically and spiritually. The blend of Islamic values and modern education is exceptional.',
    rating: 5,
  },
  {
    name: 'Mrs. Ogunleye',
    role: 'Parent of SSS 1 Student',
    text: 'The teachers are dedicated and the facilities are top-notch. My daughter\'s performance has improved tremendously since joining.',
    rating: 5,
  },
  {
    name: 'Ibrahim',
    role: 'SSS 3 Student',
    text: 'I love the Quranic memorization program. The school truly cares about building character alongside academics.',
    rating: 5,
  },
  {
    name: 'Hajiya Fatima',
    role: 'Parent of Primary 5 Student',
    text: 'The Islamic environment and moral upbringing at Mahmud College gives me peace of mind. My children are in safe hands.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            💬 Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What Parents & Students Say
          </h2>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-secondary/30" />

            <div className="text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-secondary fill-secondary" />
                ))}
              </div>

              <p className="text-white/90 text-lg sm:text-xl mb-8 leading-relaxed italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="border-t border-white/20 pt-6">
                <p className="text-white font-bold text-lg">{testimonials[current].name}</p>
                <p className="text-secondary text-sm">{testimonials[current].role}</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === current ? 'bg-secondary w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

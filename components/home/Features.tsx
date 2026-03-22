'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { GraduationCap, Heart, Computer, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: GraduationCap,
    title: 'Quality Education',
    description: 'Comprehensive curriculum designed to challenge and inspire students to achieve academic excellence.',
    items: ['WAEC/NECO Excellence', 'STEM-focused Curriculum', 'Cambridge Associate', 'Experienced Teachers', 'Small Class Sizes'],
    link: '/about',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Heart,
    title: 'Islamic Values',
    description: 'Strong foundation in Islamic teachings and moral values that shape character and integrity.',
    items: ['Daily Quran Classes', 'Islamic Ethics', 'Arabic Language', 'Islamic Scholars', 'Character Building'],
    link: '/about',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Computer,
    title: 'Modern Facilities',
    description: 'State-of-the-art laboratories, library, and technology-enhanced learning environment.',
    items: ['Smart Classrooms', 'Computer Lab', 'Science Laboratory', 'Sports Complex', '24/7 Security'],
    link: '/about',
    color: 'from-purple-500 to-purple-600',
  },
]

export default function Features() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block bg-secondary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textDark mb-4">
            What Makes Us <span className="text-primary">Special</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes Mahmud College Ijede the ideal choice for your child&apos;s education
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-textDark mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
              
              <ul className="space-y-2 mb-6">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link
                href={feature.link}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 text-sm"
              >
                Learn More
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Baby, Book, Users, GraduationCap } from 'lucide-react'
import Link from 'next/link'

const programs = [
  {
    icon: Baby,
    title: 'Pre-School',
    age: 'Age 3-5',
    items: ['Early Years Curriculum', 'Islamic Foundation', 'Play-Based Learning', 'Social Skills'],
    color: 'bg-pink-500',
  },
  {
    icon: Book,
    title: 'Primary School',
    age: 'Age 6-11',
    items: ['Foundation Programme', 'Basic Science', 'Quranic Memorization', 'Moral Education'],
    color: 'bg-blue-500',
  },
  {
    icon: Users,
    title: 'Junior Secondary',
    age: 'JSS 1-3',
    items: ['Core Subjects', 'Islamic Studies', 'Computer Science', 'Basic Technology'],
    color: 'bg-green-500',
  },
  {
    icon: GraduationCap,
    title: 'Senior Secondary',
    age: 'SSS 1-3',
    items: ['WAEC/NECO Prep', 'JAMB Preparation', 'Science & Arts', 'Career Counseling'],
    color: 'bg-purple-500',
  },
]

export default function AcademicPrograms() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            📚 Our Academic Programs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textDark mb-4">
            Shaping Futures, <span className="text-primary">Building Legacies</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From pre-school to senior secondary, we provide comprehensive education at every level
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-textDark mb-1">{program.title}</h3>
              <span className="text-sm text-gray-500 mb-4 block">{program.age}</span>
              
              <ul className="space-y-2">
                {program.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

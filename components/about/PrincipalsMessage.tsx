'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { User } from 'lucide-react'

export default function PrincipalsMessage() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="w-72 h-72 sm:w-96 sm:h-96 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl bg-primary/10 flex items-center justify-center">
              <User className="w-32 h-32 text-primary/30" />
            </div>
            <div className="mt-6 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 bg-white p-6 rounded-xl shadow-xl">
              <h4 className="font-bold text-textDark text-lg">Alhaji AbdulRahman Balogun</h4>
              <p className="text-primary text-sm">B.Sc, M.Ed, PGDE</p>
              <p className="text-gray-500 text-sm mt-2">Principal</p>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              👨‍🏫 Message from Our Principal
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-textDark mb-6">
              A Warm <span className="text-primary">Welcome</span>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed italic border-l-4 border-secondary pl-4">
              &ldquo;Assalamu Alaikum Warahmatullahi Wabarakatuh.&rdquo;
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Welcome to Mahmud College Ijede, where we nurture the next generation of Muslim leaders. Our commitment is to provide an environment where every child can thrive academically, spiritually, and socially.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Mahmud College, we believe education goes beyond textbooks. We focus on character development, Islamic values, and academic excellence. Together with our dedicated staff, supportive parents, and motivated students, we continue to build a legacy of excellence.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our vision is to produce morally upright, intellectually sound, and globally competitive leaders who will positively impact their communities and the world at large.
            </p>
            <div className="bg-primary/5 p-6 rounded-xl">
              <p className="text-gray-600 italic">Jazakumullahu Khayran for your interest in Mahmud College Ijede.</p>
              <p className="font-bold text-textDark mt-4">— Alhaji AbdulRahman Balogun</p>
              <p className="text-primary text-sm">Principal, Mahmud College Ijede</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

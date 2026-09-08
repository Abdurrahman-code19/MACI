'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/MACI/img22.jpeg"
          alt="Mahmud Ahmadiyya College Ijede, Ikorodu, Lagos school building"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 animate-fade-up">
          <span className="inline-block bg-secondary/20 text-secondary px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-secondary/30">
            Est. May 1994 • Ijede, Ikorodu, Lagos
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Excellence in Education,
          <br />
          <span className="text-secondary">Character in Action</span>
        </h1>

        <div
          className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        />

        <p
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          Nurturing Tomorrow&apos;s Leaders Through Islamic Values and Modern Education
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          <Link
            href="/exams"
            className="group bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-secondary/30 flex items-center justify-center gap-2"
          >
            <span aria-hidden="true">📝</span> Enroll Now
          </Link>
          <Link
            href="/about"
            className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span aria-hidden="true">📖</span> Learn More
          </Link>
        </div>

        <div
          className="flex flex-wrap justify-center gap-8 md:gap-12 animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          {[
            { icon: '🎓', number: '500+', label: 'Students' },
            { icon: '👨‍🏫', number: '50+', label: 'Staff' },
            { icon: '🏆', number: '100%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <span className="text-2xl" aria-hidden="true">{stat.icon}</span>
              <div className="text-left">
                <span className="text-white font-bold text-lg">{stat.number}</span>
                <span className="text-white/80 text-sm ml-1">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-1 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

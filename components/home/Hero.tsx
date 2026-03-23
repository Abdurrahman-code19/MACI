'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/MACI/img22.jpeg"
          alt="Mahmud Ahmadiyya College"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block bg-secondary/20 text-secondary px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-secondary/30">
            Est. May 1994 • Ijede, Ikorodu, Lagos
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Excellence in Education,
          <br />
          <span className="text-secondary">Character in Action</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Nurturing Tomorrow&apos;s Leaders Through Islamic Values and Modern Education
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link 
            href="/exams" 
            className="group bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-secondary/30 flex items-center justify-center gap-2"
          >
            <span>📝</span> Enroll Now
          </Link>
          <Link 
            href="/about" 
            className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>📖</span> Learn More
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {[
            { icon: '🎓', number: '500+', label: 'Students' },
            { icon: '👨‍🏫', number: '50+', label: 'Staff' },
            { icon: '🏆', number: '100%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <span className="text-2xl">{stat.icon}</span>
              <div className="text-left">
                <span className="text-white font-bold text-lg">{stat.number}</span>
                <span className="text-white/80 text-sm ml-1">{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-1 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

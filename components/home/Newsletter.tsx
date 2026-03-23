'use client'
import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary via-primary/90 to-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
      </div>

      <div ref={ref} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <Mail className="w-16 h-16 text-secondary mx-auto mb-6" />
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Stay Updated with Mahmud Ahmadiyya College
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter for latest news, events, and announcements
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-full text-textDark focus:outline-none focus:ring-4 focus:ring-secondary/50"
            required
          />
          <button
            type="submit"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2"
          >
            {subscribed ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Subscribed!
              </>
            ) : (
              <>
                Subscribe
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        <p className="text-white/60 text-sm mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}

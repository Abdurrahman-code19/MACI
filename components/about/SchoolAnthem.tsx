'use client'
import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Music, Play, Download } from 'lucide-react'

export default function SchoolAnthem() {
  const [showFull, setShowFull] = useState(false)
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-4 border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Music className="w-5 h-5 text-secondary" />
            <span className="text-white font-medium">Mahmud Ahmadiyya College Anthem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10">
            🎵 Our School Anthem
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-secondary font-bold text-xl mb-3">Verse 1:</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Mahmud Ahmadiyya College, our beloved school,<br />
                  Where knowledge meets faith, we live by the rule,<br />
                  Guiding us with wisdom, teaching us what&apos;s true,<br />
                  Mahmud Ahmadiyya College, we are proud of you!
                </p>
              </div>

              <div className="border-t border-white/20 pt-8">
                <h3 className="text-secondary font-bold text-xl mb-3">Chorus:</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Excellence in education, character in action,<br />
                  Building future leaders, with faith as our foundation.<br />
                  Mahmud Ahmadiyya College, forever we will stand,<br />
                  United in purpose, guided by His hand.
                </p>
              </div>

              {showFull && (
                <>
                  <div className="border-t border-white/20 pt-8">
                    <h3 className="text-secondary font-bold text-xl mb-3">Verse 2:</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      With Islamic values, strong and bright,<br />
                      We strive for excellence, morning to night,<br />
                      Integrity and respect, in all we do,<br />
                      Mahmud Ahmadiyya College, we honor you!
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="flex items-center justify-center gap-2 bg-secondary text-primary px-6 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300">
              <Play className="w-5 h-5" />
              Play Anthem
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-colors duration-300">
              <Download className="w-5 h-5" />
              Download Lyrics
            </button>
          </div>

          <button
            onClick={() => setShowFull(!showFull)}
            className="mt-6 text-white/80 hover:text-secondary transition-colors duration-200"
          >
            {showFull ? 'Show Less ↑' : 'Show Full Anthem ↓'}
          </button>
        </div>
      </div>
    </section>
  )
}

import History from '@/components/about/History'
import MissionVision from '@/components/about/MissionVision'
import CoreValues from '@/components/about/CoreValues'
import PrincipalsMessage from '@/components/about/PrincipalsMessage'
import SchoolAnthem from '@/components/about/SchoolAnthem'

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border-4 border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-white rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🕌 About Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            About Mahmud Ahmadiyya College
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Building Leaders Through Knowledge, Faith & Character
          </p>
        </div>
      </section>
      <History />
      <MissionVision />
      <CoreValues />
      <PrincipalsMessage />
      <SchoolAnthem />
    </>
  )
}

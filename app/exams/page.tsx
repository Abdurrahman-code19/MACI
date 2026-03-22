import MainButtons from '@/components/exams/MainButtons'
import AdditionalFeatures from '@/components/exams/AdditionalFeatures'
import FAQ from '@/components/exams/FAQ'
import { ClipboardList } from 'lucide-react'

export default function ExamsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
            <ClipboardList className="w-5 h-5 text-secondary" />
            <span className="text-white font-medium">Student Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Exams & Records
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Access Results and Staff Portal
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainButtons />
        </div>
      </section>

      <AdditionalFeatures />
      <FAQ />
    </>
  )
}

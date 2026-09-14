'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { User, Quote, BookOpen } from 'lucide-react'

export default function PrincipalsMessage() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full border-4 border-primary" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full border-4 border-secondary" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 border border-primary rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium mb-5 animate-fade-up">
            ✨ Welcome Address — 2026/2027 Session
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textDark animate-fade-up" style={{ animationDelay: '100ms' }}>
            A Message from Our <span className="text-primary">Principal</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            Assalaamu alaykum warahmatullahi wabarakaatuhu.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl shadow-primary/5 border border-gray-100 p-6 sm:p-10 lg:p-14 relative">
            <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />

            <div className="space-y-5 text-gray-600 leading-relaxed relative">
              <p>
                It gives me great pleasure to warmly welcome you to the official website of <strong className="text-textDark">Mahmud Ahmadiyya Primary, College and Tahfizul Quran Schools</strong>, Abule-Eko, Ijede, Lagos State and also a new session.
              </p>
              <p>
                At Mahmud Ahmadiyya Primary, College and Tahfizul Quran Schools, we believe that education is not merely about acquiring certificates or preparing children for successful careers. True education should develop the mind, character, faith and sense of responsibility of every child. Our guiding motto, &ldquo;Seeking Knowledge To Serve Allah,&rdquo; captures this philosophy and remains central to everything we do.
              </p>
              <p>
                Our schools are committed to providing a balanced education that combines quality Western education with sound Islamic upbringing, moral discipline and practical life skills. We strive to create an environment where every learner is encouraged to discover their abilities, develop confidence, think critically, demonstrate good character and become useful to their family, community and society.
              </p>
              <p>
                We recognise that every child is unique. Consequently, our dedicated and hardworking teachers endeavour to identify and nurture the individual strengths and talents of our learners while providing the academic guidance and spiritual care they need to thrive. We also place strong emphasis on discipline, respect, honesty, compassion, responsibility and service to others.
              </p>
              <p>
                As citadels of learning, we understand that the education of a child is a shared responsibility between the school, parents and the wider community. We therefore value our partnership with parents and guardians and encourage open communication and constructive collaboration. Together, we can provide our children with the support and direction necessary to become responsible, God-fearing and productive members of society.
              </p>
              <p>
                Through our academic programmes, Islamic studies, extracurricular activities, practical learning experiences and character-building initiatives, we continue to prepare our learners not only for examinations, but also for the realities and responsibilities of life.
              </p>
              <p>
                I invite you to explore our website and discover more about our school, our educational programmes, our facilities, our activities and the values that guide us. We hope that your visit will give you a clear picture of our commitment to academic excellence, Islamic values and holistic child development.
              </p>
              <p>
                To our existing parents, guardians, students and members of staff, I thank you for your continued trust, dedication and support. To prospective parents and learners, we warmly welcome you to the Mahmud Ahmadiyya Schools family.
              </p>
              <p>
                May Almighty Allah continue to guide our efforts, bless our students with beneficial knowledge and wisdom, strengthen our teachers and staff, and grant parents and guardians the means and wisdom to support the education of their children.
              </p>
              <p>
                May Allah bless Mahmud Ahmadiyya Schools and make it a lasting source of beneficial knowledge and righteous service to humanity.
              </p>
              <p className="italic">Jazaakumullaahu khayran.</p>
            </div>

            <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary italic">&ldquo;Seeking Knowledge To Serve Allah.&rdquo;</p>
                  <p className="text-white/80 mt-1">Welcome to Mahmud Ahmadiyya Schools.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-secondary shadow-lg bg-primary/10 flex items-center justify-center shrink-0">
                <User className="w-12 h-12 text-primary/40" />
              </div>
              <div className="text-center sm:text-left">
                <p className="font-bold text-xl text-textDark">Hajia Taofeeqah Aderoju Fagbolade</p>
                <p className="text-primary font-medium">Principal</p>
                <p className="text-gray-500 text-sm mt-1">Mahmud Ahmadiyya Primary, College and Tahfizul Quran Schools</p>
                <p className="text-gray-500 text-sm">Abule-Eko, Ijede, Lagos State</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

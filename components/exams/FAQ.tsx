'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const faqs = [
  {
    question: 'How do I check my result?',
    answer: 'To check your result, click on the "Check Result" button above and enter your 10-digit examination number. Select the appropriate term and session, then click submit to view your results.',
  },
  {
    question: 'What if I forgot my examination number?',
    answer: 'If you have forgotten your examination number, please visit the school office with your student ID or contact your class teacher. They will assist you in retrieving your examination number.',
  },
  {
    question: 'How can I get my result PIN?',
    answer: 'Result PINs can be obtained from the school accounting office. Each PIN is valid for one result check. Please ensure you have your student ID ready when visiting the office.',
  },
  {
    question: 'Can I print my result?',
    answer: 'Yes, once you have checked your result, you can print a copy for your records. Make sure your browser allows pop-ups for the print function to work properly.',
  },
  {
    question: 'When are results released?',
    answer: 'Results are typically released within 2 weeks after examinations end. Check the announcements section on our homepage or contact the school for specific release dates.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about exams and records
          </p>
        </div>

        <div ref={ref} className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left min-h-[60px]"
              >
                <span className="font-semibold text-textDark pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

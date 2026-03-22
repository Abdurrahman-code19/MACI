'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const partners = [
  { name: 'WAEC', description: 'Approved Centre' },
  { name: 'NECO', description: 'Approved Centre' },
  { name: 'JAMB', description: 'Examination Centre' },
  { name: 'NASFAT', description: 'Partner' },
  { name: 'Cambridge', description: 'Associate' },
  { name: 'Microsoft', description: 'IT Academy' },
  { name: 'UNICEF', description: 'Partner' },
  { name: 'NITDA', description: 'Certified' },
]

export default function Partners() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            🤝 Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textDark mb-4">
            Partners & Affiliations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to be associated with leading educational organizations
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-background rounded-xl p-4 text-center hover:bg-primary/5 hover:shadow-lg transition-all duration-300 group ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-primary transition-colors duration-300">
                <span className="text-xl font-bold text-primary group-hover:text-white transition-colors duration-300">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h4 className="font-bold text-textDark text-sm">{partner.name}</h4>
              <p className="text-gray-500 text-xs">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Calendar } from 'lucide-react'

const announcements = [
  {
    title: 'ADMISSION 2026/2027 NOW OPEN!',
    date: 'Ongoing',
    description: 'Applications are ongoing for all classes. Limited slots available. Apply before May 30th, 2026.',
    type: 'urgent',
  },
  {
    title: 'Ramadan Lecture Series',
    date: 'Every Friday',
    description: 'Join us every Friday for special Islamic lectures and Iftar during the blessed month.',
    type: 'info',
  },
]

const events = [
  { date: 'April 5, 2026', title: 'PTA Meeting', time: '10:00 AM' },
  { date: 'April 10-15, 2026', title: 'Mid-Term Break', time: '' },
  { date: 'April 25, 2026', title: 'Inter-House Sports Day', time: '' },
  { date: 'May 15, 2026', title: 'Islamic Quiz Competition', time: '' },
  { date: 'June 3, 2026', title: 'Graduation Ceremony', time: '' },
]

export default function Announcements() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'border-l-red-500 bg-red-50'
      case 'success':
        return 'border-l-green-500 bg-green-50'
      default:
        return 'border-l-primary bg-primary/5'
    }
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📢</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-textDark">Latest News & Announcements</h2>
            </div>

            <div ref={ref} className="space-y-4">
              {announcements.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 border-l-4 ${getTypeStyles(item.type)} transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <span className="text-sm text-gray-500 font-medium">{item.date}</span>
                  <h3 className="text-lg font-bold text-textDark mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📅</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-textDark">Upcoming Events</h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors duration-200 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex flex-col items-center justify-center text-white flex-shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-primary font-medium">{event.date}</p>
                    <h4 className="font-bold text-textDark">{event.title}</h4>
                    {event.time && <p className="text-sm text-gray-500">{event.time}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Calendar, Banknote, Clock, BookOpen, Monitor, FlaskConical, School, Sprout } from 'lucide-react'

const announcements = [
  {
    title: 'ADMISSION INTO JSS1-2 & SS1-2 IS IN PROGRESS FOR 2026/2027 ACADEMIC SESSION',
    date: 'ENROL NOW!',
    description: 'Limited slots available for JSS1-2 and SS1-2. Secure your child\'s future with quality Islamic education.',
    type: 'urgent',
  },
  {
    title: 'EXAMINATION DATES',
    date: 'Saturdays at 9:00AM',
    description: '📅 May 16th, 2026 | June 13th, 2026 | July 18th, 2026 | August 15th, 2026',
    type: 'info',
  },
  {
    title: 'MODE OF PAYMENT',
    date: 'Application Form - N5,000 only',
    description: 'Account Name: Mahmud Ahmadiyya College | Account No: 0015412051 | Bank: GTBANK PLC',
    type: 'payment',
  },
]

const schoolFeatures = [
  { icon: BookOpen, text: 'Quality education that makes a child stand the test of time' },
  { icon: Monitor, text: 'Globalized knowledge on information technology via computer & internet facilities' },
  { icon: School, text: 'Qualified & experienced teachers' },
  { icon: FlaskConical, text: 'Well-equipped science laboratories' },
  { icon: Sprout, text: 'Practical agriculture in livestock & crops that feed the hostels' },
  { icon: School, text: 'Neat & conducive learning environment' },
]

const events = [
  { date: 'May 16, 2026', title: 'Admission Examination', time: '9:00 AM' },
  { date: 'June 13, 2026', title: 'Admission Examination', time: '9:00 AM' },
  { date: 'July 18, 2026', title: 'Admission Examination', time: '9:00 AM' },
  { date: 'August 15, 2026', title: 'Admission Examination', time: '9:00 AM' },
  { date: 'Ongoing', title: 'Admission for JSS1-2 & SS1-2', time: '2026/2027 Session' },
]

export default function Announcements() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'border-l-red-500 bg-red-50'
      case 'payment':
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

            {/* School Features Section */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <School className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-textDark">Our Standard</h3>
              </div>
              <div className="space-y-3">
                {schoolFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <feature.icon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">📅</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-textDark">Upcoming Events & Exams</h2>
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
                    {event.title.includes('Examination') ? <Clock className="w-6 h-6" /> : <Calendar className="w-6 h-6" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-primary font-medium">{event.date}</p>
                    <h4 className="font-bold text-textDark">{event.title}</h4>
                    {event.time && <p className="text-sm text-gray-500">{event.time}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-8 bg-primary/5 rounded-xl p-6">
              <h3 className="text-lg font-bold text-textDark mb-3">Contact Us</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📍 Abule Eko, Ijede, Ikorodu, Lagos State</p>
                <p>📞 0802 7490 454, 0802 9015 034, 0802 3838 360, 0803 4246 459</p>
                <p>✉️ mahmudcollegeijede@yahoo.com | mahmudcollegeijede@gmail.com</p>
                <p>🌐 https://mahmudcollegeijede.vercel.app/</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
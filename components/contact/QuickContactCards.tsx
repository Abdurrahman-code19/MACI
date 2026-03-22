'use client'
import { Phone, MessageCircle, Mail, Share2 } from 'lucide-react'

const quickContacts = [
  { icon: Phone, title: 'Call Us', subtitle: '+234 XXX XXX XXXX', color: 'bg-blue-500' },
  { icon: MessageCircle, title: 'WhatsApp', subtitle: 'Chat with us', color: 'bg-green-500' },
  { icon: Mail, title: 'Email Us', subtitle: 'info@mahmudcollege.sch.ng', color: 'bg-red-500' },
  { icon: Share2, title: 'Social Media', subtitle: 'Follow us', color: 'bg-purple-500' },
]

export default function QuickContactCards() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {quickContacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer min-h-[140px] flex flex-col items-center justify-center"
            >
              <div className={`w-14 h-14 ${contact.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <contact.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-textDark mb-1">{contact.title}</h4>
              <p className="text-gray-600 text-sm">{contact.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

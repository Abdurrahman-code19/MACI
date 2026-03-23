'use client'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-primary mb-4">Contact Information</h3>
        <p className="text-gray-600 mb-6">
          Feel free to reach out to us through any of the following channels. We are always here to assist you.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-textDark">Address</h4>
            <p className="text-gray-600">Mahmud Ahmadiyya College, Ijede, Ikorodu, Lagos State, Nigeria</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-textDark">Phone</h4>
            <p className="text-gray-600">+234 XXX XXX XXXX</p>
            <p className="text-gray-600">+234 XXX XXX XXXX</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-textDark">Email</h4>
            <p className="text-gray-600">info@mahmudcollege.sch.ng</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-textDark">Office Hours</h4>
            <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

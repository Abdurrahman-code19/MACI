'use client'
import { Map } from 'lucide-react'

export default function MapSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">Find Us</h2>
          <p className="section-subtitle">
            Visit our campus and experience the Mahmud College Ijede difference
          </p>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d3.5!3d6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAuMCJOIDPCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mahmud College Ijede Location"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  )
}

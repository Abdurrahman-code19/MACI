'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
  { href: '/exams', label: 'Exams & Records' },
  { href: '/exams', label: 'Admissions' },
  { href: '/exams', label: 'Results' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-textDark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="text-center lg:text-left">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-14 h-14 relative">
                <Image
                  src="/MACI/cropped-LOGO-1.jpg"
                  alt="Mahmud Ahmadiyya College Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-tight">MAHMUD AHMADIYYA</span>
                <span className="text-secondary text-sm font-medium">COLLEGE</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Where Excellence Meets Faith. Building leaders through knowledge and Islamic values since May 1994.
            </p>
            <p className="text-secondary text-sm font-medium italic">
              &ldquo;Excellence in Education, Character in Action&rdquo;
            </p>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-secondary font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors duration-200 text-sm inline-block"
                  >
                    • {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-secondary font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Abule Eko, Ijede, Ikorodu, Lagos State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-gray-400 text-sm">0802 7490 454, 0802 9015 034, 0802 3838 360, 0803 4246 459</span>
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>mahmudcollegeijede@yahoo.com</p>
                  <p>mahmudcollegeijede@gmail.com</p>
                </div>
              </li>
              <li className="flex items-center gap-3 justify-center lg:justify-start">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Mon-Fri: 8am - 4pm</p>
                  <p>Sat: 9am - 1pm</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-secondary font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3 justify-center lg:justify-start mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-500 transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Channel
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RIIT Global Tech. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

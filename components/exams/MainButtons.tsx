'use client'
import { User, BarChart3 } from 'lucide-react'

export default function MainButtons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <a
        href="http://schcube.com/check-result.php"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white rounded-xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group min-h-[200px] flex flex-col items-center justify-center text-center"
      >
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <User className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Staff Login</h3>
        <p className="text-white/80 text-sm mb-4">Secure access for staff only</p>
        <span className="inline-block bg-white text-primary px-6 py-2 rounded-full font-semibold group-hover:bg-secondary transition-colors duration-300">
          Login
        </span>
      </a>

      <a
        href="http://schcube.com/check-result.php"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-textDark rounded-xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary group min-h-[200px] flex flex-col items-center justify-center text-center"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <BarChart3 className="w-10 h-10 text-primary group-hover:text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-primary">Check Result</h3>
        <p className="text-gray-600 text-sm mb-4">Enter your exam number to view results</p>
        <span className="inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">
          Check Now
        </span>
      </a>
    </div>
  )
}

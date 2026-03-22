'use client'
import { useState } from 'react'

const categories = ['All', 'Academic', 'Sports', 'Events', 'Campus']

export default function CategoryTabs({ activeCategory, onSelect }: { activeCategory: string, onSelect: (category: string) => void }) {
  return (
    <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 min-h-[44px] ${
            activeCategory === category
              ? 'bg-primary text-white'
              : 'bg-white text-textDark hover:bg-primary/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

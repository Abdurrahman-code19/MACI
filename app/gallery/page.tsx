'use client'
import { useState, useMemo } from 'react'
import CategoryTabs from '@/components/gallery/CategoryTabs'
import GalleryGrid, { galleryImages } from '@/components/gallery/GalleryGrid'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Camera } from 'lucide-react'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [loadedCount, setLoadedCount] = useState(9)
  // FIXED: Remove the generic type and let TypeScript infer it
const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return galleryImages
    return galleryImages.filter(img => img.category === activeCategory)
  }, [activeCategory])

  const displayedImages = filteredImages.slice(0, loadedCount)
  const hasMore = loadedCount < filteredImages.length

  const handleLoadMore = () => {
    setLoadedCount(prev => prev + 6)
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
            <Camera className="w-5 h-5 text-secondary" />
            <span className="text-white font-medium">Our Memories</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Capturing Moments, Celebrating Memories
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-10">
            <CategoryTabs activeCategory={activeCategory} onSelect={setActiveCategory} />
          </div>

          <div ref={ref}>
            <GalleryGrid images={displayedImages} />
          </div>

          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={handleLoadMore}
                className="btn-primary px-8 py-4"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
'use client'
import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useIsMobile } from '@/hooks/useMediaQuery'

interface GalleryImage {
  id: number
  src: string
  category: string
  caption: string
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/MACI/Front-View-1.jpg', category: 'Campus', caption: 'School Front View' },
  { id: 2, src: '/MACI/WhatsApp-Image-2021-10-04-at-11.43.38.jpeg', category: 'Events', caption: 'School Event' },
  { id: 3, src: '/MACI/hecons10.jpg', category: 'Academic', caption: 'Students in Class' },
  { id: 4, src: '/MACI/inter17.jpg', category: 'Events', caption: 'Inter-House Sports' },
  { id: 5, src: '/MACI/quran5.jpg', category: 'Islamic', caption: 'Quran Memorization' },
  { id: 6, src: '/MACI/WhatsApp-Image-2022-04-30-at-12.00.03-PM.jpeg', category: 'Events', caption: 'Graduation Ceremony' },
  { id: 7, src: '/MACI/cul20.jpg', category: 'Cultural', caption: 'Cultural Day' },
  { id: 8, src: '/MACI/WhatsApp-Image-2022-07-14-at-9.43.26-PM.jpeg', category: 'Events', caption: 'Islamic Lecture' },
  { id: 9, src: '/MACI/WhatsApp-Image-2021-10-04-at-11.43.40.jpeg', category: 'Academic', caption: 'Science Fair' },
  { id: 10, src: '/MACI/WhatsApp-Image-2022-04-30-at-12.00.08-PM.jpeg', category: 'Events', caption: 'Award Ceremony' },
  { id: 11, src: '/MACI/WhatsApp-Image-2021-10-04-at-11.43.39.jpeg', category: 'Campus', caption: 'School Assembly' },
  { id: 12, src: '/MACI/WhatsApp-Image-2021-10-04-at-11.43.42.jpeg', category: 'Events', caption: 'PTA Meeting' },
  { id: 13, src: '/MACI/hecons5.jpg', category: 'Academic', caption: 'Computer Lab' },
  { id: 14, src: '/MACI/WhatsApp-Image-2022-04-30-at-12.00.15-PM.jpeg', category: 'Sports', caption: 'Football Match' },
  { id: 15, src: '/MACI/inter25.jpg', category: 'Events', caption: 'Cultural Performance' },
  { id: 16, src: '/MACI/WhatsApp-Image-2021-10-04-at-11.43.43.jpeg', category: 'Academic', caption: 'Examination Hall' },
  { id: 17, src: '/MACI/SIDE-VIEW.jpg', category: 'Campus', caption: 'School Side View' },
  { id: 18, src: '/MACI/WhatsApp-Image-2021-10-04-at-11.41.11.jpeg', category: 'Events', caption: 'School Bus' },
  { id: 19, src: '/MACI/quran8.jpg', category: 'Islamic', caption: 'Tahfiz Program' },
  { id: 20, src: '/MACI/WhatsApp-Image-2022-04-30-at-12.00.09-PM.jpeg', category: 'Events', caption: 'Prize Giving' },
  { id: 21, src: '/MACI/hecons8.jpg', category: 'Academic', caption: 'Library Session' },
  { id: 22, src: '/MACI/WhatsApp-Image-2021-10-04-at-11.43.41.jpeg', category: 'Campus', caption: 'Mosque View' },
  { id: 23, src: '/MACI/WhatsApp-Image-2022-07-14-at-9.43.28-PM.jpeg', category: 'Islamic', caption: 'Islamic Day' },
  { id: 24, src: '/MACI/inter19.jpg', category: 'Sports', caption: 'Athletics' },
]

interface LightboxProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const currentImage = images[currentIndex]

  const handlePrev = () => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const handleNext = () => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white hover:text-secondary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <div className="flex-1 flex items-center justify-center p-4">
        <button
          onClick={handlePrev}
          className="p-2 text-white hover:text-secondary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Previous"
        >
          <ChevronLeft size={32} />
        </button>

        <div className="relative w-full max-w-4xl aspect-video mx-4">
          <Image
            src={currentImage.src}
            alt={currentImage.caption}
            fill
            className="object-contain"
          />
        </div>

        <button
          onClick={handleNext}
          className="p-2 text-white hover:text-secondary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Next"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="text-center pb-8">
        <p className="text-white font-medium">{currentImage.caption}</p>
        <p className="text-white/60 text-sm mt-1">{currentIndex + 1} / {images.length}</p>
      </div>
    </div>
  )
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openLightbox(index)}
            className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={image.src}
              alt={image.caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-medium">{image.caption}</p>
              <span className="text-secondary text-sm">{image.category}</span>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNavigate={setCurrentIndex}
        />
      )}
    </>
  )
}

export { galleryImages }

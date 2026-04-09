'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lightbox } from '@/components/ui/Lightbox';
import { Download, BookOpen, Share2, ChevronRight } from 'lucide-react';

// Lookbook data
const lookbookCollections = [
  {
    id: 'ss24',
    title: 'Spring/Summer 2024',
    subtitle: 'The Awakening Collection',
    description: 'A celebration of renewal and growth, featuring flowing silhouettes and vibrant colors inspired by the Cross River landscape.',
    coverImage: '/images/portfolio/model/model-1.jpg',
    images: [
      '/images/portfolio/model/model-1.jpg',
      '/images/portfolio/model/model-3.jpg',
      '/images/portfolio/model/model-4.jpg',
      '/images/portfolio/model/model-7.jpg',
    ],
    stats: {
      looks: 24,
      pages: 48,
      size: '15MB',
    },
    featured: true,
  },
  {
    id: 'fw24',
    title: 'Fall/Winter 2024',
    subtitle: 'Urban Elegance',
    description: 'Sophisticated monochrome looks that transition seamlessly from day to night, embodying modern urban sophistication.',
    coverImage: '/images/portfolio/model/model-2.jpg',
    images: [
      '/images/portfolio/model/model-2.jpg',
      '/images/portfolio/model/model-5.jpg',
      '/images/portfolio/model/model-6.jpg',
    ],
    stats: {
      looks: 18,
      pages: 36,
      size: '12MB',
    },
    featured: true,
  },
  {
    id: 'editorial',
    title: 'Editorial Collection',
    subtitle: 'Behind the Lens',
    description: 'A curated selection of editorial work showcasing the versatility and artistry of Blessing Joseph designs.',
    coverImage: '/images/hero/hero-2.jpg',
    images: [
      '/images/hero/hero-2.jpg',
      '/images/hero/hero-1.jpg',
      '/images/hero/hero-3.jpg',
    ],
    stats: {
      looks: 15,
      pages: 30,
      size: '10MB',
    },
    featured: false,
  },
];

export default function LookbookPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCollection, setSelectedCollection] = useState<typeof lookbookCollections[0] | null>(null);

  const openLightbox = (collection: typeof lookbookCollections[0], imageIndex: number = 0) => {
    setSelectedCollection(collection);
    setCurrentImages(collection.images);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedCollection(null);
    setCurrentImages([]);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-secondary">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/hero/hero-1.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm font-medium uppercase tracking-wider"
            >
              Collections
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white mt-6 mb-8 leading-tight"
            >
              Lookbook
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
            >
              Browse our seasonal collections and editorial spreads. 
              Download the complete lookbooks for inspiration and reference.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Browse
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Seasonal Collections
            </h2>
          </motion.div>

          <div className="space-y-16">
            {lookbookCollections.map((collection, index) => (
              <motion.article
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Cover Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div 
                    className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(collection)}
                  >
                    <Image
                      src={collection.coverImage}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-flex items-center gap-2 text-white/80 text-sm">
                        <BookOpen size={16} />
                        {collection.stats.looks} Looks
                      </span>
                    </div>
                    {collection.featured && (
                      <div className="absolute top-6 left-6 bg-primary text-white text-xs px-3 py-1 rounded-full">
                        Featured Collection
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {collection.id === 'editorial' ? 'Special Edition' : 'Seasonal'}
                  </span>
                  <h3 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-xl text-muted mb-6">
                    {collection.subtitle}
                  </p>
                  <p className="text-muted leading-relaxed mb-8">
                    {collection.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-light rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-foreground">
                        {collection.stats.looks}
                      </div>
                      <div className="text-sm text-muted">Looks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-foreground">
                        {collection.stats.pages}
                      </div>
                      <div className="text-sm text-muted">Pages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-display font-bold text-foreground">
                        {collection.stats.size}
                      </div>
                      <div className="text-sm text-muted">Size</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => openLightbox(collection)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
                    >
                      <BookOpen size={18} />
                      View Lookbook
                    </button>
                    <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-medium rounded-full hover:bg-foreground hover:text-white transition-colors">
                      <Download size={18} />
                      Download PDF
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Gallery */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Preview
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Sneak Peek
            </h2>
            <p className="text-muted text-lg">
              A glimpse into the stunning visuals and styling from our latest collections.
            </p>
          </motion.div>

          {/* Masonry-style Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {lookbookCollections.flatMap(c => c.images).map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : 'aspect-[3/4]'
                }`}
                onClick={() => {
                  const collection = lookbookCollections.find(c => c.images.includes(image));
                  if (collection) {
                    openLightbox(collection, collection.images.indexOf(image));
                  }
                }}
              >
                <Image
                  src={image}
                  alt={`Lookbook preview ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={index % 5 === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 lg:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BookOpen className="mx-auto mb-6" size={48} />
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Get New Lookbooks First
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to access new collections, 
              behind-the-scenes content, and exclusive downloads.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={currentImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
        title={selectedCollection?.title}
        description={selectedCollection?.subtitle}
      />
    </>
  );
}

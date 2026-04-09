'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lightbox } from '@/components/ui/Lightbox';
import { Play, Camera, Star, Award } from 'lucide-react';

// Modeling portfolio data
const modelingItems = [
  {
    id: '1',
    title: 'Elegant Ivory Editorial',
    category: 'Editorial',
    client: 'Vogue Africa',
    year: 2024,
    images: [
      '/images/portfolio/model/model-1.jpg',
      '/images/portfolio/model/model-3.jpg',
      '/images/portfolio/model/model-4.jpg',
    ],
    featured: true,
  },
  {
    id: '2',
    title: 'Monochrome Chic Campaign',
    category: 'Campaign',
    client: 'Lagos Fashion Week',
    year: 2024,
    images: [
      '/images/portfolio/model/model-2.jpg',
      '/images/portfolio/model/model-5.jpg',
      '/images/portfolio/model/model-6.jpg',
    ],
    featured: true,
  },
  {
    id: '3',
    title: 'Studio Portrait Series',
    category: 'Portrait',
    client: 'Personal Project',
    year: 2024,
    images: [
      '/images/hero/hero-2.jpg',
    ],
    featured: false,
  },
  {
    id: '4',
    title: 'Contemporary Grace',
    category: 'Lookbook',
    client: 'Blessing Joseph Designs',
    year: 2024,
    images: [
      '/images/portfolio/model/model-4.jpg',
      '/images/portfolio/model/model-7.jpg',
    ],
    featured: true,
  },
];

const stats = [
  { label: 'Campaigns', value: '50+' },
  { label: 'Publications', value: '12' },
  { label: 'Runway Shows', value: '25' },
  { label: 'Brand Partners', value: '30+' },
];

export default function ModelingPortfolioPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<typeof modelingItems[0] | null>(null);

  const openLightbox = (item: typeof modelingItems[0], imageIndex: number = 0) => {
    setSelectedItem(item);
    setCurrentImages(item.images);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);
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
              backgroundImage: `url('/images/portfolio/model/model-1.jpg')`,
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
              Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white mt-6 mb-8 leading-tight"
            >
              Modeling
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
            >
              From runway shows to editorial spreads, bringing designs to life 
              with presence, poise, and passion. Every frame tells a story of 
              elegance and authenticity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Gallery
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Featured Campaigns
            </h2>
            <p className="text-muted text-lg">
              A selection of editorial work, campaign shoots, and runway moments 
              that define my modeling journey.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modelingItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer ${
                  item.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                onClick={() => openLightbox(item)}
              >
                <div className={`relative overflow-hidden rounded-xl ${
                  item.featured ? 'aspect-[16/9]' : 'aspect-[3/4]'
                }`}>
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={item.featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                      <Camera size={14} />
                      <span>{item.category}</span>
                      {item.featured && (
                        <>
                          <span>•</span>
                          <Star size={14} className="text-gold" />
                          <span>Featured</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-display font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {item.client} • {item.year}
                    </p>
                  </div>

                  {/* Image Count Badge */}
                  {item.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-white/90 text-foreground text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.images.length} photos
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Modeling Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: 'Editorial',
                description: 'High-fashion editorial shoots for magazines, lookbooks, and brand campaigns.',
              },
              {
                icon: Play,
                title: 'Runway',
                description: 'Professional runway modeling for fashion weeks, brand launches, and events.',
              },
              {
                icon: Award,
                title: 'Commercial',
                description: 'Commercial modeling for advertisements, product campaigns, and digital content.',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether you are a photographer, brand, or creative director, 
              lets create something beautiful together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
            >
              Book a Shoot
            </a>
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
        title={selectedItem?.title}
      />
    </>
  );
}

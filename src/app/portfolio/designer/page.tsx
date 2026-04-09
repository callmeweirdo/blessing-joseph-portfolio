'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchPortfolioItems, setFilter, clearFilters, PortfolioItem } from '@/store/slices/portfolioSlice';
import { Lightbox } from '@/components/ui/Lightbox';
import { Filter, X, Grid3X3, List } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { value: 'dress', label: 'Dresses' },
  { value: 'accessory', label: 'Accessories' },
  { value: 'couture', label: 'Couture' },
  { value: 'ready-to-wear', label: 'Ready-to-Wear' },
];

const seasons = [
  { value: 'spring', label: 'Spring' },
  { value: 'summer', label: 'Summer' },
  { value: 'autumn', label: 'Autumn' },
  { value: 'winter', label: 'Winter' },
];

const years = [2024, 2023, 2022, 2021];

export default function DesignerStudioPage() {
  const dispatch = useAppDispatch();
  const { items, filteredItems, filters, loading } = useAppSelector((state) => state.portfolio);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    dispatch(fetchPortfolioItems());
  }, [dispatch]);

  const openLightbox = (item: PortfolioItem, imageIndex: number = 0) => {
    setSelectedItem(item);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

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
              Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white mt-6 mb-8 leading-tight"
            >
              Designer Studio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
            >
              A curated collection of original designs, from couture masterpieces 
              to ready-to-wear essentials. Each piece tells a story of heritage, 
              innovation, and timeless style.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Filter size={18} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  viewMode === 'grid' 
                    ? 'bg-primary text-white' 
                    : 'text-muted hover:text-foreground'
                )}
                aria-label="Grid view"
              >
                <Grid3X3 size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  viewMode === 'list' 
                    ? 'bg-primary text-white' 
                    : 'text-muted hover:text-foreground'
                )}
                aria-label="List view"
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="pt-4 border-t border-light mt-4"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => 
                          dispatch(setFilter({ key: 'category', value: filters.category === cat.value ? null : cat.value }))
                        }
                        className={cn(
                          'px-4 py-2 text-sm rounded-full transition-colors',
                          filters.category === cat.value
                            ? 'bg-primary text-white'
                            : 'bg-light text-foreground hover:bg-primary/10'
                        )}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Season Filter */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Season</h4>
                  <div className="flex flex-wrap gap-2">
                    {seasons.map((season) => (
                      <button
                        key={season.value}
                        onClick={() => 
                          dispatch(setFilter({ key: 'season', value: filters.season === season.value ? null : season.value }))
                        }
                        className={cn(
                          'px-4 py-2 text-sm rounded-full transition-colors capitalize',
                          filters.season === season.value
                            ? 'bg-primary text-white'
                            : 'bg-light text-foreground hover:bg-primary/10'
                        )}
                      >
                        {season.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Year Filter */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Year</h4>
                  <div className="flex flex-wrap gap-2">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => 
                          dispatch(setFilter({ key: 'year', value: filters.year === year ? null : year }))
                        }
                        className={cn(
                          'px-4 py-2 text-sm rounded-full transition-colors',
                          filters.year === year
                            ? 'bg-primary text-white'
                            : 'bg-light text-foreground hover:bg-primary/10'
                        )}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <div className="mt-4 pt-4 border-t border-light">
                  <button
                    onClick={() => dispatch(clearFilters())}
                    className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <X size={16} />
                    Clear all filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted text-lg">No items match your filters.</p>
              <button
                onClick={() => dispatch(clearFilters())}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-8'
            }>
              {filteredItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    'group cursor-pointer',
                    viewMode === 'list' && 'flex flex-col md:flex-row gap-6'
                  )}
                  onClick={() => openLightbox(item)}
                >
                  {/* Image */}
                  <div className={cn(
                    'relative overflow-hidden rounded-xl',
                    viewMode === 'list' 
                      ? 'aspect-[4/3] md:w-1/3 flex-shrink-0' 
                      : 'aspect-[3/4]'
                  )}>
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes={viewMode === 'list' ? '(max-width: 768px) 100vw, 33vw' : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Quick Actions */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-sm font-medium">
                        {item.images.length} {item.images.length === 1 ? 'photo' : 'photos'}
                      </span>
                      <span className="text-white text-sm font-medium capitalize">
                        {item.category}
                      </span>
                    </div>
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={viewMode === 'list' ? 'flex-1 py-2' : 'mt-4'}>
                    <div className="flex items-center gap-2 text-sm text-muted mb-2">
                      <span className="capitalize">{item.season}</span>
                      <span>•</span>
                      <span>{item.year}</span>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm line-clamp-2 mb-4">
                      {item.description}
                    </p>
                    {/* Materials */}
                    <div className="flex flex-wrap gap-2">
                      {item.materials.slice(0, 3).map((material) => (
                        <span
                          key={material}
                          className="text-xs text-muted bg-light px-2 py-1 rounded"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Results Count */}
          {!loading && filteredItems.length > 0 && (
            <div className="mt-12 text-center text-muted text-sm">
              Showing {filteredItems.length} of {items.length} designs
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <Lightbox
          images={selectedItem.images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          title={selectedItem.title}
          description={selectedItem.description}
        />
      )}
    </>
  );
}

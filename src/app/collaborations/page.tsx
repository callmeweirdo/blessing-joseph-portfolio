'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchCollaborations, setSelectedType, Collaboration } from '@/store/slices/collaborationsSlice';
import { Handshake, Star, ExternalLink, Quote, Filter } from 'lucide-react';

const collaborationTypes = [
  { value: 'fashion', label: 'Fashion', icon: '✦' },
  { value: 'beauty', label: 'Beauty', icon: '◆' },
  { value: 'photography', label: 'Photography', icon: '●' },
  { value: 'media', label: 'Media', icon: '■' },
];

const pressMentions = [
  {
    publication: 'Vogue Africa',
    title: '10 Emerging Designers to Watch in 2024',
    date: 'March 2024',
    excerpt: 'Blessing Joseph brings a fresh perspective to Nigerian fashion, blending traditional craftsmanship with contemporary Gen Z sensibilities.',
    link: '#',
  },
  {
    publication: 'The Guardian Nigeria',
    title: 'Cross River Talent Shines at Lagos Fashion Week',
    date: 'November 2023',
    excerpt: 'A standout debut that captured the attention of fashion critics and buyers alike.',
    link: '#',
  },
  {
    publication: 'BellaNaija Style',
    title: 'Designer Spotlight: Blessing Joseph',
    date: 'August 2023',
    excerpt: 'From Cross River to the global stage, this young designer is making waves with her unique aesthetic.',
    link: '#',
  },
];

export default function CollaborationsPage() {
  const dispatch = useAppDispatch();
  const { items, loading, selectedType } = useAppSelector((state) => state.collaborations);

  useEffect(() => {
    dispatch(fetchCollaborations());
  }, [dispatch]);

  const filteredItems = selectedType
    ? items.filter((item) => item.type === selectedType)
    : items;

  const featuredItems = items.filter((item) => item.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-secondary">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/hero/hero-3.jpg')`,
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
              Partnerships
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white mt-6 mb-8 leading-tight"
            >
              Collaborations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
            >
              Building meaningful partnerships with brands, publications, and 
              creatives who share a vision for authentic, impactful fashion.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15+', label: 'Brand Partners' },
              { value: '30+', label: 'Campaigns' },
              { value: '12', label: 'Press Features' },
              { value: '5', label: 'Awards' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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

      {/* Featured Collaborations */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Highlighted Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Featured Partnerships
            </h2>
          </motion.div>

          <div className="space-y-12">
            {featuredItems.map((collab, index) => (
              <motion.article
                key={collab.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Brand Visual */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video bg-light rounded-2xl overflow-hidden flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Handshake className="text-secondary" size={40} />
                      </div>
                      <h3 className="text-3xl font-display font-bold text-secondary mb-2">
                        {collab.brandName}
                      </h3>
                      <span className="text-sm text-muted uppercase tracking-wider">
                        {collab.year} • {collab.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <p className="text-lg text-foreground mb-6 leading-relaxed">
                      {collab.description}
                    </p>

                    {/* Deliverables */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-muted uppercase tracking-wider mb-3">
                        Deliverables
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {collab.deliverables.map((deliverable) => (
                          <span
                            key={deliverable}
                            className="bg-light text-foreground text-sm px-3 py-1 rounded-full"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    {collab.testimonial && (
                      <blockquote className="border-l-4 border-primary pl-4 italic text-muted">
                        "{collab.testimonial}"
                      </blockquote>
                    )}

                    {/* Link */}
                    {collab.link && (
                      <a
                        href={collab.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-primary hover:underline"
                      >
                        Visit Website
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Collaborations */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              All Collaborations
            </h2>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => dispatch(setSelectedType(null))}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                selectedType === null
                  ? 'bg-primary text-white'
                  : 'bg-white text-foreground hover:bg-primary/10'
              }`}
            >
              All
            </button>
            {collaborationTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => dispatch(setSelectedType(type.value))}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  selectedType === type.value
                    ? 'bg-primary text-white'
                    : 'bg-white text-foreground hover:bg-primary/10'
                }`}
              >
                <span className="mr-2">{type.icon}</span>
                {type.label}
              </button>
            ))}
          </div>

          {/* Collaborations Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((collab, index) => (
                <motion.article
                  key={collab.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-display font-semibold mb-1">
                        {collab.brandName}
                      </h3>
                      <span className="text-sm text-muted capitalize">
                        {collab.type} • {collab.year}
                      </span>
                    </div>
                    {collab.featured && (
                      <Star className="text-gold" size={20} fill="currentColor" />
                    )}
                  </div>
                  <p className="text-muted text-sm mb-4">
                    {collab.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {collab.deliverables.slice(0, 3).map((deliverable) => (
                      <span
                        key={deliverable}
                        className="text-xs text-muted bg-light px-2 py-1 rounded"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              In the News
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Press Mentions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pressMentions.map((mention, index) => (
              <motion.article
                key={mention.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-light hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Quote size={20} />
                  <span className="text-sm font-medium">{mention.publication}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {mention.title}
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-3">
                  {mention.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">{mention.date}</span>
                  <a
                    href={mention.link}
                    className="text-primary text-sm hover:underline flex items-center gap-1"
                  >
                    Read More
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.article>
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
              Let us Create Together
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Interested in collaborating? I am always open to meaningful 
              partnerships that align with my values and vision.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

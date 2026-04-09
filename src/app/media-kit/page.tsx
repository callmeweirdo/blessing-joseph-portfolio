'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Download, 
  FileText, 
  Image as ImageIcon, 
  Camera,
  Globe,
  Users,
  Eye,
  Heart,
  Award,
  Calendar
} from 'lucide-react';

// Custom social icons
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const mediaKitData = {
  bio: {
    short: 'Blessing Joseph is a Nigerian fashion designer and model from Cross River State, creating contemporary designs that celebrate heritage and modern aesthetics.',
    full: 'Blessing Joseph is a Gen Z fashion designer and model based in Cross River State, Nigeria. With a unique perspective that blends traditional Nigerian craftsmanship with contemporary design sensibilities, she has quickly become one of the most exciting emerging voices in African fashion. Her work has been featured in Vogue Africa, Lagos Fashion Week, and numerous publications across the continent.',
  },
  stats: {
    instagram: '25K+',
    twitter: '8K+',
    website: '50K+',
    engagement: '4.5%',
    age: '22-35',
    gender: '68% Female',
  },
  achievements: [
    'Vogue Africa Emerging Designer Feature 2023',
    'Lagos Fashion Week Official Selection 2023-2024',
    'Nigerian Fashion Designers Association Member',
    'Cross River State Creative Ambassador',
  ],
  services: [
    { name: 'Brand Ambassador', price: 'From ₦500,000' },
    { name: 'Campaign Modeling', price: 'From ₦300,000/day' },
    { name: 'Design Collaboration', price: 'Project-based' },
    { name: 'Speaking Engagement', price: 'From ₦100,000' },
  ],
};

const pressImages = [
  '/images/portfolio/model/model-1.jpg',
  '/images/portfolio/model/model-2.jpg',
  '/images/hero/hero-2.jpg',
  '/images/portfolio/model/model-5.jpg',
];

export default function MediaKitPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm font-medium uppercase tracking-wider"
            >
              For Press & Partners
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white mt-6 mb-8 leading-tight"
            >
              Media Kit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Download official assets, bios, and media resources for press, 
              partnerships, and collaborations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors">
                <Download size={18} />
                Download Full Kit (PDF)
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-secondary transition-colors">
                <ImageIcon size={18} />
                Download Photos
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Bio Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/portfolio/model/model-1.jpg"
                  alt="Blessing Joseph"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl">
                <div className="text-3xl font-display font-bold">5+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                About
              </span>
              <h2 className="text-4xl font-display font-bold mt-4 mb-6">
                Quick Bio
              </h2>
              
              <div className="space-y-6 text-muted leading-relaxed">
                <p className="text-lg text-foreground font-medium">
                  {mediaKitData.bio.short}
                </p>
                <p>
                  {mediaKitData.bio.full}
                </p>
              </div>

              {/* Contact Info */}
              <div className="mt-8 p-6 bg-light rounded-xl">
                <h3 className="font-display font-semibold mb-4">Press Contact</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> press@blessingjoseph.com</p>
                  <p><strong>Management:</strong> management@blessingjoseph.com</p>
                  <p><strong>Location:</strong> Cross River State, Nigeria</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
              Reach
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Audience & Stats
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto mb-4 text-white">
                <InstagramIcon />
              </div>
              <div className="text-4xl lg:text-5xl font-display font-bold mb-2">
                {mediaKitData.stats.instagram}
              </div>
              <div className="text-white/80 text-sm">Instagram Followers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 text-white">
                <TwitterIcon />
              </div>
              <div className="text-4xl lg:text-5xl font-display font-bold mb-2">
                {mediaKitData.stats.twitter}
              </div>
              <div className="text-white/80 text-sm">Twitter Followers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Eye className="mx-auto mb-4" size={32} />
              <div className="text-4xl lg:text-5xl font-display font-bold mb-2">
                {mediaKitData.stats.website}
              </div>
              <div className="text-white/80 text-sm">Monthly Website Views</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Heart className="mx-auto mb-4" size={32} />
              <div className="text-4xl lg:text-5xl font-display font-bold mb-2">
                {mediaKitData.stats.engagement}
              </div>
              <div className="text-white/80 text-sm">Engagement Rate</div>
            </motion.div>
          </div>

          {/* Audience Demographics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Users className="mx-auto mb-3" size={24} />
              <div className="text-2xl font-display font-bold mb-1">{mediaKitData.stats.age}</div>
              <div className="text-white/80 text-sm">Primary Age Range</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <Globe className="mx-auto mb-3" size={24} />
              <div className="text-2xl font-display font-bold mb-1">{mediaKitData.stats.gender}</div>
              <div className="text-white/80 text-sm">Audience Gender</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Recognition
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Achievements & Press
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaKitData.achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                <span className="font-medium">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Rates Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Collaboration
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Services & Rates
            </h2>
            <p className="text-muted text-lg">
              Standard rates for partnerships. Custom packages available upon request.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKitData.services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-display font-semibold mb-2">
                  {service.name}
                </h3>
                <p className="text-primary font-bold text-xl">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted text-sm mb-4">
              Rates are indicative and may vary based on scope, timeline, and usage.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
            >
              Request Full Rate Card
            </a>
          </div>
        </div>
      </section>

      {/* Press Images Section */}
      <section className="py-24 lg:py-32 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
              Assets
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Press Images
            </h2>
            <p className="text-white/80 text-lg">
              High-resolution images for press and media use. 
              Please credit &copy; Blessing Joseph when using.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pressImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[3/4] rounded-xl overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`Press image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="px-4 py-2 bg-white text-foreground text-sm font-medium rounded-full">
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors">
              <Download size={18} />
              Download All Images (ZIP)
            </button>
          </div>
        </div>
      </section>

      {/* Brand Guidelines Section */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Guidelines
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Brand Assets
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo Usage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl text-center"
            >
              <div className="w-20 h-20 bg-secondary rounded-xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-display text-2xl font-bold">BJ</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Logo
              </h3>
              <p className="text-muted text-sm mb-6">
                Official logo files in various formats for print and digital use.
              </p>
              <button className="text-primary hover:underline text-sm">
                Download Logos
              </button>
            </motion.div>

            {/* Color Palette */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl text-center"
            >
              <div className="flex justify-center gap-2 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#c41e3a]" />
                <div className="w-12 h-12 rounded-full bg-[#2d2d2d]" />
                <div className="w-12 h-12 rounded-full bg-[#d4a574]" />
                <div className="w-12 h-12 rounded-full bg-[#faf9f7] border" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Colors
              </h3>
              <p className="text-muted text-sm mb-6">
                Official brand colors with hex codes and usage guidelines.
              </p>
              <button className="text-primary hover:underline text-sm">
                Download Palette
              </button>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl text-center"
            >
              <div className="mb-6 space-y-2">
                <p className="font-display text-2xl">Playfair Display</p>
                <p className="font-sans text-lg">Inter</p>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                Typography
              </h3>
              <p className="text-muted text-sm mb-6">
                Brand fonts and typography guidelines for consistent messaging.
              </p>
              <button className="text-primary hover:underline text-sm">
                Download Fonts
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

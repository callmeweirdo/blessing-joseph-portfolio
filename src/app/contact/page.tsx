'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Camera,
  Send,
  CheckCircle,
  Calendar,
  Briefcase,
  Sparkles,
  User
} from 'lucide-react';

// Custom social icons since they may not be available in this version of lucide-react
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@blessingjoseph.com',
    href: 'mailto:hello@blessingjoseph.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 800 123 4567',
    href: 'tel:+2348001234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Cross River State, Nigeria',
    href: '#',
  },
];

const socialLinks = [
  {
    Icon: InstagramIcon,
    label: 'Instagram',
    href: 'https://instagram.com/blessingjoseph',
    handle: '@blessingjoseph',
  },
  {
    Icon: TwitterIcon,
    label: 'Twitter',
    href: 'https://twitter.com/blessingjoseph',
    handle: '@blessingjoseph',
  },
];

const inquiryTypes = [
  { value: 'design', label: 'Design Collaboration', icon: Sparkles },
  { value: 'modeling', label: 'Modeling Booking', icon: User },
  { value: 'partnership', label: 'Brand Partnership', icon: Briefcase },
  { value: 'press', label: 'Press & Media', icon: Mail },
  { value: 'other', label: 'Other Inquiry', icon: Send },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white mt-6 mb-8 leading-tight"
            >
              Let us Create Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
            >
              Whether you are interested in a collaboration, booking, or just want 
              to say hello, I would love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="sticky top-32">
                <h2 className="text-3xl font-display font-bold mb-6">
                  Contact Information
                </h2>
                <p className="text-muted mb-8 leading-relaxed">
                  Ready to start a project or have a question? Reach out through 
                  any of these channels. I typically respond within 24-48 hours.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-12">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-light transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon size={20} className="text-primary group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted">{item.label}</div>
                        <div className="font-medium text-foreground">{item.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-display font-semibold mb-4">
                    Follow Along
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-light flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                        aria-label={social.label}
                      >
                        <social.Icon />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="mt-12 p-6 bg-light rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-medium">Available for Projects</span>
                  </div>
                  <p className="text-sm text-muted">
                    Currently accepting new collaborations and bookings for Q2 2024.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-muted mb-8">
                      Thank you for reaching out. I will get back to you within 
                      24-48 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          inquiryType: '',
                          subject: '',
                          message: '',
                        });
                      }}
                      className="text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-display font-semibold mb-6">
                      Send a Message
                    </h3>

                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-light bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-light bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium mb-3">
                        Type of Inquiry *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, inquiryType: type.value }))}
                            className={`flex items-center gap-2 p-3 rounded-lg border text-sm transition-colors ${
                              formData.inquiryType === type.value
                                ? 'border-primary bg-primary/5 text-primary'
                                : 'border-light hover:border-primary/50'
                            }`}
                          >
                            <type.icon size={16} />
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-light bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Project collaboration inquiry"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-light bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                        placeholder="Tell me about your project, timeline, and any other details..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send size={18} className="ml-2" />
                    </Button>

                    <p className="text-center text-sm text-muted">
                      By sending this message, you agree to our privacy policy 
                      and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'What types of projects do you accept?',
                a: 'I accept fashion design collaborations, modeling bookings for editorial and commercial work, brand partnerships, and speaking engagements. I am particularly interested in projects that align with my values of authenticity, sustainability, and celebrating Nigerian heritage.',
              },
              {
                q: 'What is your typical turnaround time?',
                a: 'For design projects, turnaround varies based on complexity but typically ranges from 2-6 weeks. For modeling bookings, I am usually available with 1-2 weeks notice, though earlier booking is recommended for larger productions.',
              },
              {
                q: 'Do you work with international clients?',
                a: 'Absolutely! I have worked with brands and clients from various countries. For international bookings, please include location details in your inquiry so we can discuss logistics and any travel requirements.',
              },
              {
                q: 'How do you handle pricing?',
                a: 'Pricing depends on the scope and nature of the project. For modeling, rates vary based on usage, duration, and location. For design collaborations, we can discuss custom packages based on your specific needs.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 lg:p-8 rounded-2xl"
              >
                <h3 className="text-lg font-display font-semibold mb-3">
                  {faq.q}
                </h3>
                <p className="text-muted leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

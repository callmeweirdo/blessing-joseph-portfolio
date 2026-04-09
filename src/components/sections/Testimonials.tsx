"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Blessing brings an incredible energy to every project. Her designs are not just beautiful—they tell a story that resonates with our audience. A true professional and creative force.",
    author: "Amara Okonkwo",
    role: "Creative Director, Lagos Fashion Week",
    avatar: "/images/testimonials/amara.jpg",
  },
  {
    id: 2,
    quote:
      "Working with Blessing was a game-changer for our brand campaign. She understood our vision immediately and brought it to life with stunning elegance and authenticity.",
    author: "David Emeka",
    role: "Marketing Director, Glow Beauty Nigeria",
    avatar: "/images/testimonials/david.jpg",
  },
  {
    id: 3,
    quote:
      "Her ability to blend traditional Nigerian aesthetics with contemporary fashion is unmatched. Blessing represents the future of African design on the global stage.",
    author: "Ngozi Adichie",
    role: "Editor-in-Chief, Vogue Africa",
    avatar: "/images/testimonials/ngozi.jpg",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 lg:py-32 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4">
            What People Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center z-10">
              <Quote className="text-white" size={28} />
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl p-8 md:p-12 pt-16 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <blockquote className="text-xl md:text-2xl font-display italic text-foreground leading-relaxed mb-8">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                      <span className="text-xl font-bold text-primary">
                        {testimonials[currentIndex].author.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-sm text-muted">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-10">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Indicators */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-6 bg-primary"
                          : "bg-foreground/20 hover:bg-foreground/40"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

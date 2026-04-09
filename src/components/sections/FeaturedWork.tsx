"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchPortfolioItems } from "@/store/slices/portfolioSlice";
import { Button } from "@/components/ui/Button";

export function FeaturedWork() {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.portfolio);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchPortfolioItems());
    }
  }, [dispatch, items.length]);

  const featuredItems = items.filter((item) => item.featured).slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 leading-tight">
              Featured Designs
            </h2>
            <p className="text-white/70 mt-4 max-w-xl">
              Explore a selection of my original creations, from couture pieces
              to ready-to-wear collections.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/portfolio/designer">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-secondary"
              >
                View All Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Featured Items Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-white/5 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/portfolio/designer/${item.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight className="text-secondary" size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-primary text-sm uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-display font-semibold mt-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm mt-2">
                        {item.season} {item.year}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {["Dresses", "Accessories", "Couture", "Ready-to-Wear"].map(
              (category) => (
                <Link
                  key={category}
                  href={`/portfolio/designer?category=${category.toLowerCase()}`}
                  className="px-6 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-secondary transition-all duration-300"
                >
                  {category}
                </Link>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchCollaborations } from "@/store/slices/collaborationsSlice";
import { Button } from "@/components/ui/Button";

const categoryColors: Record<string, string> = {
  fashion: "bg-pink-500/20 text-pink-400",
  beauty: "bg-purple-500/20 text-purple-400",
  photography: "bg-blue-500/20 text-blue-400",
  media: "bg-green-500/20 text-green-400",
};

export function CollaborationsPreview() {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.collaborations);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchCollaborations());
    }
  }, [dispatch, items.length]);

  const featuredCollaborations = items
    .filter((item) => item.featured)
    .slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Partnerships
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
            Collaborations & Press
          </h2>
          <p className="text-muted text-lg">
            Brands partner with Blessing for her distinctive style sensibility,
            strong on-camera presence, and collaborative professionalism.
          </p>
        </motion.div>

        {/* Collaborations Grid */}
        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-64 bg-foreground/5 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCollaborations.map((collab, index) => (
              <motion.div
                key={collab.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center">
                    <span className="text-2xl font-bold text-foreground/30">
                      {collab.brandName.charAt(0)}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
                      categoryColors[collab.type] || "bg-gray-500/20 text-gray-500"
                    }`}
                  >
                    {collab.type}
                  </span>
                </div>

                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {collab.brandName}
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">
                  {collab.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {collab.deliverables.slice(0, 2).map((item) => (
                    <span
                      key={item}
                      className="text-xs text-muted bg-foreground/5 px-2 py-1 rounded"
                    >
                      {item}
                    </span>
                  ))}
                  {collab.deliverables.length > 2 && (
                    <span className="text-xs text-muted bg-foreground/5 px-2 py-1 rounded">
                      +{collab.deliverables.length - 2}
                    </span>
                  )}
                </div>

                {collab.testimonial && (
                  <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted mb-6">
                    &ldquo;{collab.testimonial}&rdquo;
                  </blockquote>
                )}

                {collab.link && (
                  <a
                    href={collab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="ml-1" size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted mb-6">
            Interested in collaborating? Let&apos;s create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collaborations">
              <Button variant="outline" size="lg">
                View All Collaborations
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start a Collaboration
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

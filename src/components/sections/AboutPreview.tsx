"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const values = [
  {
    icon: MapPin,
    title: "Rooted in Heritage",
    description: "Proudly representing Cross River State, Nigeria",
  },
  {
    icon: Heart,
    title: "Family & Faith",
    description: "Guided by strong values and community",
  },
  {
    icon: Sparkles,
    title: "Gen Z Vision",
    description: "Fresh perspectives on contemporary fashion",
  },
];

export function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
              <Image
                src="/images/about/portrait-main.jpg"
                alt="Blessing Joseph - Fashion Designer & Model"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 lg:-right-12 bg-white p-6 rounded-xl shadow-xl max-w-xs z-20"
            >
              <p className="font-display text-lg italic text-foreground mb-2">
                &ldquo;Fashion is not just about clothes—it&apos;s about telling your story.&rdquo;
              </p>
              <p className="text-sm text-muted">— Blessing Joseph</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6 leading-tight">
              Cross River-born Designer & Model
            </h2>
            <div className="space-y-4 text-muted text-lg leading-relaxed">
              <p>
                Blessing Joseph is a fashion designer and model from Cross River
                State, Nigeria. Rooted in family and faith, she designs and
                models her own creations — blending authentic Nigerian influences
                with bold Gen Z aesthetics.
              </p>
              <p>
                With multiple collaborations across fashion, makeup, photography,
                and media, Blessing is building a brand acclaimed for style,
                enthusiasm, and relentless drive.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10 mb-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto sm:mx-0">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <Button variant="primary" size="lg">
                Read Full Story
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Heart, Sparkles, Award, Users, Globe } from "lucide-react";

const milestones = [
  {
    year: "2019",
    title: "First Collection",
    description: "Launched debut fashion collection inspired by Cross River heritage",
  },
  {
    year: "2021",
    title: "Lagos Fashion Week",
    description: "First runway appearance at Lagos Fashion Week",
  },
  {
    year: "2022",
    title: "Vogue Feature",
    description: "Featured in Vogue Africa's emerging designers spread",
  },
  {
    year: "2023",
    title: "Brand Partnerships",
    description: "Signed major brand ambassador deals",
  },
  {
    year: "2024",
    title: "Global Recognition",
    description: "International features and collaborations",
  },
];

const values = [
  {
    icon: Heart,
    title: "Authenticity",
    description:
      "Every design tells a true story of Nigerian heritage and contemporary vision",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "Committed to craftsmanship and attention to detail in every piece",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Supporting local artisans and uplifting the Nigerian fashion ecosystem",
  },
  {
    icon: Globe,
    title: "Innovation",
    description:
      "Pushing boundaries while honoring traditional techniques and materials",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 bg-secondary">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/about/texture.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm font-medium uppercase tracking-wider"
            >
              About Me
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-display font-bold text-white mt-6 mb-8 leading-tight"
            >
              Designing With Purpose, Modeling With Passion
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 leading-relaxed"
            >
              From the vibrant streets of Cross River State to the global fashion
              stage, my journey is a testament to the power of authenticity and
              relentless creativity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/portfolio/model/model-1.jpg"
                  alt="Blessing Joseph in her studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl max-w-xs">
                <p className="font-display text-lg italic">
                  &ldquo;Fashion is my language, and every piece I create speaks of home, hope, and heritage.&rdquo;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                The Story Behind the Designs
              </h2>
              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  Born and raised in Cross River State, Nigeria, I grew up
                  surrounded by the rich tapestry of Nigerian culture — the
                  vibrant colors of traditional markets, the intricate patterns
                  of local textiles, and the stories passed down through
                  generations.
                </p>
                <p>
                  My journey into fashion began not in a studio, but in my
                  grandmother&apos;s sewing room, where I learned that every stitch
                  carries meaning and every fabric tells a story. Today, those
                  early lessons continue to guide my work as I blend traditional
                  Nigerian aesthetics with contemporary Gen Z sensibilities.
                </p>
                <p>
                  As both designer and model, I bring a unique perspective to
                  every project — understanding not just how clothes are made,
                  but how they move, how they feel, and how they transform the
                  wearer. This dual expertise has opened doors to collaborations
                  with brands, photographers, and media outlets who share my
                  vision of authentic, inclusive fashion.
                </p>
                <p>
                  Beyond the runway and the design studio, I&apos;m guided by my
                  faith and family — values that ground me and inspire me to use
                  my platform to uplift others and celebrate the beauty of
                  Nigerian creativity.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t">
                <div className="flex items-center gap-2 text-muted">
                  <MapPin size={20} className="text-primary" />
                  <span>Cross River State, Nigeria</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              What Drives My Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
              Milestones
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div
                      className={`${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <span className="text-4xl font-display font-bold text-primary">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg z-10 hidden md:block" />

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-24 lg:py-32 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Behind the Scenes
              </span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
                The Creative Process
              </h2>
              <div className="space-y-6 text-white/80">
                <p>
                  Every collection begins with research — diving deep into
                  Nigerian textile traditions, exploring color palettes inspired
                  by our landscapes, and sketching ideas that honor the past
                  while embracing the future.
                </p>
                <p>
                  I work closely with local artisans and craftspeople, ensuring
                  that each piece not only looks beautiful but also supports the
                  communities that keep these traditions alive.
                </p>
                <p>
                  When I step in front of the camera as a model, I bring that
                  same intentionality — understanding the garment&apos;s story and
                  sharing it through movement, expression, and presence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-white/10" />
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white/10" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white/10" />
                <div className="aspect-square rounded-xl overflow-hidden bg-white/10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

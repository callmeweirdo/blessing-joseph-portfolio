"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

// Custom social icons
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio/designer", label: "Designer" },
  { href: "/portfolio/model", label: "Model" },
  { href: "/collaborations", label: "Collaborations" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-50 flex flex-col"
              aria-label="Blessing Joseph - Home"
            >
              <span
                className={cn(
                  "text-xl md:text-2xl font-display font-bold tracking-tight transition-colors",
                  isScrolled || isMobileMenuOpen
                    ? "text-foreground"
                    : "text-white"
                )}
              >
                Blessing
              </span>
              <span
                className={cn(
                  "text-xs md:text-sm tracking-[0.3em] uppercase transition-colors",
                  isScrolled || isMobileMenuOpen
                    ? "text-muted"
                    : "text-white/80"
                )}
              >
                Joseph
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative group",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                      isScrolled ? "bg-primary" : "bg-white"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA & Social */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/blessingjoseph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "transition-colors hover:text-primary",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                  aria-label="Instagram"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href="https://twitter.com/blessingjoseph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "transition-colors hover:text-primary",
                    isScrolled ? "text-foreground" : "text-white"
                  )}
                  aria-label="Twitter"
                >
                  <TwitterIcon size={20} />
                </a>
              </div>
              <Link
                href="/contact"
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                  isScrolled
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-white text-foreground hover:bg-white/90"
                )}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden relative z-50 p-2 transition-colors",
                isMobileMenuOpen ? "text-foreground" : isScrolled ? "text-foreground" : "text-white"
              )}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6">
              <nav className="flex-1 flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 text-2xl font-display font-medium text-foreground hover:text-primary transition-colors border-b border-border"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="pt-8 space-y-6">
                <div className="flex items-center gap-6">
                  <a
                    href="https://instagram.com/blessingjoseph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={24} />
                  </a>
                  <a
                    href="https://twitter.com/blessingjoseph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterIcon size={24} />
                  </a>
                  <a
                    href="mailto:hello@blessingjoseph.com"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-4 text-center bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
                >
                  Book a Collaboration
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

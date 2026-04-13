"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroImages } from "@/data/site";

// Hero slider
// The homepage stays intentionally minimal, so the slider carries the full first impression.
export function HeroSlider() {
  // Tracks the active hero image for autoplay, arrow navigation, and dots.
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Autoplay is slow by design so the experience feels paced like a portfolio presentation.
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroImages.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  // Normalizing the index lets the same helper support both forward and backward navigation.
  const goTo = (nextIndex: number) => {
    const normalized = (nextIndex + heroImages.length) % heroImages.length;
    setIndex(normalized);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex min-h-[calc(100vh-14rem)] max-w-6xl flex-col items-center justify-center"
    >
      {/* Responsive design: the slider narrows on desktop to create luxury-style negative space. */}
      <div className="relative w-full md:w-[75%]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-border shadow-soft md:aspect-[16/10]">
          <AnimatePresence mode="wait">
            <motion.div
              // Fade-only transitions keep attention on the photography instead of the effect itself.
              key={heroImages[index]}
              initial={{ opacity: 0.25 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.25 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[index]}
                alt={`Luxury interior slide ${index + 1}`}
                fill
                // These are image placeholders for the concept build and can be swapped later without layout changes.
                sizes="(max-width: 768px) 100vw, 75vw"
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
              aria-label="Previous slide"
            >
              <ArrowLeft size={18} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
              aria-label="Next slide"
            >
              <ArrowRight size={18} strokeWidth={1.4} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {heroImages.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                aria-label={`Go to slide ${dotIndex + 1}`}
                onClick={() => goTo(dotIndex)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  dotIndex === index ? "w-8 bg-accent" : "w-2.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

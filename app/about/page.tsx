"use client";

import { motion } from "framer-motion";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { founders, stats } from "@/data/site";

// Route/page structure
// About uses a narrower content width so long-form copy feels editorial and easy to read.
export default function AboutPage() {
  return (
    <PageShell narrow>
      <SectionHeading
        eyebrow="About"
        title="Interiors shaped with restraint, emotion, and a quiet sense of luxury."
        description="Demo creates homes and spaces that feel refined without excess, balancing architecture, texture, and atmosphere with careful precision."
      />

      <div className="space-y-8 text-base leading-8 text-muted md:text-lg">
        {[
          "Our studio believes that premium interiors should not rely on spectacle. Instead, they should unfold slowly through proportion, craftsmanship, and the kind of tactile richness that reveals itself over time. Each project begins with listening carefully, studying how our clients live, host, unwind, and move through their spaces.",
          "We are drawn to materials that age beautifully and layouts that feel natural rather than forced. Soft neutrals, architectural silhouettes, and subtle contrasts create environments that are elegant yet deeply livable. The result is an atmosphere of calm confidence, shaped to endure far beyond trends.",
          "From private residences to curated commercial interiors, our process stays intentionally measured. We work with a clear visual language, close collaboration, and a strong focus on detail. Every room is edited thoughtfully so it feels composed, generous, and unmistakably personal."
        ].map((paragraph, index) => (
          <motion.p
            key={paragraph}
            // Fade-in animation for section entrance on scroll.
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <div className="mt-16 grid gap-4 border-y border-border py-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="py-4"
          >
            <p className="font-heading text-3xl font-light md:text-[2.2rem]">{stat}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <p className="text-[0.72rem] uppercase tracking-[0.24em] text-accent">Founders</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              // A light panel keeps the founder cards visible without introducing heavy card styling.
              className="rounded-[24px] border border-border bg-white/25 p-8"
            >
              <p className="font-heading text-4xl font-light">{founder.name}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-accent">{founder.role}</p>
              <p className="mt-6 text-sm leading-7 text-muted">{founder.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

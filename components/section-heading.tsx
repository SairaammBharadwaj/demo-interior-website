"use client";

import { motion } from "framer-motion";

// Reusable section header for secondary pages.
export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mb-12 space-y-4"
    >
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-accent/60" />
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      </div>
      <h1 className="max-w-3xl font-heading text-5xl font-light leading-[1.02] text-foreground md:text-7xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}

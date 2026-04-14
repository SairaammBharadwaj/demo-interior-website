"use client";

import { motion } from "framer-motion";
import { Building2, House, PencilRuler, Sofa } from "lucide-react";
import { processSteps, services } from "@/data/site";

const icons = {
  PencilRuler,
  House,
  Building2,
  Sofa
};

// Services and process sections are grouped together to keep the page concise but still informative.
export function ServicesGrid() {
  return (
    <div className="space-y-20">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = icons[service.icon as keyof typeof icons];

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex min-h-[260px] flex-col justify-between rounded-[26px] border border-border bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(176,117,82,0.1))] p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white/80 text-accent">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-light text-foreground">{service.title}</h2>
                <p className="text-sm leading-7 text-muted">{service.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="rounded-[28px] border border-border bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(176,117,82,0.12))] px-6 py-10 shadow-soft md:px-10">
        <div className="mb-10">
          <p className="text-[0.72rem] uppercase tracking-[0.24em] text-accent">Process</p>
          <h3 className="mt-3 font-heading text-4xl font-light md:text-5xl">A Calm, Clear Journey</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            Each step is paced, collaborative, and designed to keep the work feeling deliberate.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[22px] border border-border bg-white/85 p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] uppercase tracking-[0.28em] text-foreground/70">
                  Step {index + 1}
                </span>
                <span className="h-px w-8 bg-accent/40" />
              </div>
              <h4 className="mt-4 font-heading text-2xl font-light text-foreground">{step.title}</h4>
              <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

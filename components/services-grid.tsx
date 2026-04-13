"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, House, PencilRuler, Sofa } from "lucide-react";
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
              className="flex min-h-[260px] flex-col justify-between rounded-[24px] border border-border bg-white/30 p-7"
            >
              <Icon size={28} strokeWidth={1.35} className="text-accent" />
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-light">{service.title}</h2>
                <p className="text-sm leading-7 text-muted">{service.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="rounded-[28px] border border-border px-6 py-10 md:px-10">
        <div className="mb-8">
          <p className="text-[0.72rem] uppercase tracking-[0.24em] text-accent">Process</p>
          <h3 className="mt-3 font-heading text-4xl font-light md:text-5xl">A Calm, Clear Journey</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-4 md:block">
              <div className="flex items-center gap-4 md:mb-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-sm text-muted">
                  {index + 1}
                </span>
                {index < processSteps.length - 1 ? (
                  <ArrowRight size={16} strokeWidth={1.4} className="hidden text-muted md:block" />
                ) : null}
              </div>
              <div>
                <p className="font-heading text-2xl font-light">{step}</p>
                <div className="mt-3 h-px w-full bg-border" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

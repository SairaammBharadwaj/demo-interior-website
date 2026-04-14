"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { projects } from "@/data/site";

// Portfolio grid
// A masonry-inspired layout helps the portfolio feel more curated than a uniform card grid.
export function PortfolioGrid() {
  // Modal logic: store the selected project id instead of the full object so the source of truth stays in the data array.
  const [activeId, setActiveId] = useState<number | null>(null);
  // Deriving the active project keeps modal content synced if project data changes later.
  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeId) ?? null,
    [activeId]
  );

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    // Modal logic: lock background scroll and support Escape so the overlay feels intentional and easy to dismiss.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      {/* Responsive design: CSS columns collapse from three columns down to one on smaller screens. */}
      <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
        {projects.map((project, index) => (
          <motion.button
            type="button"
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            onClick={() => setActiveId(project.id)}
            // This class mix creates the editorial masonry rhythm while preserving large tap targets on mobile.
            className={`group relative mb-6 block w-full overflow-hidden rounded-[24px] border border-border text-left transition-colors duration-500 hover:border-accent/60 ${project.height}`}
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(176,117,82,0.35),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="font-heading text-3xl font-light text-white">{project.title}</h3>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            // Modal logic: the overlay fades independently so the content feels soft rather than abrupt.
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
            className="fixed inset-0 z-[70] bg-[#1b1713]/60 px-5 py-6 backdrop-blur-sm md:px-8 md:py-10"
          >
            <div
              className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-[28px] bg-background"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-border bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(176,117,82,0.08))] px-5 py-4 backdrop-blur-sm md:px-8">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-accent">
                    Project Details
                  </p>
                  <h2 className="mt-2 font-heading text-4xl font-light md:text-5xl">
                    {activeProject.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  aria-label="Close project"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <X size={18} strokeWidth={1.4} />
                </button>
              </div>

              <div className="grid flex-1 gap-8 overflow-y-auto px-5 py-5 md:grid-cols-[1.3fr_0.9fr] md:px-8 md:py-8">
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                    <Image
                      src={activeProject.cover}
                      alt={activeProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Additional image placeholders give the modal more of a case-study feel. */}
                    {activeProject.images.slice(1).map((image, index) => (
                      <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                        <Image
                          src={image}
                          alt={`${activeProject.title} detail ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-8 py-2">
                  <div className="space-y-5">
                    <p className="text-base leading-8 text-muted">{activeProject.description}</p>
                    <p className="text-sm leading-7 text-muted">
                      Every project is approached as a quiet composition of proportion, tone, and
                      tactility. The result is timeless, deeply livable, and intentionally
                      restrained.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-muted">
                    <ArrowLeft size={16} strokeWidth={1.4} />
                    <span className="h-px flex-1 bg-border" />
                    <ArrowRight size={16} strokeWidth={1.4} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

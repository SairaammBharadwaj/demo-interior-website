import { ReactNode } from "react";

// Reusable components
// PageShell keeps spacing and max-width behavior consistent across routes.
export function PageShell({ children, narrow = false }: { children: ReactNode; narrow?: boolean }) {
  return (
    <main className="relative px-5 pb-0 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-[radial-gradient(900px_circle_at_10%_-10%,rgba(155,106,79,0.14),transparent_55%)]" />
      <div className={`mx-auto ${narrow ? "max-w-4xl" : "max-w-7xl"}`}>{children}</div>
    </main>
  );
}

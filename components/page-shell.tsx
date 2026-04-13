import { ReactNode } from "react";

// Reusable components
// PageShell keeps spacing and max-width behavior consistent across routes.
export function PageShell({ children, narrow = false }: { children: ReactNode; narrow?: boolean }) {
  return (
    <main className="px-5 pb-0 pt-8 md:px-8 md:pt-10">
      <div className={`mx-auto ${narrow ? "max-w-4xl" : "max-w-7xl"}`}>{children}</div>
    </main>
  );
}

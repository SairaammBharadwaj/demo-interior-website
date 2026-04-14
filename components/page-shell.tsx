import { ReactNode } from "react";

// Reusable components
// PageShell keeps spacing and max-width behavior consistent across routes.
export function PageShell({ children, narrow = false }: { children: ReactNode; narrow?: boolean }) {
  return (
    <main className="relative px-5 pb-0 pt-8 md:px-8 md:pt-10">
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-[40%] bg-[radial-gradient(circle_at_left_center,rgba(201,168,130,0.16),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[60%] w-[35%] bg-[radial-gradient(circle_at_right_top,rgba(201,168,130,0.08),transparent_70%)] blur-3xl" />
      <div className={`mx-auto ${narrow ? "max-w-4xl" : "max-w-7xl"}`}>{children}</div>
    </main>
  );
}

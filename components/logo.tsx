import Link from "next/link";

// Reusable brand mark keeps the logo treatment identical in the navbar and footer.
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Demo Home">
      <span
        className={`relative flex h-10 w-10 items-center justify-center border ${
          dark ? "border-white/25" : "border-border"
        }`}
      >
        <span className="h-4 w-4 border border-accent" />
      </span>
      <span
        className={`font-heading text-[1.9rem] leading-none tracking-[0.18em] ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        Demo
      </span>
    </Link>
  );
}

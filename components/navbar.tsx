"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { Logo } from "./logo";

// Navbar
// The navigation stays shared across all routes so the site feels like one polished system.
export function Navbar() {
  const pathname = usePathname();

  // Controls mobile menu open and close state.
  const [open, setOpen] = useState(false);
  // Sticky navbar becomes blurred after scrolling to improve contrast over imagery.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // A small threshold keeps the header clean at the top and only adds treatment once content starts moving behind it.
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Closing the mobile drawer on route change prevents stale open state after navigation.
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-5 pb-5 pt-7 md:px-8 md:pb-7 md:pt-10">
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <Logo />

        {/* Desktop navigation stays airy with wide tracking and vertical separators. */}
        <nav className="hidden items-center text-[0.8rem] uppercase tracking-[0.24em] md:flex">
          {navItems.map((item, index) => {
            const active = pathname === item.href;

            return (
              <div key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className={`px-5 py-3 transition-colors duration-300 ${
                    active ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
                {index < navItems.length - 1 ? <span className="h-5 w-px bg-border" /> : null}
              </div>
            );
          })}
        </nav>

        {/* Mobile menu */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-border text-foreground md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            // Subtle motion keeps the drawer feeling premium rather than app-like.
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-7xl border border-border bg-background/95 p-4 backdrop-blur-sm md:hidden"
          >
            {/* Responsive design: the mobile menu swaps horizontal nav links for a simple stacked list. */}
            <div className="flex flex-col">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`border-b border-border py-4 text-[0.82rem] uppercase tracking-[0.24em] last:border-b-0 ${
                      active ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

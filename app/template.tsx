"use client";

import { PageTransition } from "@/components/page-transition";

// Template applies route transitions between App Router pages without duplicating motion logic in each route.
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}

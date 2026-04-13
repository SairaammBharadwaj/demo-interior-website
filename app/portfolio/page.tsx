import { PageShell } from "@/components/page-shell";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SectionHeading } from "@/components/section-heading";

// Route/page structure
// Portfolio stays focused on the gallery so visitors move quickly from overview to project details.
export default function PortfolioPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Portfolio"
        title="A curated collection of residences and spaces defined by quiet richness."
        description="Selected interiors that explore light, texture, and restraint through a contemporary luxury lens."
      />
      <PortfolioGrid />
    </PageShell>
  );
}

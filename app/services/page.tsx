import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { ServicesGrid } from "@/components/services-grid";

// Route/page structure
// Services combines offer cards and a lightweight process summary to keep the page informative without feeling busy.
export default function ServicesPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Services"
        title="Design support that feels tailored, calm, and exacting from start to finish."
        description="Our offering spans complete interior direction, high-end residences, distinctive commercial environments, and refined styling-led transformations."
      />
      <ServicesGrid />
    </PageShell>
  );
}

import { HeroSlider } from "@/components/hero-slider";
import { PageShell } from "@/components/page-shell";

// Route/page structure
// The homepage intentionally includes only the hero slider so the imagery stays the main story.
export default function HomePage() {
  return (
    <PageShell>
      <HeroSlider />
    </PageShell>
  );
}

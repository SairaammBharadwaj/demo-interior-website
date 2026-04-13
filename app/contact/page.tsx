import { ContactSection } from "@/components/contact-section";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";

// Route/page structure
// Contact leads with reassurance and clarity, then gives multiple ways for visitors to reach out.
export default function ContactPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Contact"
        title="Begin a conversation about a space that deserves thoughtful detail."
        description="Share a few notes about your project and our studio will be in touch to arrange the next step."
      />
      <ContactSection />
    </PageShell>
  );
}

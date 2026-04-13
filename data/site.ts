export type Project = {
  id: number;
  title: string;
  description: string;
  cover: string;
  height: string;
  images: string[];
};

// Reusable navigation links used across the sticky desktop nav and mobile menu.
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

// Placeholder luxury interior photography for the homepage slider.
// TODO: Replace with licensed brand photography before launch.
export const heroImages = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80&sat=-20",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80&exp=-10"
];

// Founder bios keep the About page easy to expand without editing presentation logic.
export const founders = [
  {
    name: "Elena Maris",
    role: "Creative Director",
    bio: "Elena leads each interior with an editorial eye, balancing restraint, warmth, and a quietly luxurious sense of proportion."
  },
  {
    name: "Noah Laurent",
    role: "Design Principal",
    bio: "Noah shapes spatial narratives through refined materials, tactile contrast, and a calm architectural rhythm."
  }
];

// Studio metrics are grouped here so the statistics row stays content-driven.
export const stats = [
  "15+ Years Experience",
  "120+ Projects",
  "40+ Luxury Homes",
  "98% Client Satisfaction"
];

// Service card content is stored as data so cards can be re-ordered or expanded later.
export const services = [
  {
    title: "Interior Design",
    description: "Full-scope design concepts shaped through materials, mood, light, and bespoke detailing.",
    icon: "PencilRuler"
  },
  {
    title: "Luxury Residences",
    description: "Private homes crafted with calm elegance, layered textures, and highly personal spatial planning.",
    icon: "House"
  },
  {
    title: "Commercial Spaces",
    description: "Refined hospitality and workplace interiors designed to feel intentional, memorable, and enduring.",
    icon: "Building2"
  },
  {
    title: "Renovation & Styling",
    description: "Thoughtful transformations that refresh architecture, finish palettes, and the final lived experience.",
    icon: "Sofa"
  }
];

// Process steps are intentionally short to keep the services page feeling calm and uncluttered.
export const processSteps = [
  "Consultation",
  "Concept",
  "Planning",
  "Execution",
  "Final Reveal"
];

// Testimonial placeholders are prepared for future use even though they are not surfaced yet.
// TODO: Add a testimonial section if the brand wants stronger social proof later.
export const testimonials = [
  {
    name: "Private Client",
    quote: "The studio delivered a home that feels both deeply personal and beautifully restrained."
  },
  {
    name: "Boutique Hospitality Group",
    quote: "Every room now carries a stronger identity, with a sense of quiet confidence throughout."
  }
];

// Placeholder data for luxury interior projects.
// Masonry layout uses uneven image heights for a more premium, editorial rhythm.
// TODO: Replace these Unsplash URLs with real project imagery and CMS-backed metadata.
export const projects: Project[] = [
  {
    id: 1,
    title: "Mayfair Residence",
    description: "A serene urban residence defined by tactile stone, sculptural furnishings, and controlled natural light.",
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    height: "h-[420px]",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 2,
    title: "Belgravia Loft",
    description: "Open-plan living softened with linen textures, muted oak, and deliberate negative space.",
    cover:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    height: "h-[300px]",
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-15",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80&sat=-10"
    ]
  },
  {
    id: 3,
    title: "Kensington Dining Room",
    description: "An intimate entertaining space with tailored lighting, warm neutrals, and bespoke millwork.",
    cover:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    height: "h-[500px]",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&exp=-10",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=-20"
    ]
  },
  {
    id: 4,
    title: "Chelsea Suite",
    description: "Soft monochrome tones and refined layers create a restful suite with a boutique-hotel sensibility.",
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-20",
    height: "h-[340px]",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-20",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&exp=-10",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80&exp=-5"
    ]
  },
  {
    id: 5,
    title: "Harbour View Lounge",
    description: "A coastal-inspired living room layered with stone, boucle, and filtered daylight.",
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&exp=-10",
    height: "h-[460px]",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&exp=-10",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80&sat=-15",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=-5"
    ]
  },
  {
    id: 6,
    title: "Private Gallery Hall",
    description: "A circulation space treated like a gallery, with sculptural restraint and museum-like calm.",
    cover:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=-15",
    height: "h-[360px]",
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=-15",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

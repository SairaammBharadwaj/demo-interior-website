import type { Config } from "tailwindcss";

// Tailwind theme extensions centralize the visual system so future edits stay consistent across pages.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color names keep Tailwind classes readable in JSX.
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        panel: "var(--color-panel)",
        border: "var(--color-border)",
        footer: "var(--color-footer)"
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"]
      },
      boxShadow: {
        // This soft shadow is intentionally subtle to preserve the editorial, low-contrast look.
        soft: "0 14px 40px rgba(44, 44, 44, 0.06)"
      },
      backgroundImage: {
        // A restrained texture prevents the light gray background from feeling flat.
        grain:
          "linear-gradient(180deg, rgba(155, 106, 79, 0.08), rgba(242, 238, 232, 0) 45%), radial-gradient(circle at top left, rgba(155, 106, 79, 0.12), transparent 40%), radial-gradient(circle at bottom right, rgba(42, 38, 34, 0.05), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;

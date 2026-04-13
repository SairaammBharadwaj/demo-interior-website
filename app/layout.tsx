import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

// Font configuration lives at the app shell level so every route shares the same premium typography.
const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-heading"
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-body"
});

// Shared metadata gives the project a clean baseline for previews and SEO.
export const metadata: Metadata = {
  title: "Demo | Luxury Interior Design Studio",
  description: "A premium multi-page interior design website built with Next.js."
};

// Route/page structure
// Layout wraps every page with the shared navbar and footer so the brand system stays consistent.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} bg-grain`}>
        <div className="min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

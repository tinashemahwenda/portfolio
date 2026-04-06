import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

// Configure the Alexandria font
const alexandria = Alexandria({
  subsets: ["latin"],
  // This variable allows Tailwind to easily hook into it
  variable: "--font-alexandria",
});

export const metadata: Metadata = {
  title: "Tinashe Mahwenda | Product Designer",
  description: "Product Design Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${alexandria.variable} font-sans antialiased bg-white`}>
        {/* Wrap children here */}
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
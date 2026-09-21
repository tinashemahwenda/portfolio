import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Configure the font with the subsets and weights you need
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  // This variable allows Tailwind to pick it up cleanly
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Tinashe | Product Designer",
  description: "Product Designer specializing in high-performance UI and user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply the font variable and base smoothing classes to the HTML tag
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import ScrollProjects from "@/sections/ScrollProjects";
import Gallery from "@/sections/Gallery";
import About from "@/sections/About";
import Footer from "@/sections/Footer";
import TitleMarquee from "@/components/TitleMarquee";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TitleMarquee />
      <ScrollProjects />
      <Gallery />
      <About />

      <Footer />
    </main>
  );
}
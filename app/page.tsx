import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import ScrollProjects from "@/sections/ScrollProjects";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ScrollProjects />
      <Footer />
    </main>
  );
}
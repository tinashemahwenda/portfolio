"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

// 1. Mock Database: In a real app, this might come from a CMS like Sanity or Contentful.
// For now, we store it here. The 'slug' must match the URL.
const projectData = {
    "albinism-konnect": {
        title: "Albinism Konnect",
        subtitle: "Connecting families globally through seamless funeral streaming.",
        role: "Lead Product Designer",
        timeline: "3 Months",
        services: ["UX Research", "UI Design", "Prototyping"],
        heroImage: "/projects/muzukuru-mockup.png", // Reusing your existing mockup
        challenge: "Funerals are deeply cultural and emotional events. When families are separated by borders, standard streaming tools like Zoom feel too corporate and disjointed. The challenge was to design a platform that felt respectful, culturally aligned, and incredibly easy to use for older generations who might not be tech-savvy.",
        solution: "We designed a native mobile experience focused on accessibility. We introduced a 'One-Tap Join' feature via SMS links, bypassing complex login screens. The interface uses a calming, muted color palette, and we integrated a dedicated space for digital condolences and cultural rituals, making the stream feel like a shared communal space rather than a broadcast."
    },
    "old-mutual": {
        title: "Old Mutual",
        subtitle: "Predictive farming analytics for the modern agricultural era.",
        role: "UI/UX Designer",
        timeline: "6 Months",
        services: ["Dashboard Design", "Data Visualization", "Design System"],
        heroImage: "/projects/agrosense-mockup.png",
        challenge: "Farmers were overwhelmed by raw data points regarding soil moisture, weather patterns, and crop health. They didn't need more spreadsheets; they needed actionable insights. The existing tools were built for data scientists, not everyday farmers.",
        solution: "We created a heavily modular dashboard that prioritizes 'glanceability.' Using a card-based architecture, farmers can see critical alerts (e.g., 'Watering needed in Sector 4') immediately upon logging in. Complex AI predictions were simplified into traffic-light color codes (Red/Yellow/Green) to ensure quick decision-making in the field."
    },
    chema: {
        title: "AgroSense AI",
        subtitle: "Predictive farming analytics for the modern agricultural era.",
        role: "UI/UX Designer",
        timeline: "6 Months",
        services: ["Dashboard Design", "Data Visualization", "Design System"],
        heroImage: "/projects/agrosense-mockup.png",
        challenge: "Farmers were overwhelmed by raw data points regarding soil moisture, weather patterns, and crop health. They didn't need more spreadsheets; they needed actionable insights. The existing tools were built for data scientists, not everyday farmers.",
        solution: "We created a heavily modular dashboard that prioritizes 'glanceability.' Using a card-based architecture, farmers can see critical alerts (e.g., 'Watering needed in Sector 4') immediately upon logging in. Complex AI predictions were simplified into traffic-light color codes (Red/Yellow/Green) to ensure quick decision-making in the field."
    }
};

// ADD THIS NEW FUNCTION:
export function generateStaticParams() {
    // We grab all the keys from your projectData object (e.g., 'muzukuru', 'agrosense-ai')
    // and tell Next.js to build an HTML page for each one.
    return Object.keys(projectData).map((slug) => ({
        slug: slug,
    }));
}
export default function CaseStudy() {
    const params = useParams();
    const slug = params.slug as string;

    // Fetch the data based on the URL. If it doesn't exist, we can show a fallback.
    const project = projectData[slug as keyof typeof projectData];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
                Project not found.
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white selection:bg-black selection:text-white">
            <Navbar />

            {/* HEADER SECTION */}
            <section className="pt-48 pb-24 px-8 max-w-6xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors mb-16"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </Link>

                <div className="flex flex-col gap-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-extrabold tracking-tighter text-[#1A1A1A] leading-[1]"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl font-medium text-gray-500 max-w-3xl leading-snug"
                    >
                        {project.subtitle}
                    </motion.p>
                </div>

                {/* METADATA GRID */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 mt-12 border-t border-gray-100"
                >
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Role</h4>
                        <p className="font-semibold text-[#1A1A1A]">{project.role}</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Timeline</h4>
                        <p className="font-semibold text-[#1A1A1A]">{project.timeline}</p>
                    </div>
                    <div className="col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Services</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.services.map(service => (
                                <span key={service} className="text-sm font-semibold text-[#1A1A1A] bg-gray-100 px-3 py-1 rounded-full">
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* MASSIVE HERO IMAGE */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full px-4 md:px-8 max-w-[1400px] mx-auto mb-32"
            >
                <div className="relative aspect-[4/3] md:aspect-[21/9] w-full rounded-[2rem] overflow-hidden bg-gray-100">
                    <Image
                        src={project.heroImage}
                        alt={`${project.title} Hero`}
                        fill
                        className="object-cover"
                        priority // Forces this image to load instantly
                    />
                </div>
            </motion.section>

            {/* EDITORIAL TEXT LAYOUT */}
            <section className="px-8 max-w-5xl mx-auto mb-40">
                <div className="flex flex-col md:flex-row gap-16 md:gap-32 mb-24">
                    <div className="md:w-1/3">
                        <h3 className="text-3xl font-extrabold tracking-tight">The Challenge</h3>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                            {project.challenge}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                    <div className="md:w-1/3">
                        <h3 className="text-3xl font-extrabold tracking-tight">The Solution</h3>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                            {project.solution}
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
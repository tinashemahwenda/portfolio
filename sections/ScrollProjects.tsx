"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Albinism Konnect",
        slug: "albinism-konnect",
        desc: "Scaled the platform to 3x its original user base through improved accessibility & multilingual support.",
        tags: ["🏆 Davis Peace Project 2025", "Mobile", "Accessibility"],
        image: "/projects/albinism-konnect-background-gray.jpg",
        theme: "dark",
        // Update these paths to where you export your 1:1 square icon graphics
        icon: "/icons/albinism-green-icon.png"
    },
    {
        id: 2,
        title: "Old Mutual",
        slug: "old-mutual",
        desc: "Led the redesign of an AI-powered SaaS tenant portal which led to client retention.",
        tags: ["SaaS", "Dashboard", "AI"],
        image: "/projects/old-mutual-dash.png",
        theme: "light",
        icon: "/icons/old-mutual-icon.png"
    },
    {
        id: 3,
        title: "Autolog",
        slug: "autolog",
        desc: "Solving Workplace Punctuality Through Gamification & A GPS Tracking System.",
        tags: ["GPS", "Gamification"],
        image: "/projects/autolog-main-mockup.png",
        theme: "dark",
        icon: "/icons/autolog-icon.png"
    },
];

export default function ScrollProjects() {
    return (
        <section id="work" className="w-full pt-32 bg-white scroll-mt-20">
            {/* SECTION HEADER */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl"
                >
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#1A1A1A] mb-6">
                        Projects
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
                        Dive into the work. I am building products that leave massive impact.
                    </p>
                </motion.div>
            </div>

            {/* ALTERNATING PROJECT BLOCKS */}
            <div className="w-full flex flex-col">
                {projects.map((project, index) => {
                    const isDark = project.theme === "dark";
                    const isReversed = index % 2 !== 0;

                    return (
                        <div
                            key={project.id}
                            className={`w-full py-24 md:py-40 ${isDark ? "bg-[#1C1E22] text-white" : "bg-white text-[#1A1A1A] border-t border-gray-100"
                                }`}
                        >
                            <div
                                className={`max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 md:gap-24 items-center ${isReversed ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* TEXT COLUMN */}
                                <motion.div
                                    initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full md:w-5/12 flex flex-col items-start"
                                >
                                    {/* App Icon + Title Group aligned perfectly like the Figma file */}
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                                        <div className="relative w-16 h-16 rounded-[1.25rem] shadow-sm flex items-center justify-center shrink-0 overflow-hidden bg-white border border-black/5">
                                            <Image
                                                src={project.icon}
                                                alt={`${project.title} App Icon`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`text-xs font-semibold px-4 py-2 rounded-full border ${isDark
                                                    ? "bg-white/5 border-white/10 text-white/80"
                                                    : "bg-gray-50 border-gray-200 text-gray-600"
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className={`text-lg md:text-xl font-medium mb-10 leading-relaxed ${isDark ? "text-white/70" : "text-gray-500"
                                        }`}>
                                        {project.desc}
                                    </p>

                                    <Link
                                        href={`/work/${project.slug}`}
                                        className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-transform hover:scale-105 active:scale-95 ${isDark
                                            ? "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                                            : "bg-[#1A1A1A] hover:bg-black text-white"
                                            }`}
                                    >
                                        Read Showcase
                                    </Link>
                                </motion.div>

                                {/* IMAGE COLUMN */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full md:w-7/12 relative aspect-[4/3] md:aspect-[16/11] rounded-[2rem] overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-black/5 z-0" />
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} Interface`}
                                        fill
                                        className="object-cover object-center z-10 hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </motion.div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Fixed import

const projects = [
    {
        id: 1,
        title: "Albinism Konnect",
        slug: "albinism-konnect",
        desc: "Scaled the platform to 3x its original user base through improved accessibility & multilingual support",
        tags: ["🏆Awarded Davis Peace Project 2025"],
        image: "/portfolio/projects/albinism-konnect-background-gray.jpg",
        color: "#F3F4F6",
        textColor: "#111111"
    },
    {
        id: 2,
        title: "Old Mutual", // Put your actual title back
        slug: "old-mutual",
        desc: "Led the redesign of an AI-powered SaaS tenant portal which led to client retention",
        tags: ["SaaS", "Dashboard", "AI"],
        image: "/portfolio/projects/old-mutual-dash.png",
        color: "#E5E7EB",
        textColor: "#111111"
    },
    {
        id: 3,
        title: "CHEMA Wallet",
        slug: "chema",
        desc: "Led the full-cycle product design and developemnt for a Funeral Crowd-funding platform for people abroad",
        tags: ["Fintech", "Crowd-Funding"],
        image: "/portfolio/projects/chema.png",
        color: "#FFFFFF",
        textColor: "#111111"
    },
];

export default function ScrollProjects() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        // Adjusted padding for mobile
        <section ref={containerRef} id="work" className="relative pb-24 md:pb-32 pt-12 px-4 md:px-8 scroll-mt-24 md:scroll-mt-32 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 md:mb-24 px-2">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-[#1A1A1A]">
                        Selected Works
                    </h2>
                </div>

                <div className="relative flex flex-col gap-8 md:gap-24 mb-[5vh] md:mb-[10vh]">
                    {projects.map((project, index) => {
                        const targetScale = 1 - ((projects.length - index) * 0.04);
                        return (
                            <ProjectCard
                                key={project.id}
                                index={index}
                                project={project}
                                progress={scrollYProgress}
                                total={projects.length}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// --------------------------------------------------------
// Sub-Component: The Inner Card Layout
// --------------------------------------------------------

interface CardProps {
    index: number;
    project: typeof projects[0];
    progress: MotionValue<number>;
    total: number;
    targetScale: number;
}

const ProjectCard = ({ index, project, progress, total, targetScale }: CardProps) => {
    const range = [index * (1 / total), 1];
    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(progress, range, [1, 0.6]);

    const isDark = project.color === "#1A1A1A";

    return (
        <motion.div
            style={{
                scale,
                opacity,
                backgroundColor: project.color,
                color: project.textColor,
                // MAGIC FIX: We pass the specific offsets as CSS variables into the style object
                '--card-top-mobile': `calc(10vh + ${index * 16}px)`,
                '--card-top-desktop': `calc(15vh + ${index * 30}px)`
            } as unknown as React.CSSProperties}
            // We read those CSS variables using Tailwind's arbitrary values feature
            className="sticky top-[var(--card-top-mobile)] md:top-[var(--card-top-desktop)] w-full h-[80vh] md:h-[80vh] rounded-[2rem] md:rounded-[3rem] shadow-xl overflow-hidden border border-black/5 origin-top flex flex-col md:flex-row"
        >
            {/* LEFT COLUMN: Text & Details */}
            {/* On mobile, this takes 60% height to ensure text fits, on desktop 100% height */}
            <div className="w-full md:w-5/12 h-[55%] md:h-full p-6 sm:p-8 md:p-16 flex flex-col justify-center order-2 md:order-1">

                {/* Tags - smaller gap and text for mobile */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-1 md:px-3 md:py-1.5 rounded-full ${isDark ? 'bg-white/10 text-white/80' : 'bg-black/5 text-black/60'
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title & Description - scaled down slightly for mobile */}
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 tracking-tight leading-[1.05]">
                    {project.title}
                </h3>
                {/* line-clamp-3 ensures the description doesn't overflow on tiny iPhone screens */}
                <p className={`text-base md:text-xl font-medium mb-6 md:mb-10 line-clamp-3 md:line-clamp-none ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                    {project.desc}
                </p>

                <Link
                    href={`/work/${project.slug}`}
                    className={`inline-flex items-center justify-center gap-2 w-full md:w-fit px-6 py-3.5 md:py-3 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 ${isDark
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-[#1A1A1A] text-white hover:bg-black'
                        }`}
                >
                    View Case Study
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            <div className="w-full md:w-7/12 h-[45%] md:h-full relative overflow-hidden bg-black/5 shadow-[inset_10px_0_20px_rgba(0,0,0,0.03)] order-1 md:order-2 border-b border-black/5 md:border-b-0 md:border-l">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 z-0" />

                <Image
                    src={project.image}
                    alt={`${project.title} interface`}
                    fill
                    className="object-cover md:object-left-top object-center z-10 hover:scale-105 transition-transform duration-700 ease-out"
                />
            </div>
        </motion.div>
    );
}
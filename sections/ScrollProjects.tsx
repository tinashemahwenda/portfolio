"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollProjectCard from "../components/ScrollProjectCard";

const projectsData = [
    {
        title: "Albinism Konnect",
        category: "Health Tech",
        tags: ["Health Tech", "Android", "Accessibility"],
        description:
            "Scaled the platform to 3x its original user base through improved accessibility & multilingual support.",
        theme: "dark" as const,
    },
    {
        title: "Old Mutual",
        category: "Financial App",
        tags: ["UI/UX", "Web", "SaaS"],
        description:
            "Led the redesign of an AI-powered SaaS tenant portal which led to massive client retention.",
        theme: "light" as const,
    },
    {
        title: "CHEMA Wallet",
        category: "Fintech",
        tags: ["Fintech", "Crowd-funding", "iOS"],
        description:
            "Built a seamless digital wallet experience focusing on frictionless onboarding and secure transactions.",
        theme: "dark" as const,
    },
];

export default function ScrollProjects() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    // 1. Track global scroll for the main section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // 2. Track scroll specifically for the header element for the line animation
    const { scrollYProgress: headerProgress } = useScroll({
        target: headerRef,
        offset: ["start end", "end start"]
    });

    // 🎬 Line Animation: Animates width from 0 to 100% as you exit the header
    const lineWidth = useTransform(headerProgress, [0.3, 0.9], ["0%", "100%"]);

    return (
        // Total section height is h-[450vh] (400vh for cards + 50vh for the header to scroll by)
        <section id="work" ref={containerRef} className="h-[450vh] relative w-full bg-[#141414]">

            {/* SECTION HEADER (Non-sticky) */}
            <div ref={headerRef} className="bg-white pt-8 pb-24 md:pt-12 md:pb-32">
                <div className="max-w-6xl mx-auto flex flex-col items-start gap-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-7xl font-extrabold tracking-tighter text-[#1A1A1A] leading-tight"
                    >
                        Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed font-medium"
                    >
                        Dive into the secrets I use to design products that have massive impact
                    </motion.p>
                </div>
            </div>

            {/* Blue Separator Line - Sticky */}
            <div className="sticky top-0 z-40 bg-transparent">
                <motion.div style={{ width: lineWidth }} className="h-1 bg-blue-500 origin-left" />
            </div>

            {/* STICKY CONTAINER FOR CARDS */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* CARD 1 */}
                <ScrollProjectCard
                    project={projectsData[0]}
                    progress={scrollYProgress}
                    range={[0, 0.05, 0.35, 0.45]}
                    opacities={[1, 1, 1, 0]}
                    scales={[1, 1, 1, 0.95]}
                    yOffsets={[0, 0, 0, -40]}
                />

                {/* CARD 2 */}
                <ScrollProjectCard
                    project={projectsData[1]}
                    progress={scrollYProgress}
                    range={[0.35, 0.45, 0.65, 0.75]}
                    opacities={[0, 1, 1, 0]}
                    scales={[0.95, 1, 1, 0.95]}
                    yOffsets={[40, 0, 0, -40]}
                />

                {/* CARD 3 */}
                <ScrollProjectCard
                    project={projectsData[2]}
                    progress={scrollYProgress}
                    range={[0.65, 0.75, 0.95, 1]}
                    opacities={[0, 1, 1, 1]}
                    scales={[0.95, 1, 1, 1]}
                    yOffsets={[40, 0, 0, 0]}
                />
            </div>
        </section>
    );
}
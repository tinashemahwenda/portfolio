"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BadgeRotator from "../components/BadgeRotator";
import LogoMarquee from "../components/LogoMarquee";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    // 1. Text fades out first as it's at the very top
    const textY = useTransform(scrollY, [0, 400], [0, -120]);
    const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    // 2. Marquee fades out second
    const marqueeY = useTransform(scrollY, [0, 500], [0, -80]);
    const marqueeOpacity = useTransform(scrollY, [100, 400], [1, 0]);

    // 3. FIX: Mockups now wait until you've scrolled 400px before they even START fading
    // They will fully disappear around 800px (when you are deep into the next section)
    const mockupsY = useTransform(scrollY, [0, 800], [0, -60]);
    const mockupsOpacity = useTransform(scrollY, [400, 800], [1, 0]);
    const mockupsScale = useTransform(scrollY, [0, 800], [1, 0.95]);

    return (
        <section
            ref={containerRef}
            className="relative pt-48 pb-20 px-8 max-w-6xl mx-auto text-center flex flex-col items-center min-h-[90vh] justify-center"
        >

            <motion.div
                style={{ y: textY, opacity: textOpacity }}
                className="flex flex-col items-center w-full"
            >
                <BadgeRotator />

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.05] max-w-4xl"
                >
                    Designing digital experiences that drive engagement
                </motion.h1>
            </motion.div>


            <motion.div
                style={{ y: marqueeY, opacity: marqueeOpacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden mt-12 mb-12 z-20"
            >
                <LogoMarquee />
            </motion.div>

        </section>
    );
}
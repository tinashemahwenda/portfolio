"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BadgeRotator from "../components/BadgeRotator";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    const textY = useTransform(scrollY, [0, 400], [0, -120]);
    const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const mockupsY = useTransform(scrollY, [0, 500], [0, -40]);
    const mockupsOpacity = useTransform(scrollY, [100, 450], [1, 0]);
    const mockupsScale = useTransform(scrollY, [0, 500], [1, 0.95]);

    return (
        <section
            ref={containerRef}
            className="relative pt-48 pb-24 px-8 max-w-5xl mx-auto text-center flex flex-col items-center min-h-[85vh] justify-center"
        >
            <motion.div
                style={{ y: textY, opacity: textOpacity }}
                className="flex flex-col items-center w-full"
            >
                {/* NEW TICKER BADGE */}
                <BadgeRotator />

                {/* CLEAN, STATIC HEADLINE */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.05] mb-16 max-w-4xl"
                >
                    Designing digital experiences that drive engagement
                </motion.h1>
            </motion.div>

            <motion.div
                style={{ y: mockupsY, opacity: mockupsOpacity, scale: mockupsScale }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col md:flex-row gap-6 mt-4 relative z-10"
            >
                <div className="flex-1 bg-gray-50 rounded-[2rem] h-[400px] border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
                    <span className="text-gray-400 font-medium tracking-wide">Website Mockup</span>
                </div>
                <div className="flex-1 bg-gray-100 rounded-[2rem] h-[400px] shadow-sm flex items-center justify-center overflow-hidden">
                    <span className="text-gray-500 font-medium tracking-wide">Mobile Mockup</span>
                </div>
            </motion.div>
        </section>
    );
}
"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function Wrapped2025() {
    return (
        <main className="min-h-screen bg-white selection:bg-black selection:text-white">
            <Navbar />

            <section className="pt-48 pb-24 px-6 max-w-7xl mx-auto">
                <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors mb-16"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Work
                </Link>

                <div className="flex flex-col gap-8 max-w-4xl">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-6xl md:text-8xl font-extrabold tracking-tighter text-[#1A1A1A] leading-[1.05]"
                    >
                        2025 Wrapped
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-2xl md:text-3xl font-medium text-gray-500 leading-snug"
                    >
                        A visual retrospective of my year. Shipping cross-platform products, designing scalable systems, and pushing physical limits on the track.
                    </motion.p>
                </div>
            </section>

            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full px-4 md:px-6 max-w-5xl mx-auto mb-32"
            >
                <div className="relative w-full max-h-[75vh] aspect-video rounded-[2rem] overflow-hidden bg-black border border-black/5 shadow-2xl">

                </div>
            </motion.section>



            <Footer />
        </main>
    );
}
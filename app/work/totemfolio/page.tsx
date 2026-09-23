"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

export default function TotemfolioGallery() {
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
                        Totemfolio
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-2xl md:text-3xl font-medium text-gray-500 leading-snug"
                    >
                        A curated gallery of cultural totem badges, visual identity explorations, and premium merchandise applications.
                    </motion.p>
                </div>
            </section>

            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full px-4 md:px-6 max-w-[1400px] mx-auto mb-32"
            >
                <div className="relative aspect-[16/9] w-full rounded-[2rem] overflow-hidden bg-gray-50 border border-black/5">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-sm font-bold tracking-widest uppercase">Totemfolio Hero Graphic (16:9)</span>
                    </div>
                </div>
            </motion.section>

            <section className="px-6 max-w-7xl mx-auto mb-40">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col gap-12"
                >
                    <div className="flex items-center justify-between border-b border-gray-100 pb-8">
                        <h3 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A]">
                            Totem Badges
                        </h3>
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">01</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="aspect-square bg-neutral-50 rounded-[2rem] border border-gray-100 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105">
                                    <span className="text-xs font-bold tracking-widest uppercase">Badge {item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="px-6 max-w-7xl mx-auto mb-40">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col gap-12"
                >
                    <div className="flex items-center justify-between border-b border-gray-100 pb-8">
                        <h3 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A]">
                            Merchandise & Packaging
                        </h3>
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">02</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="aspect-[4/3] bg-neutral-50 rounded-[2rem] border border-gray-100 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105">
                                <span className="text-xs font-bold tracking-widest uppercase">Apparel Mockup</span>
                            </div>
                        </div>
                        <div className="aspect-[4/3] bg-neutral-50 rounded-[2rem] border border-gray-100 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105">
                                <span className="text-xs font-bold tracking-widest uppercase">Tote Bag Mockup</span>
                            </div>
                        </div>
                        <div className="md:col-span-2 aspect-[21/9] bg-[#1A1A1A] rounded-[2rem] flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center text-white/50 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105">
                                <span className="text-xs font-bold tracking-widest uppercase">Packaging Spread</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
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

export default function AgrosenseBrandManual() {
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
                        Agrosense
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-2xl md:text-3xl font-medium text-gray-500 leading-snug"
                    >
                        A comprehensive brand identity system and manual designed to establish trust and technological authority in the agricultural sector.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="pt-4"
                    >
                        <a
                            href="/agrosense-brand-manual.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white rounded-full text-sm font-bold transition-transform hover:scale-105 active:scale-95 w-fit"
                        >
                            View Brand Manual
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        </a>
                    </motion.div>
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
                        <span className="text-sm font-bold tracking-widest uppercase">Hero Brand Graphic (16:9)</span>
                    </div>
                </div>
            </motion.section>

            <section className="px-6 max-w-7xl mx-auto mb-40">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-12 gap-12"
                >
                    <div className="md:col-span-4">
                        <h3 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A] sticky top-32">
                            The Logomark
                        </h3>
                    </div>
                    <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="aspect-square bg-neutral-50 rounded-[2rem] border border-gray-100 flex items-center justify-center p-12">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Primary Logo</span>
                        </div>
                        <div className="aspect-square bg-[#1A1A1A] rounded-[2rem] flex items-center justify-center p-12">
                            <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Inverted Logo</span>
                        </div>
                        <div className="md:col-span-2 aspect-[21/9] bg-neutral-50 rounded-[2rem] border border-gray-100 flex items-center justify-center p-12">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Horizontal Lockup</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="px-6 max-w-7xl mx-auto mb-40">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-12 gap-12"
                >
                    <div className="md:col-span-4">
                        <h3 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A] sticky top-32">
                            Color System
                        </h3>
                    </div>
                    <div className="md:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { name: "Agro Green", hex: "#2E7D32", text: "text-white" },
                                { name: "Earth Brown", hex: "#5D4037", text: "text-white" },
                                { name: "Neutral Light", hex: "#F5F5F5", text: "text-[#1A1A1A]" },
                                { name: "Deep Charcoal", hex: "#1A1A1A", text: "text-white" }
                            ].map((color, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    <div
                                        className="w-full aspect-square rounded-2xl shadow-inner border border-black/5 flex items-end p-4"
                                        style={{ backgroundColor: color.hex }}
                                    >
                                        <span className={`text-sm font-bold tracking-wide ${color.text}`}>
                                            {color.hex}
                                        </span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-600">{color.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="px-6 max-w-7xl mx-auto mb-40">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-12 gap-12"
                >
                    <div className="md:col-span-4">
                        <h3 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A] sticky top-32">
                            Typography
                        </h3>
                    </div>
                    <div className="md:col-span-8 flex flex-col gap-12">
                        <div className="border-b border-gray-100 pb-12">
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Primary Typeface</p>
                            <h4 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] tracking-tighter mb-6">
                                Plus Jakarta Sans
                            </h4>
                            <p className="text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl">
                                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="px-6 max-w-7xl mx-auto mb-40">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="flex flex-col gap-8"
                >
                    <h3 className="text-3xl font-extrabold tracking-tight text-[#1A1A1A] mb-8">
                        Brand Applications
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="aspect-[4/3] bg-neutral-100 rounded-[2rem] border border-black/5 overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <span className="text-xs font-bold tracking-widest uppercase">Stationery Mockup</span>
                            </div>
                        </div>
                        <div className="aspect-[4/3] bg-neutral-100 rounded-[2rem] border border-black/5 overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <span className="text-xs font-bold tracking-widest uppercase">Digital Mockup</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
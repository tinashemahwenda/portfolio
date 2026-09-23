"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Explicitly typed as Variants to resolve strict TypeScript inference errors
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <section id="contact" className="w-full bg-white pt-40 pb-12 px-6 flex flex-col items-center relative overflow-hidden">
            {/* Subtle background accent block to match the design reference */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-50 -z-10 hidden md:block" />

            {/* MAIN CTA AREA */}
            <div className="flex flex-col items-center justify-center max-w-3xl text-center mb-32 w-full">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="flex flex-col items-center"
                >
                    <motion.div variants={fadeUp} className="mb-10">
                        <Image
                            src="/logo.png"
                            alt="Tinashe Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain"
                        />
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#1A1A1A] mb-12 leading-[1.1]"
                    >
                        Lets Work Together
                    </motion.h2>

                    <motion.div variants={fadeUp}>
                        <a
                            href="mailto:hello@tinashe.design"
                            className="inline-flex items-center justify-center bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-black transition-transform hover:scale-105 active:scale-95"
                        >
                            Talk to Tinashe
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* FOOTER BOTTOM BAR */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-full max-w-7xl mt-auto pt-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-8"
            >
                {/* Contact Info (Left) aligned to the layout structure[cite: 9] */}
                <div className="flex flex-col items-center md:items-start gap-1 text-sm font-bold text-[#1A1A1A]">
                    <a href="tel:+263712228783" className="hover:text-blue-600 transition-colors tracking-wide">
                        +263 71 222 8783
                    </a>
                    <a href="mailto:hello@tinashe.design" className="hover:text-blue-600 transition-colors tracking-wide">
                        hello@tinashe.design
                    </a>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        © {currentYear} Tinashe
                    </span>

                    {/* Social links block aligned to the bottom right[cite: 9] */}
                    <div className="flex items-center gap-3">
                        {['LinkedIn', 'Twitter', 'Dribbble'].map((social, i) => (
                            <a
                                key={i}
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors"
                                aria-label={social}
                            >
                                <span className="sr-only">{social}</span>
                                <div className="w-4 h-4 bg-gray-300 rounded-sm" />
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
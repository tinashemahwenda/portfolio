"use client";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

export default function Footer() {
    const lenis = useLenis();

    const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // Uses Lenis for a beautiful cinematic glide back to the top
        lenis?.scrollTo(0, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    };

    return (
        <footer className="bg-[#111111] text-white pt-24 pb-8 px-8 rounded-t-[3rem] mt-[-2rem] relative z-30">
            <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-[50vh]">

                {/* Top Section: Massive Call to Action */}
                <div className="flex flex-col items-start gap-8 mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] max-w-4xl"
                    >
                        Have an idea? <br />
                        <span className="text-gray-500">Let’s bring it to life.</span>
                    </motion.h2>

                    <motion.a
                        href="mailto:hello@tinashe.design" // Replace with your actual email
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white text-[#111] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors duration-300"
                    >
                        Talk to Tinashe
                    </motion.a>
                </div>

                {/* Bottom Section: Links and Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800 text-sm font-medium text-gray-400">

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Dribbble</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
                    </div>

                    <div className="flex items-center gap-8">
                        <p>© {new Date().getFullYear()} Tinashe. All rights reserved.</p>

                        <a
                            href="#top"
                            onClick={handleBackToTop}
                            className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                        >
                            Back to top
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 19V5M5 12l7-7 7 7" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}
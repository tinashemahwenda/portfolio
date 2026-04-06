"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useLenis } from "lenis/react";
// Import Image if you end up using a PNG instead of an SVG
import Image from "next/image";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const lenis = useLenis();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        latest > 50 ? setIsScrolled(true) : setIsScrolled(false);
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        lenis?.scrollTo(`#${id}`, {
            offset: -100,
            immediate: true,
        });
    };

    return (
        // Outer div handles the fixed positioning and centering
        <div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-6 px-4 pointer-events-none">
            <motion.nav
                variants={{ visible: { y: 0 }, hidden: { y: "-150%" } }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                // The inner nav is now a constrained pill
                className={`w-full max-w-4xl flex justify-between items-center px-6 py-4 rounded-full pointer-events-auto transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg shadow-black/5" : "bg-transparent"
                    }`}
            >

                <div
                    className="cursor-pointer flex items-center"
                    onClick={() => lenis?.scrollTo(0, { immediate: true })}
                >
                    <img
                        src="/logo.png"
                        alt="Tinashe Logo"
                        className="h-7 md:h-8 w-auto" // Slightly smaller logo fits the pill better
                    />
                </div>
                <div className="hidden md:flex gap-2 text-sm font-medium text-gray-600">

                </div>
                <div className="hidden md:flex gap-2 text-sm font-medium text-gray-600">

                </div>

                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                    <a href="#work" onClick={(e) => scrollToSection(e, "work")} className="hover:text-black transition-colors">Work</a>
                    <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-black transition-colors">About</a>
                    <a
                        href="/tinashe-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors flex items-center gap-1"
                    >
                        Resume

                    </a>
                </div>
                <div className="hidden md:flex gap-2 text-sm font-medium text-gray-600">

                </div>

                <button className="bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black transition-colors">
                    Talk to Tinashe
                </button>

            </motion.nav>
        </div>
    );
}
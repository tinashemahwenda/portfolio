"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        // Add a subtle border/shadow if we've scrolled past the very top
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Hide navbar if scrolling down and past 150px. Show if scrolling up.
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} // Premium easing
            className={`fixed top-0 w-full flex justify-between items-center px-8 py-6 z-50 transition-colors duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100" : "bg-transparent"
                }`}
        >
            <div className="font-bold text-2xl tracking-tighter">T.</div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                <Link href="#work" className="hover:text-black transition-colors">Work</Link>
                <Link href="#about" className="hover:text-black transition-colors">About</Link>
                <Link href="#resume" className="hover:text-black transition-colors">Resume</Link>
            </div>
            <button className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors">
                Talk to Me
            </button>
        </motion.nav>
    );
}
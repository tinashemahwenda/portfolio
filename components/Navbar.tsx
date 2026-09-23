"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const pathname = usePathname();
    const lenis = useLenis();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
        if (isExpanded) {
            setIsExpanded(false);
        }
    });

    const isCollapsed = isScrolled && !isExpanded;

    const handleLogoClick = (e: React.MouseEvent) => {
        if (isCollapsed) {
            e.preventDefault();
            setIsExpanded(true);
        } else if (pathname === "/") {
            e.preventDefault();
            // Added fallback to native scroll if lenis is unmounted
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (pathname === "/") {
            e.preventDefault();
            const target = document.querySelector(id);

            if (target) {
                // Bulletproof routing: Use Lenis if ready, otherwise fallback to native DOM scrolling
                if (lenis) {
                    lenis.scrollTo(id, { offset: -100 });
                } else {
                    const top = target.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }
        }
        setIsExpanded(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-6 px-4 pointer-events-none">
            <motion.nav
                layout
                initial={false}
                animate={{
                    backgroundColor: isCollapsed ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.85)",
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto max-w-full flex items-center p-2 rounded-full backdrop-blur-xl border border-black/5 shadow-lg shadow-black/[0.03] overflow-hidden"
            >
                <motion.div layout className="shrink-0 z-20">
                    <Link
                        href="/"
                        onClick={handleLogoClick}
                        className={`flex items-center justify-center rounded-full transition-colors duration-300 ${isCollapsed ? "w-12 h-12 bg-gray-100 hover:bg-gray-200" : "w-12 h-12 bg-transparent hover:bg-black/5"
                            }`}
                    >
                        <Image
                            src="/logo.png"
                            alt="Tinashe Logo"
                            width={24}
                            height={24}
                            className="w-6 h-6 object-contain"
                            priority
                        />
                    </Link>
                </motion.div>

                <AnimatePresence initial={false}>
                    {!isCollapsed && (
                        <motion.div
                            layout
                            initial={{ width: 0, opacity: 0 }}
                            // FIX: Changed from "auto" to "max-content" to prevent the button from truncating on small mobile screens
                            animate={{ width: "max-content", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center overflow-hidden"
                        >
                            <div className="hidden md:flex items-center gap-8 pl-6 pr-8 text-sm font-bold text-gray-500 whitespace-nowrap">
                                <Link
                                    href="/#work"
                                    onClick={(e) => handleNavClick(e, "#work")}
                                    className="hover:text-black transition-colors"
                                >
                                    Work
                                </Link>
                                <Link
                                    href="/#about"
                                    onClick={(e) => handleNavClick(e, "#about")}
                                    className="hover:text-black transition-colors"
                                >
                                    About
                                </Link>
                                <a
                                    // FIX: Updated to match the actual file name defined in your About.tsx section
                                    href="/tinashe-mahwenda-product-designer-2026.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black transition-colors"
                                >
                                    Resume
                                </a>
                            </div>

                            <div className="pl-2 md:pl-0 shrink-0">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsExpanded(false)}
                                    className="bg-[#1A1A1A] text-white px-4 py-2.5 md:px-6 md:py-3 rounded-full text-sm font-bold tracking-wide hover:bg-black transition-transform active:scale-95 inline-block whitespace-nowrap"
                                >
                                    Talk to Tinashe
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
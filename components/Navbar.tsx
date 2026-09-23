"use client";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isManuallyExpanded, setIsManuallyExpanded] = useState(false);
    const [pathname, setPathname] = useState("/");
    const lenis = useLenis();

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPathname(window.location.pathname);
        }
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
        if (isManuallyExpanded) {
            setIsManuallyExpanded(false);
        }
    });

    const isCollapsed = isScrolled && !isManuallyExpanded;

    const handleLogoClick = (e: React.MouseEvent) => {
        if (isCollapsed) {
            e.preventDefault();
            setIsManuallyExpanded(true);
        } else if (pathname === "/") {
            e.preventDefault();
            lenis?.scrollTo(0, { immediate: true });
        }
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (pathname === "/") {
            e.preventDefault();
            lenis?.scrollTo(`#${id}`, { offset: -100, immediate: true });
        }
        setIsManuallyExpanded(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-6 px-4 pointer-events-none">
            <motion.nav
                layout
                initial={false}
                animate={{
                    backgroundColor: isCollapsed ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto flex items-center p-2 rounded-full backdrop-blur-xl border border-black/5 shadow-lg shadow-black/[0.03] overflow-hidden"
            >
                <motion.div layout>
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
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center whitespace-nowrap overflow-hidden"
                        >
                            <div className="flex items-center gap-8 pl-6 pr-8 text-sm font-medium text-gray-600">
                                <Link
                                    href="/#work"
                                    onClick={(e) => handleNavClick(e, "work")}
                                    className="hover:text-black transition-colors"
                                >
                                    Work
                                </Link>
                                <Link
                                    href="/#about"
                                    onClick={(e) => handleNavClick(e, "about")}
                                    className="hover:text-black transition-colors"
                                >
                                    About
                                </Link>
                                <a
                                    href="/tinashe-resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black transition-colors"
                                >
                                    Resume
                                </a>
                            </div>
                            <a
                                href="mailto:hello@tinashe.design"
                                className="bg-[#1A1A1A] text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-black transition-transform active:scale-95"
                            >
                                Talk to Tinashe
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
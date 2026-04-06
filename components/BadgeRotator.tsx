"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const statements = [
    "The re-imagined Kuluz Branding",
    "Scaling platforms to 5x users",
    "Crafting award-winning FinTech apps",
    "Elevating SaaS user experiences",
    "Designing for massive impact"
];

export default function BadgeRotator() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % statements.length);
        }, 3000); // Changes every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        // Remove background, padding, rounded corners, border. Apply new text color.
        // Keep flex layout and spacing.
        <motion.div
            layout
            className="text-gray-700 text-xs font-semibold mb-8 flex items-center gap-2 overflow-hidden"
        >
            {/* The simple blinking green dot on the left - stays green */}
            <motion.div layout className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />

            {/* The rotating text */}
            <div className="relative flex items-center justify-center">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                        key={statements[index]}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="whitespace-nowrap"
                    >
                        {statements[index]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
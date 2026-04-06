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
        // 'layout' tells Framer Motion to smoothly animate changes in width/height
        <motion.div
            layout
            className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-semibold mb-8 flex items-center gap-2 overflow-hidden border border-green-100"
        >
            {/* The simple blinking dot on the left */}
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
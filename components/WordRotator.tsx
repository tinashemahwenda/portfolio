"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["engagement", "growth", "retention", "impact"];

export default function WordRotator() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500); // Changes every 2.5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="inline-block relative w-[300px] text-blue-600 text-left">
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 40, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -40, rotateX: 90 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 origin-center"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
            {/* Invisible placeholder to maintain layout width/height */}
            <span className="opacity-0">{words[0]}</span>
        </span>
    );
}
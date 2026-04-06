"use client";
import { motion } from "framer-motion";

// Replace these with your actual professional titles and skills
const titles = [
    "Product Designer",
    "UI/UX Designer",
    "Creative Strategist",
    "Interaction Designer",

];

export default function TitleMarquee() {
    // We duplicate the array 4 times to ensure it spans the widest ultra-wide monitors
    // before the loop needs to reset.
    const loopCount = 4;
    const displayTitles = Array(loopCount).fill(titles).flat();

    return (
        // High-contrast dark background for a premium divider look
        <div className="w-full overflow-hidden bg-[#1A1A1A] text-white py-5 flex items-center z-20 relative">
            <motion.div
                className="flex items-center whitespace-nowrap w-max"
            // Because we multiplied the array by 4, moving it exactly -25% to the left 
            // shifts it exactly one "set" over, creating a mathematically perfect, invisible loop.

            >
                {displayTitles.map((title, index) => (
                    <div key={index} className="flex items-center">
                        <span className="text-sm md:text-base font-extrabold uppercase tracking-[0.2em] px-8 md:px-12">
                            {title}
                        </span>
                        {/* Premium 4-point star separator */}
                        <span className="text-gray-600 text-lg opacity-50">✦</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
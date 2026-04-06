"use client";
import { motion } from "framer-motion";

const logos = [
    { name: "CHEMA", src: "/portfolio/logos/chema.png" },
    { name: "MUZUKURU", src: "/portfolio/logos/muzukuru.png" },
    { name: "agrosense ai", src: "/portfolio/logos/agrosense.png" },
    { name: "Albinism Konnect", src: "/portfolio/logos/albinism-konnect.png" },
    { name: "Rideo", src: "/portfolio/logos/old_mutual_logo.png" },
    { name: "Farmers' Magazine", src: "/portfolio/logos/rt.png" },
];

export default function LogoMarquee() {
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <div className="relative w-full overflow-hidden py-12 flex items-center z-20">

            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-30 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-30 pointer-events-none" />

            <motion.div
                className="flex gap-20 md:gap-32 items-center whitespace-nowrap w-max"
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{
                    ease: "linear",
                    duration: 30,
                    repeat: Infinity,
                }}
            >
                {duplicatedLogos.map((logo, index) => (
                    <div
                        key={index}
                        // ADDED: shrink-0 is crucial here. It prevents Flexbox from squishing the logos to 0 width.
                        className="flex items-center opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default shrink-0"
                    >
                        {/* CHANGED: Swapped back to standard img tag to prevent Next.js layout conflicts */}
                        <img
                            src={logo.src}
                            alt={`${logo.name} logo`}
                            className="h-10 md:h-10 w-auto object-contain"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
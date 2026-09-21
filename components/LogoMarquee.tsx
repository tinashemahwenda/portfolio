"use client";
import { motion } from "framer-motion";

const logos = [
    { name: "CHEMA", src: "/logos/chema.png" },
    { name: "MUZUKURU", src: "/logos/muzukuru.png" },
    { name: "agrosense ai", src: "/logos/agrosense.png" },
    { name: "Albinism Konnect", src: "/logos/albinism-konnect.png" },
    { name: "Rideo", src: "/logos/old_mutual_logo.png" },
    { name: "Farmers' Magazine", src: "/logos/rt.png" },
];

export default function LogoMarquee() {
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <div
            className="relative w-full max-w-7xl mx-auto overflow-hidden py-12 flex items-center z-20"
            style={{
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)'
            }}
        >
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
                        className="flex items-center opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default shrink-0"
                    >
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
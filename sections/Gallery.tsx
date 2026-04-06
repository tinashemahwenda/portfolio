"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Replace these srcs with your actual image paths in the public folder
const designs = [
    {
        id: 1,
        src: "/gallery/first-mutual.png",
        alt: "Fintech Dashboard UI",
        // Makes this item span 2 columns and 2 rows on desktop for emphasis
        className: "md:col-span-2 md:row-span-2"
    },
    {
        id: 2,
        src: "/gallery/mms-login.png",
        alt: "Mobile App Onboarding",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 3,
        src: "/gallery/mms-login.png",
        alt: "SaaS Analytics",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 4,
        src: "/gallery/mms-login.png",
        alt: "E-commerce checkout",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 5,
        src: "/gallery/mms-login.png",
        alt: "Health App typography",
        // Spans 2 columns to break up the layout
        className: "md:col-span-2 md:row-span-1"
    },
];

export default function Gallery() {
    return (
        <section className="py-24 md:py-32 bg-[#F8F9FA] px-8">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#1A1A1A] mb-4"
                        >
                            Visual Explorations
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-500 font-medium"
                        >
                            A collection of interfaces, concepts, and components.
                        </motion.p>
                    </div>
                </div>

                {/* The Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
                    {designs.map((design, index) => (
                        <motion.div
                            key={design.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            // Group class enables hover effects on children
                            className={`relative rounded-3xl overflow-hidden group bg-gray-200 ${design.className}`}
                        >
                            {/* Fallback placeholder color if image hasn't loaded */}
                            <div className="absolute inset-0 bg-gray-200 z-0" />

                            {/* Premium Hover Effect: Slow scale up */}
                            <Image
                                src={design.src}
                                alt={design.alt}
                                fill
                                className="object-contain z-10 transition-transform duration-700 ease-out group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Subtle gradient overlay that appears on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-20 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
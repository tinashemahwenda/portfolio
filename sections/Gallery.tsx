"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const galleryItems = [
    {
        id: 1,
        title: "Agrosense",
        category: "Brand Identity & Manual",
        // Update this path to your actual Agrosense thumbnail
        image: "/projects/agrosense-banner.png",
        href: "/work/agrosense-brand", // The route for your brand manual page
        className: "md:col-span-2 aspect-[16/9]",
        isVideo: false,
    },
    {
        id: 2,
        title: "Koloi Brand",
        category: "Identity",
        // Update this path to your actual Koloi thumbnail
        image: "/projects/koloi-banner-2.png",
        href: "/work/koloi-brand",
        className: "md:col-span-1 aspect-[4/5] md:aspect-auto",
        isVideo: false,
    },
    {
        id: 3,
        title: "Totemfolio",
        category: "Badges & Merch",
        // Update this path to your actual Totemfolio thumbnail
        image: "/projects/totemfolio-banner.png",
        href: "/work/totemfolio",
        className: "md:col-span-1 aspect-[4/5] md:aspect-auto",
        isVideo: false,
    },
    {
        id: 4,
        title: "2025 Wrapped",
        category: "Video Reel",
        // Update this path to your video thumbnail
        image: "/projects/wrapped-banner.png",
        href: "/work/wrapped-2025",
        className: "md:col-span-2 aspect-[16/9]",
        isVideo: true, // Triggers the play button overlay
    },
];

export default function Gallery() {
    return (
        <section className="w-full bg-neutral-50 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-neutral-900 mb-4">
                        Visual & Brand Design
                    </h2>
                    <p className="text-lg text-neutral-500 font-medium max-w-2xl">
                        A selection of editorial layouts, brand identities, and graphic design explorations that inform my visual approach to product design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`group relative overflow-hidden rounded-[2rem] bg-neutral-200 ${item.className}`}
                        >
                            <Link href={item.href} className="absolute inset-0 z-40 block w-full h-full">
                                <span className="sr-only">View {item.title}</span>
                            </Link>

                            <div className="absolute inset-0 bg-neutral-200 z-0" />

                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover z-10 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                            />

                            {/* Dark gradient overlay on hover for legibility */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Play Button Overlay for Videos */}
                            {item.isVideo && (
                                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white transition-transform duration-500 group-hover:scale-110">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="ml-1">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    </div>
                                </div>
                            )}

                            {/* Text Content */}
                            <div className="absolute bottom-0 left-0 z-30 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1] pointer-events-none">
                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
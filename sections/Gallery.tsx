"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
    {
        id: 1,
        title: "Newspaper Layout",
        category: "Editorial Design",
        image: "/portfolio/gallery/landing.png",
        className: "md:col-span-2 aspect-[16/9]",
    },
    {
        id: 2,
        title: "Brand Identity",
        category: "Branding",
        image: "/portfolio/gallery/branding-1.jpg",
        className: "md:col-span-1 aspect-square md:aspect-auto",
    },
    {
        id: 3,
        title: "Logo Mark",
        category: "Identity",
        image: "/portfolio/gallery/first-mutual.png",
        className: "md:col-span-1 aspect-square md:aspect-auto",
    },
    {
        id: 4,
        title: "Magazine Spread",
        category: "Print",
        image: "/portfolio/gallery/contents.png",
        className: "md:col-span-2 aspect-[16/9]",
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
                            <div className="absolute inset-0 bg-neutral-200 z-0" />

                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover z-10 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                            />

                            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute bottom-0 left-0 z-30 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]">
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
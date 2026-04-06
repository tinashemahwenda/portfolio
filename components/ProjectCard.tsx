"use client";
import { motion } from "framer-motion";

interface ProjectProps {
    title: string;
    subtitle: string;
    tags: string[];
    description: string;
    theme: "dark" | "light";
    reverse?: boolean;
}

export default function ProjectCard({ title, subtitle, tags, description, theme, reverse }: ProjectProps) {
    const isDark = theme === "dark";

    return (
        <div className={`w-full py-24 ${isDark ? "bg-[#202124] text-white" : "bg-white text-[#1A1A1A]"}`}>
            <div className={`max-w-6xl mx-auto px-8 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1 space-y-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-black font-bold text-xl shadow-sm">
                            {title.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold">{title}</h3>
                            <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>{subtitle}</p>
                        </div>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        {tags.map((tag) => (
                            <span key={tag} className={`text-xs px-3 py-1 rounded-full border ${isDark ? "border-gray-600 text-gray-300" : "border-gray-200 text-gray-600"}`}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        {description}
                    </p>

                    <button className={`px-6 py-3 rounded-full text-sm font-medium transition-colors border ${isDark
                            ? "border-gray-600 hover:bg-white hover:text-black"
                            : "bg-[#1A1A1A] text-white hover:bg-black"
                        }`}>
                        Read Showcase
                    </button>
                </motion.div>

                {/* Image Mockup Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full h-[500px] bg-black/5 rounded-3xl flex items-center justify-center"
                >
                    <span className="opacity-50">App Mockup Area</span>
                </motion.div>

            </div>
        </div>
    );
}
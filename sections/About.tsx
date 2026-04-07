"use client";
import { motion } from "framer-motion";

// 1. Added your work experience data
const experience = [
    {
        role: "Lead Product Designer",
        company: "Agrosense AI, South Africa",
        date: "2025 — Present",
        desc: "Spearheaded the design system and led a team of 3 designers to overhaul the core banking app, increasing user retention by 24%."
    },
    {
        role: "Product Designer",
        company: "Muzukuru Funeral Streaming, Harare",
        date: "2025-2026",
        desc: "Designed accessible patient portals and telemedicine dashboards used by over 50,000 monthly active users."
    },
    {
        role: "Mobile App Developer",
        company: "Golden Glow, Eastern Cape",
        date: "2016 — 2018",
        desc: "Crafted high-converting landing pages, branding identities, and mobile prototypes for early-stage startups."
    }
];

const expertise = [
    "Product Strategy",
    "UI/UX Design",
    "Mobile App Development",
    "Design Systems",
    "Prototyping",
];

export default function About() {
    return (
        <section id="about" className="py-24 md:py-40 px-8 bg-white overflow-hidden scroll-mt-32">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

                {/* LEFT COLUMN: Sticky Headline */}
                <div className="md:w-1/3">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#1A1A1A] md:sticky md:top-32"
                    >
                        A bit about <br /> the designer behind the work.
                    </motion.h2>
                </div>

                {/* RIGHT COLUMN: Bio, Experience, Expertise */}
                <div className="md:w-2/3 space-y-16">

                    {/* Bio Paragraph */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                            I’m Tinashe, a Product Designer based in Zimbabwe. I specialize in
                            turning complex problems into simple, thumb-stopping mobile experiences
                            that feel effortless and drive real business outcomes.
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            With over 5 years of experience, I’ve worked with startups and
                            established brands across fintech, health-tech, and SaaS. I believe
                            that great design isn't just about how it looks, but how it works
                            to solve a user's pain point.
                        </p>
                    </motion.div>

                    {/* NEW: WORK EXPERIENCE TIMELINE */}
                    <div className="pt-8 border-t border-gray-100">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">
                            Experience
                        </h4>
                        <div className="flex flex-col gap-12">
                            {experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }} // Staggers the entrance
                                    className="group"
                                >
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3 gap-2">
                                        <h3 className="text-2xl font-bold text-[#1A1A1A]">
                                            {job.role}
                                        </h3>
                                        <span className="text-sm font-bold text-gray-400 tracking-wider">
                                            {job.date}
                                        </span>
                                    </div>
                                    <div className="text-lg font-semibold text-blue-600 mb-3">
                                        {job.company}
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {job.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Expertise List */}
                    <div className="pt-8 border-t border-gray-100">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">
                            Expertise
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                            {expertise.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 py-4 border-b border-gray-50"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
                                    <span className="text-lg font-bold text-[#1A1A1A]">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Download Resume Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="pt-8"
                    >
                        <a
                            href="/portfolio/tinashe-mahwenda-product-designer-2026.pdf"
                            download="Tinashe_Resume.pdf"
                            className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-black hover:scale-105 active:scale-95 transition-all duration-300 group"
                        >
                            Download Resume
                            <svg
                                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="transition-transform duration-300 group-hover:translate-y-1"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
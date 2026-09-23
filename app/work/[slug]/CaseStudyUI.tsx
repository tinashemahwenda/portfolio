"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

type Section = {
    title: string;
    content: string[];
    quote?: string;
    quoteAuthor?: string;
    list?: { heading?: string; text: string; image?: string }[];
    images?: string[];
};

type ProjectRef = {
    slug: string;
    title: string;
    subtitle: string;
};

type Props = {
    project: any;
    prevProject: ProjectRef;
    nextProject: ProjectRef;
};

export default function CaseStudyUI({ project, prevProject, nextProject }: Props) {
    return (
        <main className="min-h-screen bg-white selection:bg-[#1A1A1A] selection:text-white">
            <Navbar />

            <section className="pt-48 pb-24 px-8 max-w-6xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#1A1A1A] transition-colors mb-16"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </Link>

                <div className="flex flex-col gap-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-extrabold tracking-tighter text-[#1A1A1A] leading-[1]"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-3xl font-medium text-gray-500 max-w-3xl leading-snug"
                    >
                        {project.subtitle}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 mt-12 border-t border-gray-100"
                >
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Role</h4>
                        <p className="font-semibold text-[#1A1A1A]">{project.role}</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Timeline</h4>
                        <p className="font-semibold text-[#1A1A1A]">{project.timeline}</p>
                    </div>
                    <div className="col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Services</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.services.map((service: string) => (
                                <span key={service} className="text-sm font-semibold text-[#1A1A1A] bg-gray-100 px-3 py-1 rounded-full">
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full px-4 md:px-8 max-w-[1400px] mx-auto mb-32"
            >
                <div className="relative aspect-[4/3] md:aspect-[21/9] w-full rounded-[2rem] overflow-hidden bg-gray-100">
                    <Image
                        src={project.heroImage}
                        alt={`${project.title} Hero`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.section>

            <section className="px-8 max-w-5xl mx-auto mb-24">
                {project.sections.map((section: Section, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col md:flex-row gap-12 md:gap-32 mb-24 md:mb-40"
                    >
                        <div className="md:w-1/3">
                            <h3 className="text-3xl font-extrabold tracking-tight md:sticky md:top-32 text-[#1A1A1A]">
                                {section.title}
                            </h3>
                        </div>

                        <div className="md:w-2/3 space-y-10">
                            {section.quote && (
                                <blockquote className="border-l-4 border-blue-600 pl-6 md:pl-8 py-2 mb-12">
                                    <p className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] tracking-tight leading-snug mb-4">
                                        "{section.quote}"
                                    </p>
                                    {section.quoteAuthor && (
                                        <footer className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                                            — {section.quoteAuthor}
                                        </footer>
                                    )}
                                </blockquote>
                            )}

                            <div className="space-y-6">
                                {section.content.map((paragraph, i) => (
                                    <p key={i} className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {section.list && (
                                <ul className="space-y-12 pt-8 border-t border-gray-100 mt-8">
                                    {section.list.map((item, i) => (
                                        <li key={i} className="flex flex-col md:flex-row gap-6">
                                            <div className="hidden md:block w-2.5 h-2.5 mt-3 rounded-full bg-[#1A1A1A] shrink-0" />
                                            <div className="w-full">
                                                {item.heading && (
                                                    <h4 className="text-xl font-extrabold text-[#1A1A1A] mb-2 tracking-tight">
                                                        {item.heading}
                                                    </h4>
                                                )}
                                                <p className="text-lg text-gray-600 leading-relaxed font-medium mb-6">
                                                    {item.text}
                                                </p>

                                                {item.image && (
                                                    <div className="w-full relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
                                                        {item.image === "placeholder" ? (
                                                            <>
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 opacity-50">
                                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                                                    <polyline points="21 15 16 10 5 21" />
                                                                </svg>
                                                                <span className="text-xs font-bold tracking-widest uppercase">Feature Detail</span>
                                                            </>
                                                        ) : (
                                                            <Image src={item.image} alt="Feature visual" fill className="object-cover" />
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {section.images && section.images.length > 0 && (
                                <div className="pt-8 w-full flex flex-col gap-12">
                                    {section.images.map((img, imgIndex) => (
                                        img === "placeholder" ? (
                                            <div key={imgIndex} className="w-full aspect-[16/10] rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 transition-colors hover:bg-gray-100">
                                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 opacity-50">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                                    <polyline points="21 15 16 10 5 21" />
                                                </svg>
                                                <span className="text-base font-bold tracking-widest uppercase">UI Mockup {imgIndex + 1}</span>
                                            </div>
                                        ) : (
                                            <div key={imgIndex} className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 shadow-sm border border-black/5">
                                                <Image
                                                    src={img}
                                                    alt={`Visual ${imgIndex + 1}`}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                                                />
                                            </div>
                                        )
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </section>

            <section className="w-full border-t border-gray-100 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    <Link
                        href={`/work/${prevProject.slug}`}
                        className="group p-12 md:p-24 flex flex-col items-start bg-white hover:bg-neutral-50 transition-colors"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Previous
                        </span>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tighter transition-transform mb-3">
                            {prevProject.title}
                        </h3>
                        <p className="text-lg text-gray-500 font-medium">
                            {prevProject.subtitle}
                        </p>
                    </Link>

                    <Link
                        href={`/work/${nextProject.slug}`}
                        className="group p-12 md:p-24 flex flex-col items-end text-right bg-white hover:bg-neutral-50 transition-colors"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                            Next
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tighter transition-transform mb-3">
                            {nextProject.title}
                        </h3>
                        <p className="text-lg text-gray-500 font-medium">
                            {nextProject.subtitle}
                        </p>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
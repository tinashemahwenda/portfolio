"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
};

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <main className="min-h-screen bg-white selection:bg-[#1A1A1A] selection:text-white flex flex-col">
            <Navbar />

            <section className="flex-grow pt-48 pb-32 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32">

                {/* LEFT COLUMN: Contact Details */}
                <div className="w-full lg:w-5/12 flex flex-col">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors mb-16 w-fit"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="w-full"
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="text-6xl md:text-8xl font-extrabold tracking-tighter text-[#1A1A1A] leading-none mb-6"
                        >
                            Say hello.
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-xl md:text-2xl font-medium text-gray-400 mb-16 max-w-md"
                        >
                            Tell me about your project, or just reach out to chat.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col gap-10">
                            {/* Emails */}
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email</span>
                                <a href="mailto:work@creativetinashe.co.zw" className="text-lg font-bold text-[#1A1A1A] hover:text-gray-500 transition-colors w-fit">
                                    work@creativetinashe.co.zw
                                </a>
                                <a href="mailto:mahwendatinashe@gmail.com" className="text-lg font-bold text-[#1A1A1A] hover:text-gray-500 transition-colors w-fit">
                                    mahwendatinashe@gmail.com
                                </a>
                            </div>

                            {/* Phones */}
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Phone / WhatsApp</span>
                                <a href="tel:+263713339762" className="text-lg font-bold text-[#1A1A1A] hover:text-gray-500 transition-colors w-fit">
                                    +263 71 333 9762
                                </a>
                                <a href="tel:+263718669611" className="text-lg font-bold text-[#1A1A1A] hover:text-gray-500 transition-colors w-fit">
                                    +263 71 866 9611
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: Contact Form */}
                <div className="w-full lg:w-7/12 flex flex-col pt-4 lg:pt-32">
                    <AnimatePresence mode="wait">
                        {isSuccess ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex flex-col items-start py-12"
                            >
                                <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white mb-6">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight mb-3">Message Sent</h3>
                                <p className="text-lg text-gray-500 font-medium">I'll be in touch shortly.</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-12 w-full max-w-2xl"
                            >
                                <div className="flex flex-col md:flex-row gap-12 w-full">
                                    <div className="w-full">
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-transparent py-4 border-b-2 border-gray-100 text-[#1A1A1A] placeholder:text-gray-300 font-medium text-2xl outline-none focus:border-[#1A1A1A] transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-transparent py-4 border-b-2 border-gray-100 text-[#1A1A1A] placeholder:text-gray-300 font-medium text-2xl outline-none focus:border-[#1A1A1A] transition-colors"
                                            placeholder="Email address"
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <textarea
                                        required
                                        rows={3}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-transparent py-4 border-b-2 border-gray-100 text-[#1A1A1A] placeholder:text-gray-300 font-medium text-2xl outline-none focus:border-[#1A1A1A] transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[#1A1A1A] text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-black transition-transform active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3 w-full sm:w-auto"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>

                                    <a
                                        href="https://wa.me/263713339762"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border-2 border-gray-100 text-[#1A1A1A] px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:border-[#1A1A1A] transition-all active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                        </svg>
                                        WhatsApp
                                    </a>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </main>
    );
}
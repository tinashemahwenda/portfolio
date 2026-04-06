"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const statements = [
    "Hi, its Tinashe",
    "Product Designer & Indie App Developer",
    "I redesigned an award winning app",
    "Elevating SaaS user experiences",
    "Designing for massive impact"
];

export default function BadgeRotator() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(80);

    useEffect(() => {
        const i = loopNum % statements.length;
        const fullText = statements[i];

        const handleTyping = () => {
            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
                setTypingSpeed(30); // Fast delete
            } else {
                setText(fullText.substring(0, text.length + 1));
                setTypingSpeed(80); // Consistent, stable typing speed
            }

            if (!isDeleting && text === fullText) {
                // Pause when word is complete
                setTimeout(() => setIsDeleting(true), 2500);
            } else if (isDeleting && text === "") {
                // Pause before typing next word
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(400);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        // Removed all Framer Motion 'layout' tags.
        // Kept standard flex without forcing width changes.
        <div className="text-gray-700 text-xs font-semibold mb-4 flex items-center gap-2 h-6">

            {/* The pulsing green dot */}
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />

            {/* The typing text wrapper */}
            <div className="flex items-center text-left">
                <span>{text}</span>

                {/* Simple, standard blinking cursor */}
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="inline-block w-[2px] h-3.5 bg-gray-400 ml-[2px]"
                />
            </div>

        </div>
    );
}
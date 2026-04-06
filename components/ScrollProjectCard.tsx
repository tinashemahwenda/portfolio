"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface Project {
    title: string;
    category: string;
    tags: string[];
    description: string;
    theme: "dark" | "light";
}

interface Props {
    project: Project;
    progress: MotionValue<number>;
    range: [number, number, number, number];
    opacities: [number, number, number, number];
    scales: [number, number, number, number];
    yOffsets: [number, number, number, number];
}

export default function ScrollProjectCard({
    project,
    progress,
    range,
    opacities,
    scales,
    yOffsets,
}: Props) {
    const [inStart, inEnd, outStart, outEnd] = range;
    const inDuration = inEnd - inStart;

    const cardOpacity = useTransform(progress, range, opacities);
    const cardScale = useTransform(progress, range, scales);

    const titleY = useTransform(
        progress,
        [inStart, inStart + inDuration * 0.5, outStart, outEnd],
        [yOffsets[0], 0, 0, yOffsets[3]]
    );

    const descY = useTransform(
        progress,
        [inStart + inDuration * 0.2, inStart + inDuration * 0.7, outStart, outEnd],
        [yOffsets[0], 0, 0, yOffsets[3]]
    );

    const tagsY = useTransform(
        progress,
        [inStart + inDuration * 0.4, inStart + inDuration * 0.9, outStart, outEnd],
        [yOffsets[0], 0, 0, yOffsets[3]]
    );

    const imageY = useTransform(progress, [inStart, outEnd], [80, -80]);

    const isDark = project.theme === "dark";

    return (
        <motion.div
            style={{
                opacity: cardOpacity,
                scale: cardScale,
            }}
            className={`absolute inset-0 flex items-center justify-center px-6 py-24 ${isDark ? "bg-[#141414] text-white" : "bg-gray-50 text-[#1A1A1A]"
                }`}
        >
            <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24 h-full">
                <div className="flex-1 space-y-8 flex flex-col justify-center">
                    <motion.div style={{ y: titleY }}>
                        <span
                            className={`text-sm font-semibold tracking-wider uppercase mb-4 block ${isDark ? "text-gray-400" : "text-gray-500"
                                }`}
                        >
                            {project.category}
                        </span>
                        <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                            {project.title}
                        </h3>
                    </motion.div>

                    <motion.div style={{ y: tagsY }} className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className={`text-xs px-4 py-1.5 rounded-full border ${isDark
                                        ? "border-gray-700 text-gray-300"
                                        : "border-gray-200 text-gray-600"
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <motion.p
                        style={{ y: descY }}
                        className={`text-lg md:text-xl leading-relaxed max-w-md ${isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                    >
                        {project.description}
                    </motion.p>
                </div>

                <div className="flex-1 w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden relative bg-black/5 flex items-center justify-center">
                    <motion.div
                        style={{ y: imageY }}
                        className="w-full h-[120%] absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center"
                    >
                        <span className="text-gray-500 font-medium tracking-widest uppercase">
                            Mockup
                        </span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
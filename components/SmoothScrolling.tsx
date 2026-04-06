"use client";
import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1, // Lower = smoother/slower (0.1 is the sweet spot)
                duration: 1.5,
                smoothWheel: true,
                // Sync with Framer Motion
                syncTouch: true
            }}
        >
            {children}
        </ReactLenis>
    );
}
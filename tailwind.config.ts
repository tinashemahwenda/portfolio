import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./sections/**/*.{js,ts,jsx,tsx,mdx}", // Make sure your sections folder is here!
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // This overrides the default Tailwind sans font with Plus Jakarta
                sans: ["var(--font-jakarta)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './sections/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // 1. Set Alexandria as the default sans font
            fontFamily: {
                sans: ['var(--font-alexandria)', 'sans-serif'],
            },
            // (Keeping your slow spin animation for the badge)
            animation: {
                'spin-slow': 'spin 4s linear infinite',
            }
        },
    },
    plugins: [],
}
export default config
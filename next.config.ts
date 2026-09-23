/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Removed output: 'export' to enable Vercel's native routing
  // 2. Removed images: { unoptimized: true } to enable Vercel's image optimization engine

  // Optional: If you ever load images from an external CMS or database later, add them here.
  // Otherwise, local images in the /public folder will optimize automatically.
};

export default nextConfig;
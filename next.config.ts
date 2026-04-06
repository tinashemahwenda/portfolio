/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/portfolio', // Replace with your actual repo name
  assetPrefix: '/portfolio/',
};

export default nextConfig;
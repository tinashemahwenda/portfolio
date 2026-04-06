/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // ADD THIS LINE: It tells Next.js to append /portfolio to all internal Next.js links and <Image> components
  basePath: '/portfolio',
};


export default nextConfig;
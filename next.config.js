/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 tells Next.js to generate static HTML files
  images: {
    unoptimized: true, // 👈 required if you use next/image
  },
};

module.exports = nextConfig;

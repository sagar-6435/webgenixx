/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'webgenixx.onrender.com',
      },
      {
        protocol: 'https',
        hostname: '*-sagar-6435.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'webgenixxbackend.vercel.app',
      }
    ],
  },
};

export default nextConfig;

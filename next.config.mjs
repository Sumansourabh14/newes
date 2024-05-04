/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.hindustantimes.com",
      },
      {
        protocol: "https",
        hostname: "images.news18.com",
      },
      {
        protocol: "https",
        hostname: "c.ndtvimg.com",
      },
      {
        protocol: "https",
        hostname: "cdn.wionews.com",
      },
    ],
  },
};

export default nextConfig;

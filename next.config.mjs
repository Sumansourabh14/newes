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
    ],
  },
};

export default nextConfig;

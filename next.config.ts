import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
  },

  allowedDevOrigins: ["192.168.1.4"],

  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },

  experimental: {
    optimizePackageImports: ["react-pdf"],
  },
};

export default nextConfig;
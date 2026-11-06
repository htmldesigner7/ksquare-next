import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the dev-only on-screen indicator (the "N" badge / issue pill); it never ships in production.
  devIndicators: false,
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the dev-only on-screen indicator (the "N" badge / issue pill); it never ships in production.
  devIndicators: false,
  images: {
    qualities: [75, 100],
  },
  // Uploaded images/files are served by the API at /uploads. The API returns them as relative URLs, and this
  // forwards them, so they load on any host the site is opened from (localhost, a shared LAN IP, production).
  async rewrites() {
    const api = new URL(process.env.ADMIN_API_URL ?? "http://localhost:4000/api/v1");
    return [{ source: "/uploads/:path*", destination: `${api.origin}/uploads/:path*` }];
  },
};

export default nextConfig;

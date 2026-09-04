import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: a stray package-lock.json further up the drive
  // otherwise makes Turbopack infer the wrong one.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  env: {},
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

// Added export for webpack configuration
export const webServerConfig = {
  port: 3001,
};

export default nextConfig;

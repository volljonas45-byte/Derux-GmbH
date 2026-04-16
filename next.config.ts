import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Derux-GmbH",
  assetPrefix: "/Derux-GmbH",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Derux-GmbH",
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

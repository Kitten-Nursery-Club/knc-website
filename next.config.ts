import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "knc-sfv.com",
      },
    ],
  },
}

export default nextConfig

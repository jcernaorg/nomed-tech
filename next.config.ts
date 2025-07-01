import type { NextConfig } from "next";
import Image from 'next/image';

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.simpleicons.org"],
  },
};

export default nextConfig;

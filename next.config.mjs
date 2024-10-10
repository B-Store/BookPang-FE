// next.config.mjs
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.aladin.co.kr"],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
  },
};
export default nextConfig;

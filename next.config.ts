import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mobl/' : '',
  basePath: '/subdirectory',
  trailingSlash: true,
};
export default nextConfig;

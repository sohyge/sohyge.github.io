/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "",
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: ["http://sohyge.github.io"],
  },
};

module.exports = nextConfig;

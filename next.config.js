/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["mir-s3-cdn-cf.behance.net/com"],
  },
};

module.exports = nextConfig;

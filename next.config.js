/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['help.twitter.com', 'unsplash.com'],
  },
};

module.exports = nextConfig;

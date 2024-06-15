/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  trailingSlash: true, // Añadido trailingSlash

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },

  experimental: {
    instrumentationHook: true,
  },
};

module.exports = nextConfig;

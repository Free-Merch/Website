/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.coingecko.com", "res.cloudinary.com"],
  }, 
};

module.exports = nextConfig

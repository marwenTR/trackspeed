/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.formula1.com'],
  },
  swcMinify: true,
}

module.exports = nextConfig
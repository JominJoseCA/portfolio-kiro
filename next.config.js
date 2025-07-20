/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'cdn.jsdelivr.net', 'upload.wikimedia.org'],
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
}

module.exports = nextConfig
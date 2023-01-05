/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}
const withImages = require('next-images')
module.exports = nextConfig, withImages

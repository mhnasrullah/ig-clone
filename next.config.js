/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains : ["picsum.photos","upload.wikimedia.org"]
  }
}

module.exports = nextConfig

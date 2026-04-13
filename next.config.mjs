/** @type {import('next').NextConfig} */
// Remote image configuration allows Next/Image optimization for placeholder photography.
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;

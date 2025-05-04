/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'images.unsplash.com', // For your Unsplash images
        // Add other domains if you use more image sources
      ],
      minimumCacheTTL: 60, // (optional) Cache images for 60 seconds
    },
  };
  
  export default nextConfig;
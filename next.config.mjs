const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "notion-avatar.vercel.app",
      },
    ],
  },
};

export default nextConfig;

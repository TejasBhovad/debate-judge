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
  experimental: {
    outputFileTracingIncludes: {
      "/api/another": ["./app/data.json"],
    },
  },
};

export default nextConfig;

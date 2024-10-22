/** @type {import('next').NextConfig} **/

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "a0.muscache.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "gjeaabemtldcnkmomcbw.supabase.co",
        protocol: "https",
        port: "",
      },
      {
        hostname: "static.vecteezy.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "aws-0-eu-west-3.pooler.supabase.com",
        protocol: "https",
        port: "6543",
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: false,
  },
};
export default nextConfig;

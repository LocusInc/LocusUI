import type { NextConfig } from "next";
import createTM from "next-transpile-modules";

const withTM = createTM(["locus-ui"]);

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withTM(nextConfig);

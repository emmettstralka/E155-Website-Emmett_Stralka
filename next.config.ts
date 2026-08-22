import type { NextConfig } from "next";

/** GitHub project Pages URL: https://emmettstralka.github.io/E155-Website-Emmett_Stralka/ */
const repoName = "E155-Website-Emmett_Stralka";
const basePath =
  process.env.NODE_ENV === "production" || process.env.GITHUB_PAGES === "true"
    ? `/${repoName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import createMDX from "@next/mdx";
// import remarkGFM from "remark-gfm";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/fc",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
    turbo: {
      rules: {
        "*.txt": {
          loaders: ["raw-loader"],
          as: "*.js",
        },
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/i,
      use: [
        {
          loader: "raw-loader",
        },
      ],
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });

    return config;
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    // @ts-expect-error wrong types
    remarkPlugins: [["remark-gfm"]],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);

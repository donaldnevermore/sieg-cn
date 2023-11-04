const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  basePath: "/sieg-cn",
  assetPrefix: "./",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
});

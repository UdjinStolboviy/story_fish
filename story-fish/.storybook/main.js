const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: [
    "../pages/**/*.stories.mdx",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    config.module.rules.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({ extensions: config.resolve.extensions }),
    ];
    return config;
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  features: {
    emotionAlias: false,
  },
  typescript: { reactDocgen: false },
};

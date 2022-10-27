const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  "stories": [
    "../src/**/(*.)?stories.mdx",
    "../src/**/(*.)?stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/react",
  "features": {
    "storyStoreV7": true,
  },
  core: {
    builder: 'webpack5',
  },
  features: { emotionAlias: false },
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    })

    return config
  },
}

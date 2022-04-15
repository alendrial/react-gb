module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader?url=false', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });
}
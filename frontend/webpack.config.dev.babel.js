/*
 * Development Webpack Config
 */

const webpack = require('webpack');
const commonConfig = require('./webpack.config.common');

module.exports = {
  ...commonConfig,
  plugins: [
    ...commonConfig.plugins,
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
  ],
  devtool: 'source-map',
};

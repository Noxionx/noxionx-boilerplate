/*
 * Production Webpack Config
 */

import webpack from 'webpack';
import commonConfig from './webpack.config.common';

module.exports = {
  ...commonConfig,
  plugins: [
    ...commonConfig.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};

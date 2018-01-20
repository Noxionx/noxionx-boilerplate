/*
 * Common Webpack Config
 */

import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => (
    ['.bin'].indexOf(x) === -1
  ))
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

module.exports = {
  entry: path.join(__dirname, 'app/App'),
  node: {
    __dirname: false,
    __filename: false,
  },
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'App.js',
  },
  externals: nodeModules,
  devtool: 'source-map',
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
      exclude: /pdf\.css/i,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loaders: ['babel-loader'],
        include: [path.join(__dirname, 'app'), path.join(__dirname, '../shared')],
        exclude: /node_modules/,
      },
      {
        test: /\.(json|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.-]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.html', '.txt', '.js', '.jsx', '.json', '.css', '.scss'],
  },
};

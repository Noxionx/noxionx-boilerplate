/*
 * Common Webpack Config
 */

const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/App',
  output: {
    path: path.join(__dirname, 'public/assets/'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
  ],
  externals: fs.readdirSync('node_modules').map(module => `commonjs ${module}`),
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loaders: ['babel-loader'],
        include: [path.join(__dirname, 'app')],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.html$/,
        loader: 'handlebars-template-loader',
      },
      {
        test: /\.(json|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.-]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
};

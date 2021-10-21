const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dev'),
    publicPath: '/',
    clean: true
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
  }
});
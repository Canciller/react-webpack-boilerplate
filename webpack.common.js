const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: path.join(__dirname, 'src', 'index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.ts', '.tsx', '.js', '.json']
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        loader: 'babel-loader',
        options: {
          compact: false
        },
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        },
        mode: 'write-references'
      },
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}'
      }
    })
  ]
}
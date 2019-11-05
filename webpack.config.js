require('dotenv').config();

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const DotEnv = require('dotenv-webpack');

const contextPath = path.resolve(__dirname, './thrift/browser');
const isProd = process.env.NODE_ENV === 'production';
const exportPath = `${contextPath}/dist`;

const getMode = () => isProd ? 'production' : 'development';

const getPlugins = () => {
  return [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CopyPlugin([
      { from: `./src/gen-js/`, to: `${exportPath}/js/gen-js` },
      { from: `./src/lib/`, to: `${exportPath}/js` }
    ]),
    new DotEnv(),
  ]
};
module.exports = {
  context: contextPath,
  entry: ['./index.js'],
  mode: getMode(),
  output: {
    path: `${exportPath}`,
    filename: 'js/[name].js',
  },
  externals: {
    Int64: 'node-int64',
    Int64Util: 'thrift/lib/nodejs/lib/thrift/int64_util',
    JSONInt64: 'json-int64',
    Thrift: 'Thrift',
    CalculatorClient: 'CalculatorClient'
  },
  devServer: {
    host: process.env.HOST || 'localhost',
    disableHostCheck: true,
    contentBase: `${exportPath}`,
    publicPath: '/',
    port: 9000
  },
  devtool: 'source-map',
  plugins: getPlugins(),
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      // if there are deep nested files, don't '../../' back tho start with fresh '@/files/you/want/to/go'
      '@': path.resolve(__dirname, './'),
      'node_modules': path.resolve(__dirname, './node_modules')
    },
  },
  watchOptions: {
    poll: 1000,
    ignored: /node_modules/,
    aggregateTimeout: 300,
  },
};

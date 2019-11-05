require('dotenv').config();

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');

const contextPath = path.resolve(__dirname, './thrift/browser');
const exportPath = `${contextPath}/dist`;

const getPlugins = () => {
  return [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new DotEnv(),
  ]
};
module.exports = {
  context: contextPath,
  entry: ['./index.js'],
  mode: 'development',
  output: {
    path: `${exportPath}`,
    filename: 'js/[name].js',
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

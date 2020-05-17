const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CopyWebpackPlugin  = require('copy-webpack-plugin')

module.exports = {
  context: path.join(__dirname, '..'),
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[chunkhash:5].js',
    crossOriginLoading: 'anonymous',
    path: path.join(__dirname, '..', 'dist')
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.join(__dirname, '..', 'src')
    },
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['eslint-loader', 'babel-loader']
      }, {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      }, {
        test: /\.(png|jpeg?|gif)(\?.*)/,
        loader: 'url-loader',
        options: {
          limit: 1000000,
          name: 'img/[name].[ext]'
        }
      }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?&/,
        loader: 'url-loader',
        options: {
          limit: 1000000,
          name: 'media/[name].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000000,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '忍者ssr',
      template: path.join(__dirname, '..', 'public/index.html')
    }),
    new ProgressBarPlugin(),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '..', 'public/favicon.ico')
    }])
  ]
}
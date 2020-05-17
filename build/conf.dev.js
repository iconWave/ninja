const webpack = require('webpack');
const merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin();
const baseconfig = require('./conf.base')

module.exports = smp.wrap(merge(baseconfig, {
  mode: 'development',
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        'postcss-loader'
      ]
    }]
  },
  devtool: 'eval-source-map',
  plugins: [
    new DashboardPlugin()
  ],
  devServer: {
    port: 3001,
    open: true,
    overlay: {
      errors: true,
      warnings: true
    },
    hot: false,
    quiet: false,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*"
    }
  }
}))
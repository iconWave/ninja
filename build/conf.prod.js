const merge = require("webpack-merge")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackScriptAttributesPlugin = require('html-webpack-script-attributes-plugin')
const baseconf = require('./conf.base')

module.exports = merge(baseconf, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // 提取 node_modules 中代码
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        common: {
          // async 设置提取异步代码中的公用代码
          chunks: 'async',
          name: 'co',
          /**
           * minSize 默认为 30000
           * 想要使代码拆分真的按照我们的设置来
           * 需要减小 minSize
           */
          minSize: 0,
          // 至少为两个 chunks 的公用代码
          minChunks: 2
        },
        style: {
          name: 'styles',
          test: /\.(css|scss)$/,
          chunks: 'all',
          minChunks: 1,
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true
        }
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  performance: {
    hints:false
  },
  plugins: [
    // 提取css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:5].css',
    }),
    // new HtmlWebpackScriptAttributesPlugin({
    //   crossorigin: 'anonymous'
    // })
  ]
});
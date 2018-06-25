'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const cssLoaders = [
  {
    loader: 'css-loader'
  }, {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: function () {
        return [
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions'
            ]
          })
        ]
      }
    }
  }
];

module.exports = {
  entry: {
    app: ['./src/main.js', 'webpack-hot-middleware/client']
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|gif|jpg|jpe?g|icon?|eot|svg|ttf|woff)$/,
        use: [{
          loader: 'url-loader?limit=8192&name=[name]-[hash].[ext]'
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory=true'
          }
        ],
        exclude: path.resolve(__dirname, '../node_modules/')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true,
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    },
    extensions: ['.js', '.vue']
  },
  cssLoaders: cssLoaders
};

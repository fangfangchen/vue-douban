const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.base.config');

const cssLoaders = config.cssLoaders;
delete config.cssLoaders;

module.exports = merge(config, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: cssLoaders
        })
      },
  },
  plugins: [
  	new ExtractTextPlugin('[name].css'),
  ]
});

const merge = require('webpack-merge');
const config = require('./webpack.base.config');
const cssLoaders = config.cssLoaders;
delete config.cssLoaders;

module.exports = merge(config, {
	module: {
		rules: [
      {
      	test: /\.css$/,
      	use: ['style-loader'].concat(cssLoaders)
      }
    ],
	},
  mode: 'development'
});

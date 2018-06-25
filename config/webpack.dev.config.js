const merge = require('webpack-merge');
const config = require('./webpack.base.config');
const cssLoaders = config.cssLoaders;
const sassLoader = {
  loader: 'sass-loader',
  options: {
    outputStyle: 'expanded'
  }
};
const scssLoaders = cssLoaders.concat(sassLoader);
delete config.cssLoaders;

module.exports = merge(config, {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['vue-style-loader'].concat(cssLoaders)
			},
			{
				test: /\.scss$/,
				use: ['vue-style-loader'].concat(scssLoaders)
			}
		],
	}
});

const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
  mode: 'production',
  module: {
    rules: [
      // vue-loader V15+需要显示声明以下规则
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader].concat(cssLoaders)
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader].concat(scssLoaders)
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
});

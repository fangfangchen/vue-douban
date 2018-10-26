const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxy = require('http-proxy-middleware');

const app = express();
const config = require('./webpack.dev.config');
const compiler = webpack(config);
// const api = 'http://api.douban.com/v2';
const api = 'https://douban.uieee.com/v2';

app.use(webpackHotMiddleware(compiler));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(proxy('/data-api', {
  target: api,
  changeOrigin: true,
  pathRewrite: {
    '^/data-api': ''
  },
  onError: (err, req, res) => {
    logger.log(err, req);
  },
  onProxyReq: (proxyReq, req, res) => {},
  onProxyRes: (proxyRes, req, res) => {}
}));

// Serve the files on port 3000.
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!\n');
});
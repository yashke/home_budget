var path = require('path');

var config = {
  context: __dirname + '/public/assets',
  entry: {
    'index': ['../../src/index.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot-loader", "babel-loader"] },
      { test: /\.css$/, loaders: ["style-loader", "css-loader"] }
    ]
  },
  output: {
    path: __dirname + '/public/assets',
    filename: "[name].js",
    publicPath: "http://localhost:8080/assets"
  }
};

module.exports = config;

var path = require('path');

var config = {
  context: __dirname + '/public/assets',
  entry: {
    'index': ['../../src/index.js'],
    'server_mock': ['../../src/server_mock.js']
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
  },
  devServer: {
    headers: {
      "Service-Worker-Allowed": "/"
    }
  }
};

module.exports = config;

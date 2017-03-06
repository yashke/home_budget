var path = require('path');

var config = {
  context: __dirname + '/public/assets',
  entry: {
    'index': ['../../src/index.js']
  },
  output: {
    path: __dirname + '/public/assets',
    filename: "[name].js",
    publicPath: "http://localhost:8080/assets"
  }
};

module.exports = config;

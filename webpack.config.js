var path = require('path');
module.exports = {
  entry: {
    bundle: "./public/script.js",
    test_bundle: "./spec/javascripts/specRoot.js"
  },

  output: {
    path: __dirname + "/public",
    filename: "[name].js"
  },

  resolve: {
    root: [path.resolve(__dirname, 'node_modules')],
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ["react", "es2015"] }

     }
    ]
  }
};

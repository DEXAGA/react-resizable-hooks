"use strict";

const path = require("path");

module.exports = {
  // Set debugging source maps to be "inline" for
  // simplicity and ease of use
  devtool: "inline-source-map",

  // The application entry point
  entry: "./index.ts",

  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    filename: "bundle.js"
  },

  // Supported file loaders
  module: {
    rules: [
      {
        test: /\.tsx?|\.ts?$/,
        loader: "ts-loader"
      }
    ]
  },

  // File extensions to support resolving
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};

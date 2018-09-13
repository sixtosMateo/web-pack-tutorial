// this file tells the webpack where to look and how to act
// basic example but can get more complex


//do determination in our code environment production
  // if we are doing production mode do minifications things
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  // context is current directory of this file
    //ex: context: __dirname+ "app" if inside a directory
  context: __dirname,
  // if not production mode, Debug Mode do inline mapping helpful for devtools
  devtool: debug ? "inline-sourcemap" : null,
  // starting point from out file structure
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  // minifications things
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

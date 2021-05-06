const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: 'images/[name][ext][query]'
  },
  // devServer: {
  //   publicPath: "src/assets/",
  //   contentBase: path.join(__dirname, 'dist')
  // }
});

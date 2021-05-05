const path = require("path");
const { NetlifyPlugin } = require("netlify-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/bundle.js",
  },
  plugins: [new NetlifyPlugin({})],
  // module: {
  //   rules: [
  //     {
  //       test: /\.s[ac]ss$/i,
  //       use: ["style-loader", "css-loader", "sass-loader"],
  //     },
  //   ],
  // },
};

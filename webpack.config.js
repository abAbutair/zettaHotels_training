const path = require("path");
// const { NetlifyPlugin } = require("netlify-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  // plugins: [
  //   new NetlifyPlugin({
  //     redirects: [
  //       {
  //         from: "/old-path",
  //         to: "/new-path",
  //         status: 301,
  //         force: false,
  //         query: {
  //           path: ":path",
  //         },
  //         conditions: {
  //           language: ["en", "es"],
  //           country: ["US"],
  //         },
  //       },
  //       {
  //         from: "/api/*",
  //         to:
  //           "https://us-central1-netlify-intercom.cloudfunctions.net/readHeaders/:splat",
  //         status: 200,
  //         force: true,
  //         conditions: {
  //           role: ["admin", "cms"],
  //         },
  //       },
  //     ],
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      // {
      //   // test: require.resolve("wowjs/dist/wow.js"),
      //   // loader: "exports?this.WOW",
      // },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};

const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const {NetlifyPlugin} = require('netlify-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "js/[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[name][ext][query]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new NetlifyPlugin({})
    ]
});
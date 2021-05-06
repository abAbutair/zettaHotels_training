const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        main: "./src/js/index.js",
        vendor: "./src/js/vendors.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/template.html",
            inject: "body",
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    sources: {
                        list: [
                            '...',
                            {
                                tag: 'a',
                                attribute: 'data-background',
                                type: 'src',
                            },

                            {
                                tag: 'div',
                                attribute: 'data-background',
                                type: 'src',
                            }
                        ]
                    }
                }
            },

            {
                test: /\.(jpg|jpeg|gif|png)$/i,
                type: 'asset/resource',

            },

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed"
                            }
                        }
                    }
                ],
            },

            {
                test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[contentHash].[ext]",
                            outputPath: "fonts/",
                        },
                    },
                ],
            }

        ]
    }

};

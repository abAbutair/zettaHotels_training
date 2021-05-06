const path = require("path");

module.exports = {
    entry: {
        main: "./src/js/index.js",
        vendor: "./src/js/vendors.js"
    },
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
                                type: 'src'
                            }
                        ]
                    }
                }
            },

            {
                test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[contentHash].[ext]"
                        }
                    }
                ]
            },

            {
                test: /\.(jpg|jpeg|gif|png)$/i,
                type: 'asset/resource',
            }
        ]
    }

};

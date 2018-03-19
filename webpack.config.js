const webpack = require("webpack");
const path = require("path");

const config = {
    entry: ["babel-polyfill", "./src/app.js"],
    output: {
        path: path.resolve(__dirname, ""),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.jsx?/, use: "babel-loader", exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devtool: "source-map",
    devServer: {
        compress: true
    }
};

module.exports = config;
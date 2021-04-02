const path = require("path")
const outputPath = path.resolve(__dirname, 'dist')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: outputPath,
    },
    devServer: {
        contentBase: outputPath,
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            }
        ],
    },
}

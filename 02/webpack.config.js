
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.wav$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin()
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    }
};
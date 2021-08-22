
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') })
        //new BundleAnalyzerPlugin(),
    ]
};
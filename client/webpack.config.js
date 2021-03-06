const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'dev' ? 'development' : 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            config$: path.resolve(__dirname, 'src/config.js'),
            '@': path.join(__dirname, 'src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.DefinePlugin({
            API_URL: process.env.NODE_ENV === 'dev' ? "'http://localhost:8080/'" : "'http://localhost:8080/'"
        }),
        new webpack.HotModuleReplacementPlugin({})
    ],
    devtool: 'source-map-inline',
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    entry: './index.jsx',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
        hot: true
    }
};
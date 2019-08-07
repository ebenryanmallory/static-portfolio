const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        new CopyWebpackPlugin([
            'index.html',
            'about.html',
            'showcase.html',
            'favicon.ico',
            { from: './images', to: 'images/' },
            { from: './css', to: 'css/' },
            { from: './js', to: 'js/' },
            { from: './scripts', to: 'scripts/' },
            { from: './styles', to: 'styles/' },
            { from: './fonts', to: 'fonts/' }
            ]),
        new webpack.HotModuleReplacementPlugin()
    ]
};
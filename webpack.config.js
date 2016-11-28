var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var NODE_ENV = process.env.NODE_ENV || 'development';

var config = {
    entry: './source/main.js',
    output: {
        path:'./public',
        filename: 'js/main.js',
        publicPath: '/'
    },

    devServer: {
        contentBase: "./public",
        port: 8888,
        historyApiFallback: true,
        publicPath: '/'
    },
    devtool: NODE_ENV == 'development' ? "inline-source-map" : null,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }

            },
            {
                test:   /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!autoprefixer?browsers=last 15 versions!sass?sourceMap')
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/styles.css')
    ],
};

module.exports = config;
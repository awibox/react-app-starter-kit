var config = {
    entry: './source/main.js',

    output: {
        path:'./',
        filename: './public/js/main.js',
    },

    devServer: {
        inline: true,
        contentBase: "./public",
        port: 8888
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;
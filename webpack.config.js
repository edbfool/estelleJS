const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './index.js',
    module: {
        loaders: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                    },{
                        test: /\.scss$/,
                        loaders: ['style-loader', 'css-loader', 'sass-loader'],
                    },
                ],
    },
    output: {
        path: path.join(__dirname + 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true
    }
}


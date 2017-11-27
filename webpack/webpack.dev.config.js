const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './index.js',
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    output: {
        path: path.join(__dirname + '../dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '../'),
        historyApiFallback: true
    }
}

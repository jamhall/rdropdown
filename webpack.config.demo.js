var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'demo/src/index'),
    output: {
        path: path.resolve(__dirname, 'demo/build'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        },
        { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: './index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.es6.js', '.jsx', '.css']
    },
    devServer: {
      contentBase: 'demo',
      port: 3001
    }
};

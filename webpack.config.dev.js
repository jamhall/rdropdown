var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'eval',
    entry: [path.resolve(__dirname, 'demo/src/index')],
    output: {
        path: path.resolve(__dirname, 'build'),
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
        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=90000' },
        { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: './index.html'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin()

    ],
    resolve: {
        extensions: ['', '.js', '.es6.js', '.jsx', '.css']
    },
    devServer: {
      contentBase: 'demo/resources',
      port: 3001
    }
};

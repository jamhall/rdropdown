var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'demo/index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'DropdownMenu',
        filename: 'app.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            query: {
                presets: ['babel-preset-es2015', 'react', 'stage-0']
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: './index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],
    externals: [{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }, {
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    }],
    resolve: {
        extensions: ['', '.js', '.es6.js', '.jsx']
    },
    devServer: {
      contentBase: 'build',
      port: 3001
    }
};

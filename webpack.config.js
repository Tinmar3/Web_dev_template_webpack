var path = require('path');
var webpack = require('webpack');

// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// var extractPlugin = new ExtractTextPlugin({
//     filename: 'main.css'
// });

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015-without-strict']
                        }
                    }
                ]
            },
            {
                test: /\.exec\.js$/,
                use: ['script-loader']
            }
        ]
    },
    plugins: [
        // extractPlugin,
        // new webpack.optimize.UglifyJsPlugin({
        //     // ...
        // })
    ]
};
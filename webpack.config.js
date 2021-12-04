const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
 
module.exports =
{
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    module:
    {
        rules:
        [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve:
    {
        extensions: [ '.js', '.ts' ],
    },
    output:
    {
        filename: 'browser-fingerprint.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization:
    {
        minimizer:
        [
            new UglifyJsPlugin()
        ]
    }
}
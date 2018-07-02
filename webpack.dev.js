const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const port = 3000;
const host = '0.0.0.0';

module.exports = merge(
    common,
    {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            historyApiFallback: true,
            compress: false,
            host: host,
            port: port,
            hot: true
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: "[name].js",
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                configFileName: './tsconfig.dev.json'
                            }
                        }
                    ]
                },

                {
                    test: /\.less/,
                    use: [
                        "style-loader",
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                namedExport: true,
                                localIdentName: "bea___[local]"
                            },
                        },
                        "less-loader"
                    ]
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([]),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
);

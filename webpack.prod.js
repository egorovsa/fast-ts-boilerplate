const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssFilename = 'css/[name].[contenthash:8].css';

module.exports = merge(
    common,
    {
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'awesome-typescript-loader'
                },
                {
                    test: /\.s?css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        'postcss-loader',
                        "sass-loader"
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                namedExport: true,
                                localIdentName: "bea___[local]"
                            },
                        },
                        'postcss-loader',
                        "less-loader"
                    ]
                },
                {
                    test: /\.styl/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        'postcss-loader',
                        "stylus-loader"
                    ]
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([]),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.IgnorePlugin(/(redux-devtools|redux-devtools-dock-monitor|redux-devtools-log-monitor)/),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new UglifyJSPlugin({
                sourceMap: false,
                uglifyOptions: {
                    warnings: false
                }
            }),
            new MiniCssExtractPlugin({
                filename: cssFilename,
            })
        ]
    }
);

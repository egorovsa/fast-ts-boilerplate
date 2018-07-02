const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json' ],
        alias: {
            '@common': path.resolve(__dirname, './src/common/'),
            '@core': path.resolve(__dirname, './src/core/'),
            '@services': path.resolve(__dirname, './src/core/services')
        },
    },
    module: {
        rules: [
            {
                test: [ /\.(bmp|gif|jpe?g|png)$/ ],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:8].[ext]',
                },
            },
            {
                test: [ /\.(eot|otf|webp|svg|ttf|woff|woff2)$/ ],
                loader: require.resolve('file-loader'),
                options: {
                    name: 'media/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.styl/,
                use: [
                    "style-loader",
                    "css-loader",
                    "stylus-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([ 'dist' ]),
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: './index.html',
            template: __dirname + '/src/common/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    enforce: true,
                    chunks: 'all'
                },
            }
        },
        // runtimeChunk: true
    }
};

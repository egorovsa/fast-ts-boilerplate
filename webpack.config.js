const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/ts/app.ts',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 3000,
        hot: true
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.(html|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};
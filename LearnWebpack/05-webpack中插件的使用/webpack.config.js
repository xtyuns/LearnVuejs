const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        // 添加版权信息
        new webpack.BannerPlugin('code with xtyuns'),
        // 编译 index.html 到 dist 目录下
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        // 压缩 js 代码
        new UglifyjsWebpackPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        contentBase: './dist',
        inline: true
    }
}
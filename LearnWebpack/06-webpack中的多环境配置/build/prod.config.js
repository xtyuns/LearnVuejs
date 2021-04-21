const BaseConfig = require('./base.config');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const WebpackMerge = require('webpack-merge');

module.exports = WebpackMerge(BaseConfig, {
    plugins: [
        new UglifyjsWebpackPlugin()
    ]
})

const BaseConfig = require('./base.config');
const WebpackMerge = require('webpack-merge');

module.exports = WebpackMerge(BaseConfig, {
    devServer: {
        contentBase: './dist',
        inline: true
    }
})

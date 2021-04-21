### 初始化项目
npm init

### 添加 webpack 工具
npm install --save-dev webpack@3.6.0

### 添加 vue 开发环境
npm insatll --save vue

### 解析加载 .vue 文件: https://vue-loader.vuejs.org/zh
npm install --save-dev vue-loader vue-template-compiler

### 安装 package.json 中的依赖
npm install

npm install --save-dev html-webpack-plugin@3.21
[插件]
### 编译 index.html 到 dist 目录下
new HtmlWebpackPlugin({
    template: './index.html'
}),

npm install -D uglifyjs-webpack-plugin@1.1.1
[插件]
### 压缩 js 代码
new UglifyjsWebpackPlugin()

### 热部署开发工具
npm install -D webpack-dev-server@2.9.1
### 1. 配置 devServer
### 2. 添加 dev 脚本: webpack-dev-server --open


### 使用多环境配置
npm install -D webpack-merge@4.1.5

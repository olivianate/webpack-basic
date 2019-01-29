const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
      app:'./src/index.js',
      print:'./src/print.js'
  },
  devtool: 'inline-source-map',//为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码
  devServer:{
    contentBase: './dist'//告知webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
  },
  plugins:[//插件管理输出
    new CleanWebpackPlugin(['dist']),//清理 /dist 文件夹
    new HtmlWebpackPlugin({          //新生成 index.html
      title:'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
      app:'./src/index.js',
      print:'./src/print.js'
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
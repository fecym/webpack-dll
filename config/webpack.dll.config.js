const webpack = require('webpack')
const path = require('path')
const library = '_dll_[name]'
module.exports = function(env, args) {
  return {
    entry: {
      // 定义程序中打包公共文件的入口vender
      vender: ['vue', 'vue-router', 'element-ui', 'echarts']
      // vue: ['vue'],
      // vueRouter: ['vue-router'],
      // ElementUI: ['element-ui'],
      // echarts: ['echarts']
    },
    output: {
      path: path.resolve(__dirname, '../public/dll'),
      // filename: '[name].dll.[chunkhash].js',
      filename: '[name].dll.js',
      library
    },
    mode: 'development',
    plugins: [
      new webpack.DllPlugin({
        // manifest缓存文件的请求上下文（默认为webpack）
        context: process.cwd(),
        // 输出 manifest 的绝对路径
        path: path.join(__dirname, '../public/dll', '[name]-manifest.json'),
        // 暴露出DLL的函数名
        // name: '[name]_[hash]'
        name: library
      })
    ]
  }
}

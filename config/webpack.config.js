const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
module.exports = function(env, argv) {
  return {
    entry: {
      app: path.resolve(__dirname, '../src/main'),
      // vender: ['element-ui', 'vue', 'vue-router']
    },
    output: {
      path: path.resolve(__dirname, '../love'),
      filename: 'js/[name].[hash].js',
    },
    devServer: {
      hot: true,
      open: true,
      contentBase: path.resolve(__dirname, '../public'),
      host: 'localhost',
      overlay: true,
      compress: true,
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.(sc|sa|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpj|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 5000,
                // 分离图片至imgs文件夹
                name: 'imgs/[name].[ext]',
              },
            },
          ],
        },
        // 如果缺少这一项，那么Element中字体图标是不可用的哦，会直接报错哦
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]',
          },
        },
        // 用了 url-loader 那么边送一个
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'media/[name].[hash:7].[ext]',
          },
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[id].[hash].css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        // 输出文件
        filename: 'index.html',
        title: 'DLL学习ing',
        inject: true,
        hash: true,
        showErrors: true,
      }),
      // 动态链接库
      // new webpack.DllReferencePlugin({
      //   manifest: require('../public/dll/vender-manifest.json')
      // })
    ],
  }
}

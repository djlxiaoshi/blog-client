const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { basePath, resolve, join } = require('./config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV; // Node环境：开发环境/生产环境
const HOST_ENV = process.env.HOST_ENV; // 打包代码运行环境 浏览器环境/Node环境

console.log('HOST_ENV', HOST_ENV);

module.exports = {
  mode: NODE_ENV, // 填写none 去除webpack打包时的警告，process.env.NODE_ENV 的值都从package.json中配置cross-env传来
  resolve: {
    mainFields: ['jsnext:main', 'browser', 'main'], // 针对 Npm 中的第 方模块优先采用 snext main 中指向的 ES6 模块化语法的文件
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve(__dirname, '..', 'src'),
      resolve(__dirname, '..', 'node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve(__dirname, '..', 'src'),
      'assets': resolve(__dirname, '..', 'src/assets'),
      'components': resolve(__dirname, '..', 'src/components'),
      'pages': resolve(__dirname, '..', 'src/pages'),
      'router': resolve(__dirname, '..', 'src/router'),
      'store': resolve(__dirname, '..', 'src/store'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: resolve(__dirname, '..', 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: HOST_ENV === 'node'
          ? ["vue-style-loader", "css-loader", "less-loader"] // 由于要使用ssr，这里使用vue-style-loader来替换style-loader
          : [{
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            }, "css-loader", "less-loader"]
      },
      {
        test: /\.less$/,
        use: HOST_ENV === 'node'
          ? ["vue-style-loader", "css-loader", "less-loader"] // 由于要使用ssr，这里使用vue-style-loader来替换style-loader
          : [{
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
          },"css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: join(basePath, 'images/[name]-[hash:8].[ext]'),
          limit: 10000
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: join(basePath, 'fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new CopyWebpackPlugin([{
      from: resolve(__dirname, '..', 'static'),
      to: resolve(__dirname, '..', 'dist/static'),
      ignore: ['.*']
    }]),
    // 复制manifest.json
    new CopyWebpackPlugin([{
      from: resolve(__dirname, '..', 'manifest.json'),
      to: resolve(__dirname, '..', 'dist'),
      ignore: ['.*']
    }]),
    new VueLoaderPlugin()
  ]
};

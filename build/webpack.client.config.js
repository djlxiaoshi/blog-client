const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { basePath, resolve, join } = require('./config');
const WorkboxPlugin = require('workbox-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = merge(baseConfig, {
  context: resolve(__dirname, '../'), // 绝对路径
  entry: {
    client: './src/entry-client.js'
  },
  output: {
    path: resolve(__dirname, '..', 'dist'), // 绝对路径
    filename: join(basePath, 'js/[name].[hash:8].js'),
    chunkFilename: join(basePath, 'js/[name].[hash:8].js')
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      })
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'common',
          test: /\.css$|\.less$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
    }),
    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`。
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '..', './index.client.html')
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: `${basePath}css/[name]-[hash].css`,
      chunkFilename: `${basePath}css/[name]-[hash].css`
    })
    // new WorkboxPlugin.GenerateSW({
    //   swDest: 'sw.js', // // 设置前缀 The parent directory for this file will be based on your output.path webpack configuration
    //   clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
    //   skipWaiting: true, // 强制等待中的 Service Worker 被激活
    //   importWorkboxFrom: 'local', // 设置从本地加载workbox而不是cdn（这个cdn需要梯子）
    //   // navigateFallback: '/index.html', // 浏览器中输入的路径都会重定向到index.html
    //   // templatedURLs: {
    //     // '/appshell': [] // 依赖的文件列表 or 具体版本字符串
    //   // },
    //   runtimeCaching: [
    //     {
    //       // html文件 networkFirst
    //       urlPattern: /.*\.html/,
    //       handler: 'NetworkOnly'
    //     },
    //     // {
    //     //   // .js文件 networkFirst
    //     //   urlPattern: /.*\.js/,
    //     //   handler: 'NetworkFirst',
    //     //   options: {
    //     //     cacheableResponse: {
    //     //       statuses: [0, 200]
    //     //     }
    //     //   }
    //     // },
    //     {
    //       // 其他静态资源
    //       urlPattern: new RegExp('/static'),
    //       handler: 'CacheFirst'
    //     }
    //   ]
    // })
  ]
});

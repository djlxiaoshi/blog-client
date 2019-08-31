const { VueLoaderPlugin } = require('vue-loader');
const { basePath, resolve } = require('./config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
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
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"] // 由于要使用ssr，这里使用vue-style-loader来替换style-loader
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: resolve(basePath, 'images/[name]-[hash:8].[ext]'),
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
          name: resolve(basePath, 'fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: resolve(__dirname, '..', '/static'),
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

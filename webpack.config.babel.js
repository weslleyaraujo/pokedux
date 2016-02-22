import path from 'path';
import webpack, { HotModuleReplacementPlugin } from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import vars from 'postcss-simple-vars';

import cssConfig from './src/css-config';
const filename = 'bundle.js';
const publicPath = '/static/';

export default {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],

  resolve: {
    modulesDirectories: [
      'node_modules',
      'src'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename,
    publicPath
  },

  plugins: [
    new ExtractTextPlugin(`${publicPath}/style.css`, {
      allChunks: true
    }),
    new HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },

      {
        test: /\.css$/,
        loaders: [
          'style?singleton',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ]
      },

      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }
    ]
  },

  postcss: [
    autoprefixer(),
    nested(),
    vars({
      variables: () => {
        return cssConfig;
      }
    }),
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3000
  },
}

import path from 'path';
import webpack, { HotModuleReplacementPlugin } from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import vars from 'postcss-simple-vars';

import cssConfig from './src/assets/css/config';
const filename = 'bundle.js';
const publicPath = '/static/';

export default {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/assets/js/index'
  ],

  output: {
    path: path.join(__dirname, 'dist/assets/js'),
    filename,
    publicPath
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
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
      }
    ]
  },

  postcss: [
    autoprefixer(),
    vars({
      variables: () => {
        return cssConfig;
      }
    })
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3000
  },
}

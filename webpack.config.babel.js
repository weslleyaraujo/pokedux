import path from 'path';
import webpack, { HotModuleReplacementPlugin } from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import vars from 'postcss-simple-vars';

const { NODE_ENV } = process.env;
import cssConfig from './src/css-config';
const filename = 'bundle.js';
const publicPath = NODE_ENV === 'production'? './dist/' : '/dist/';

let entry = [];
let config = {};

if (NODE_ENV !== 'production') {
  entry.push('webpack-dev-server/client?http://localhost:3000');
  entry.push('webpack/hot/only-dev-server');
	config.devServer = {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		port: 3000,
	};
}

entry.push('./src/index');

export default {
  ...config,

  devtool: 'eval',

  entry,

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
}

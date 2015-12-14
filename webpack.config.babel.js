import path from 'path';
import webpack, { HotModuleReplacementPlugin } from 'webpack';

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
    new HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 3000
  },
}

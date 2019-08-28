/* eslint-disable strict */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/scripts/index.js', './src/scripts/api.js', './src/scripts/shopping-list.js', './src/scripts/store.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
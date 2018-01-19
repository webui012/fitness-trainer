const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'main.css',
  disable: process.env.NODE_ENV === 'development',
});

const config = {

  entry: [ 'babel-polyfill', './client/src/index.js' ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
            {
              loader: 'postcss-loader',
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  devServer: {
    compress: true,
    open: true,
    port: 6289,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './client/public/index.html' }),
    new CleanWebpackPlugin([ 'dist' ]),
    extractSass,
  ],

  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'client/src/components/'),
      Pages: path.resolve(__dirname, 'client/src/pages/'),
      Containers: path.resolve(__dirname, 'client/src/containers/'),
    },
  },
};

module.exports = config;

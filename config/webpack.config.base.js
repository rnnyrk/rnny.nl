const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const paths = require('./paths');

const baseConfig = {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[hash].js',
    path: paths.resolveRoot('dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /external/,
            loader: 'url-loader?limit=10000',
          },
          {
            loader: '@svgr/webpack',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        oneOf: [
          {
            resourceQuery: /external/,
            loader: 'file-loader?name=static/[name].[ext]',
          },
          {
            loader: 'url-loader?limit=10000&name=static/images/[hash].[ext]',
          },
        ],
      },
      {
        exclude: [
          /\.[tj]sx?$/,
          /\.css$/,
          /\.svg$/,
          /\.(jpe?g|png|gif)$/i,
          /\.json$/,
          /\.html$/,
          /\.ejs$/,
        ],
        loader: 'file-loader',
        options: { name: 'static/[name].[ext]' },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin(['./public']),
    new HtmlWebpackPlugin({
      template: paths.resolveSrc('template.ejs'),
      filename: 'index.html',
      chunksSortMode: 'none',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
    ],
  },
};

const merge = (...config) => webpackMerge(baseConfig, ...config);

module.exports = merge;

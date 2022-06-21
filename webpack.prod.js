/* eslint-disable no-sequences */
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('../../dist/', `quiz`),
    filename: 'quiz.js',
    chunkFilename: 'chunk.quiz.js',
  },
  externals: { react: 'React', 'react-dom': 'ReactDOM' },
  module: {
    rules: [
      {
        test: /\.(ts|jsx|tsx)?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sass|scss|css)?$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'assets/fonts/[name].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'assets/fonts/[name].[ext]',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    alias: {
      '@quiz/src': path.resolve('src/'),
      '@api': path.resolve('src/api/'),
      '@components': path.resolve('src/components/'),
      '@containers': path.resolve('src/containers/'),
      '@lib': path.resolve('src/lib'),
      '@templates': path.resolve('src/templates'),
      '@store': path.resolve('src/store'),
      '@shared': '../shared/src/',
    },
  },

  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/bundleTemplate.ejs',
      templateParameters: {
        reactCDN: true,
      },
    }),
    {
      apply: (compiler) => {
        compiler.hooks.done.tap('DonePlugin', () => {
          setTimeout(() => {
            process.exit(0);
          }, 500);
        });
      },
    },
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

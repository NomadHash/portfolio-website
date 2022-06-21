/* eslint-disable no-sequences */
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const fs = require('fs');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve('../../dist/', `quiz`),
    filename: 'quiz.js',
    chunkFilename: 'chunk.quiz.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(ts|jsx|tsx)?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { browsers: ['last 2 versions', 'not ie <= 10'] },
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: [
            '@emotion',
            [
              '@babel/plugin-transform-runtime',
              {
                regenerator: true,
              },
            ],
            [
              'module-resolver',
              {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                alias: {
                  '@quiz/src': path.resolve('src/'),
                  '@api': path.resolve('src/api/'),
                  '@components': path.resolve('src/components/'),
                  '@containers': path.resolve('src/containers/'),
                  '@lib': path.resolve('src/lib/'),
                  '@templates': path.resolve('src/templates/'),
                  '@store': path.resolve('src/store/'),
                  '@shared': '../shared/src/',
                },
              },
            ],
          ],
        },
      },
      {
        test: /\.(sass|scss|css)?$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['css-loader', 'sass-loader'],
        exclude: /node_modules/,
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
    new ReactRefreshWebpackPlugin(),
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
  ],

  devServer: {
    historyApiFallback: true,
    port: 3008,
    hot: true,
    open: false,
    // static: {
    //   directory: '../../static',
    // },
  },
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // Path to your index.html
        title: 'Text_Editor_Grillo'
      }),
      new WebpackPwaManifest({
        name: 'Text_Editor_Grillo',
        short_name: 'Grillo19',
        description: 'PWA Text Editor',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        crossorigin: 'use-credentials',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
      new InjectManifest({
        swSrc: './src/src-sw.js', // Ensure this path is correct
        swDest: 'service-worker.js',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        // Add CSS rules
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        // ... other rules if needed ...
      ],
    },
  };
};

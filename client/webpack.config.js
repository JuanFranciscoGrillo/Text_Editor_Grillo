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
      // ... (Any existing plugins you have should be listed here)
    ],
    module: {
      rules: [
        // Babel loader configuration
        {
          test: /\.js$/, // This will match all .js files
          exclude: /node_modules/, // Excludes the node_modules directory
          use: {
            loader: 'babel-loader', // Specifies babel-loader
            options: {
              presets: ['@babel/preset-env'], // Use the preset-env Babel preset
            },
          },
        },
        // ... (Add any other existing rules here)
      ],
    },
  };
};

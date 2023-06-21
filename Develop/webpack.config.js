const path = require('path');
const { WebpackPwaManifest } = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Text Editor',
      short_name: 'Editor',
      description: 'A progressive web application for creating and saving text documents.',
      background_color: '#ffffff',
      theme_color: '#31a9e1',
      icons: [
        {
          src: path.resolve('src/img/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/js/sw.js',
      swDest: 'service-worker.js',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
  },
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  js: path.resolve(__dirname, 'src/js'),
};

module.exports = {

  entry: path.join(paths.js, 'app.jsx'),

  output: {
    path: paths.dist,
    filename: 'app.bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

};

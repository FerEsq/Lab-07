const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  plugins: [
    new MiniCssExtractPlugin({
        filename: 'styles.bundle.css'
    }), 
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
        template: './src/libros-populares.html',
        filename: 'libros-populares.html',
        chunks: ['index']
    }),
    new HtmlWebpackPlugin({
        template: './src/nuevos-lanzamientos.html',
        filename: 'nuevos-lanzamientos.html',
        chunks: ['index']
    })
  ],
  
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};

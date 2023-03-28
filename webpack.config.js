const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
    }),
    new HtmlWebpackPlugin({
      template: './src/story/blue-end.html',
      filename: 'story/blue-end.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/blue-pill.html',
      filename: 'story/blue-pill.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/city.html',
      filename: 'story/city.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/everyone-end.html',
      filename: 'story/everyone-end.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/everyone.html',
      filename: 'story/everyone.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/lesson.html',
      filename: 'story/lesson.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/mistake.html',
      filename: 'story/mistake.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/pick-a-pill.html',
      filename: 'story/pick-a-pill.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/red-pill.html',
      filename: 'story/red-pill.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/you-end.html',
      filename: 'story/you-end.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/you.html',
      filename: 'story/you.html',
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

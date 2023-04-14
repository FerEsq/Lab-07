const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    inicio: './src/script/inicio.js',
    new: './src/script/new.js',
    popular: './src/script/popular.js',
    blueEnd: './src/script/story/blueEnd.js',
    bluePill: './src/script/story/bluePill.js',
    city: './src/script/story/city.js',
    everyoneEnd: './src/script/story/everyoneEnd.js',
    everyone: './src/script/story/everyone.js',
    lesson: './src/script/story/lesson.js',
    mistake: './src/script/story/mistake.js',
    pickApill: './src/script/story/pickApill.js',
    redPill: './src/script/story/redPill.js',
    youEnd: './src/script/story/you.js',
    you: './src/script/story/you.js',
    pollyfil: '@babel/polyfill'
  },

  output: {
    path: path.resolve(__dirname, 'dist_webpack_babel'),
    filename: '[name].bundle.js',
  },

  plugins: [
    new MiniCssExtractPlugin({
        filename: 'styles.bundle.css'
    }), 
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['inicio']
    }),
    new HtmlWebpackPlugin({
        template: './src/libros-populares.html',
        filename: 'libros-populares.html',
        chunks: ['popular']
    }),
    new HtmlWebpackPlugin({
        template: './src/nuevos-lanzamientos.html',
        filename: 'nuevos-lanzamientos.html',
        chunks: ['new']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/blue-end.html',
      filename: 'story/blue-end.html',
      chunks: ['blueEnd']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/blue-pill.html',
      filename: 'story/blue-pill.html',
      chunks: ['bluePill']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/city.html',
      filename: 'story/city.html',
      chunks: ['city']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/everyone-end.html',
      filename: 'story/everyone-end.html',
      chunks: ['everyoneEnd']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/everyone.html',
      filename: 'story/everyone.html',
      chunks: ['everyone']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/lesson.html',
      filename: 'story/lesson.html',
      chunks: ['lesson']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/mistake.html',
      filename: 'story/mistake.html',
      chunks: ['mistake']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/pick-a-pill.html',
      filename: 'story/pick-a-pill.html',
      chunks: ['pickApill']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/red-pill.html',
      filename: 'story/red-pill.html',
      chunks: ['redPill']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/you-end.html',
      filename: 'story/you-end.html',
      chunks: ['yuuEnd']
    }),
    new HtmlWebpackPlugin({
      template: './src/story/you.html',
      filename: 'story/you.html',
      chunks: ['you']
    })
  ],
  
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ],
  },
};

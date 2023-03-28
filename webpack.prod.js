const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    performance: {
        hints: false,
    },
    entry: {
        inicio: './src/script/inicio.js',
        new: './src/nuevos.js',
        popular: './src/populares.js',
        blueEnd: './src/story/blue-end.html',
        bluePill: './src/story/blue-pill.html',
        city: './src/story/city.html',
        everyoneEnd: './src/story/everyone-end.html',
        everyone: './src/story/everyone.html',
        lesson: './src/story/lesson.html',
        mistake: './src/story/mistake.html',
        pickApill: './src/story/pick-a-pill.html',
        redPill: './src/story/red-pill.html',
        youEnd: './src/story/you.html',
        you: './src/story/you.html'
    },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
      },
      plugins: [new MiniCssExtractPlugin({
        filename: 'bundle.css'
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
})
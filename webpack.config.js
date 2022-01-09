const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = (env, args) => {
  const { mode } = args
  const isProduction = mode === 'production'

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      publicPath: '/',
    },
    devServer: {
      port: 3000,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      compress: true,
      historyApiFallback: true,
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.png/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'public/manifest.json', to: '' },
          { from: 'public/assets/icon.png', to: 'assets' },
        ],
      }),
    ],
  }
}

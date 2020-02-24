const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:"production",
    entry : "./src/Index.jsx",
    output: {
        filename: 'bundle.js'
    },
    resolve: {
      extensions: [".jsx", ".js","scss"]
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              }
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader"
                }
              ]
            },
            {
              test: /\.(s[ac]ss|css)$/i,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader',
              ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
          minify: {
            collapseWhitespace: true
          },
          template: "./src/index.ejs",
          filename: "./index.html",
          title: 'LIVE - React + Redux with Webpack'
        })
      ]
}